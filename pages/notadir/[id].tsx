import React, { useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Error from 'next/error'
import fetch from 'isomorphic-unfetch'

import Toggles from '../../components/Toggles'
import Footer from '../../components/Footer'
import stableSort from '../../components/stableSort'
import usedCarModels from '../../apiHelpers/usedCarModels'

import { ProcessedUsedCar, UsedCarModel } from '../../types'
import Car from '../../components/UsedCarByModel'
import estimateWLTP from '../../modules/estimateWLTP'

type Sorting = 'price' | 'age' | 'milage'

interface Props {
  error?: number
  cars?: Array<ProcessedUsedCar>
  model?: UsedCarModel
}

const getCarMilage = (car: ProcessedUsedCar) =>
  Number(
    car.milage
      .replace(' km.', '')
      .split('.')
      .join(''),
  ) || 0

const UsedModel: NextPage<Props> = ({ cars, error, model }) => {
  const [sorting, setSorting] = useState<Sorting>('price')

  if (error || !cars || !model) {
    return <Error statusCode={error ?? 500} />
  }

  const filtered = cars.filter(
    (car) => !car.filtered && car.metadata && car.metadata.id === model.id,
  )

  const carSorter = (a: ProcessedUsedCar, b: ProcessedUsedCar): number => {
    switch (sorting) {
      case 'price': {
        return (
          (a.price || Number.MAX_SAFE_INTEGER) -
          (b.price || Number.MAX_SAFE_INTEGER)
        )
      }
      case 'milage': {
        return getCarMilage(a) - getCarMilage(b)
      }
      case 'age': {
        return (
          Number((b.date.split('/')[1] || '').split(' ')[0]) -
          Number((a.date.split('/')[1] || '').split(' ')[0])
        )
      }
      default: {
        return 1
      }
    }
  }

  return (
    <>
      <div className="root" key="used">
        <Head>
          <title key="title">
            {model.make} {model.model} — Veldu Rafbíl
          </title>
        </Head>

        <header>
          <Link href="/notadir">
            <a className="more-info">← Allir notaðir</a>
          </Link>

          <h1>
            <strong>{model.make}</strong> {model.model}
          </h1>

          <div className="info">
            <div className="info-item">
              <div className="info-item-label">0-100 km/klst</div>
              <div className="info-item-value">{model.acceleration}s</div>
            </div>

            <div className="info-item" style={{ flexShrink: 0 }}>
              <div className="info-item-label">Rafhlaða</div>
              <div className="info-item-value">{model.capacity} kWh</div>
            </div>

            <div className="info-item" title="Samkvæmt WLTP prófunum">
              <div className="info-item-label">
                Drægni{model.rangeNEDC && <strong>*</strong>}
              </div>
              <div className="info-item-value">
                {model.range ??
                  (model.rangeNEDC && estimateWLTP(model.rangeNEDC))}
                km
              </div>
            </div>
          </div>

          {model.evDatabaseURL && (
            <a
              className="more-info"
              target="_blank"
              href={model.evDatabaseURL}
              rel="noopener"
            >
              Nánar á ev-database.org ↗
            </a>
          )}

          <p className="description">
            <strong>{filtered.length}</strong> notaðir til sölu
          </p>

          <div className="sorting-title">Raða eftir:</div>
          <Toggles<Sorting>
            currentValue={sorting}
            items={[
              ['Verði', 'price'],
              ['Keyrslu', 'milage'],
              ['Aldri', 'age'],
            ]}
            onClick={setSorting}
          />
        </header>

        <div className="cars">
          {stableSort(filtered, carSorter).map((car) => (
            <Car car={car} key={car.link} />
          ))}
        </div>
      </div>

      <Footer />

      <style jsx>{`
          .root {
            margin 0 auto;
            padding: 24px 0;
          }

          header {
            padding: 0 16px;
            display: flex;
            flex-direction: column;
            align-items: stretch;
          }

          h1 {
            font-size: 40px;
            font-weight: 400;
            line-height: 1.1;
          }
          h1 strong {
            font-weight: 600;
          }

          .description {
            line-height: 1.5;
            font-size: 24px;
            margin: 1em 0 1em 0;
            color: #555;
            max-width: 33em;
          }
          .description a,
          .description strong {
            text-decoration: none;
            font-weight: 500;
            color: black;
          }
          .description a:hover {
            text-decoration: underline;
          }

          .sorting-title {
            margin-bottom: 8px;
            font-size: 14px;
            font-weight: 600;
          }

          .info {
            display: flex;
            margin-bottom: 16px;
            max-width: 320px;
            justify-content: space-between;
          }
          .info-item {
            margin-right: 8px;
            flex-basis: 33.33%;
          }
          .info-item:last-child {
            margin-right: 0;
          }
          .info-item-label {
            text-transform: uppercase;
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.05em;
            margin-bottom: 2px;
            color: #555;
          }
          .info-item-label strong {
            color: #000;
          }
          .info-item-value {
            font-size: 24px;
            font-weight: 400;
          }
          .more-info {
            display: inline-block;
            align-self: flex-start;
            color: inherit;
            margin-top: 8px;
            margin-bottom: 24px;
            font-size: 14px;
            font-weight: 600;
            background-color: #EEE;
            border-radius: 100px;
            padding: 4px 12px;
            text-decoration: none;
            margin-left: -2px;
            transition: background-color 0.1s;
          }
          .more-info:hover {
            background-color: #8CF;
          }

          .cars {
            display: grid;
            grid-gap: 32px;
            grid-template-columns: 1fr;
            margin-top: 32px;
          }

          @media screen and (min-width: 375px) {
            header {
              padding: 24px;
            }
            h1 {
              font-size: 48px;
            }

            .info-item {
              margin-right: 16px;
            }
          }

          @media screen and (min-width: 768px) {
            h1 {
              font-size: 64px;
            }

            .cars {
              grid-template-columns: 1fr 1fr;
              margin: 24px;
            }
          }

          @media screen and (min-width: 1194px) {
            header {
              max-width: none;
              padding-bottom: 40px; 
            }
            
            .root {
              margin 0 auto;
              max-width: 1280px;
            }

            .cars {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
        `}</style>
    </>
  )
}

UsedModel.getInitialProps = async ({ req, query }): Promise<Props> => {
  try {
    if (!query.id) {
      return { error: 404 }
    }

    const baseUrl =
      req && req.headers
        ? `${req.headers['x-forwarded-proto'] || 'https'}://${req.headers[
            'x-forwarded-host'
          ] || req.headers.host}`
        : ''

    const model = usedCarModels.find((model) => model.id === query.id)
    if (!model) {
      return { error: 404 }
    }

    const response = await fetch(`${baseUrl}/api/used`)
    const json = await response.json()

    if (json.error) {
      throw json.error
    }

    return { cars: json.cars as Array<ProcessedUsedCar>, model }
  } catch (error) {
    console.log('Failed to fetch cars', error)
    return { error: 500 }
  }
}

export default UsedModel