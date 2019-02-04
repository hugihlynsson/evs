export default ({ car }) => (
  <article>
    <img src={car.heroImage} />
    <div className="content">
      <h1>
        <span className="make">{car.make}</span>{" "}
        <span className="model">{car.model}</span>
      </h1>

      <a className="price" target="_blank" href={car.sellerURL}>
        {car.price.toLocaleString("de")} kr.
      </a>

      <div className="info">
        <div className="info-item">
          <div className="info-item-label">0-100 km/klst</div>
          <div className="info-item-value">{car.acceleration}s</div>
        </div>

        <div className="info-item" style={{ flexShrink: 0 }}>
          <div className="info-item-label">Rafhlaða</div>
          <div className="info-item-value">{car.capacity} kWh</div>
        </div>

        <div className="info-item" title="Samkvæmt WLTP prófunum">
          <div className="info-item-label">Drægni</div>
          <div className="info-item-value">{car.range} km</div>
        </div>
      </div>

      <a className="more-info" target="_blank" href={car.evDatabaseURL}>
        Fleiri upplýsingar á ev-database.org
      </a>
    </div>

    <style jsx>
      {`
        article {
          margin-bottom: 32px;
        }

        img {
          width: 100%;
          height: 66.66vw;
        }

        .content {
          padding: 20px 24px 24px;
          margin 0 auto;
          max-width: 480px;
        }

        h1 {
          margin: 0;
          font-weight: 600;
          font-size: 32px;
        }
        .model {
          font-weight: 400;
        }

        .price {
          display: inline-block;
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
        .price:hover {
          background-color: #8CF;
        }

        .info {
          display: flex;
          margin-bottom: 24px;
          max-width: 320px;
          justify-content: space-between;
        }
        .info-item {
          margin-right: 16px;
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
          color: #aaa;
        }
        .info-item-value {
          font-size: 24px;
          font-weight: 400;
        }

        .more-info {
          display: inline-block;
          color: inherit;
          font-size: 14px;
        }

        @media screen and (min-width: 768px) {
          article {
            display: flex;
            margin: 40px 0;
            align-items: center;
          }

          img {
            width: 50%;
            height: auto;
            align-self: center;
            border-radius: 2px;
            padding-left: 40px;
          }

          .content {
            margin: 0 32px;
            padding: 0;
            max-width: 520px;
            flex-grow: 1;
          }
        }
      `}
    </style>
  </article>
);
