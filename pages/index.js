import React from "react";
import fetch from "isomorphic-unfetch";
import cheerio from "cheerio";
import FormData from "form-data";
import Car from "../components/CarItem";

const carBlacklist = [
  "hybrid", // Want BEV only
  "tazzari" // This is not a general use vehicle
];

export default class Page extends React.Component {
  static getInitialProps = async ({ req }) => {
    var form = new FormData();
    form.append("ctl00_contentSearchEngine_ctl00_search_fe", "1");

    const res = await fetch("https://bilasolur.is/Section.aspx?s=1", {
      method: "post",
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      },
      body:
        "__VIEWSTATE=%2FwEPDwULLTEwMTg4OTM5MjlkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYPBSVjdGwwMCRMb2dpblZpZXcxJGxvZ2luRm9ybSRSZW1lbWJlck1lBSpjdGwwMCRjb250ZW50U2VhcmNoRW5naW5lJGN0bDAwJHNlYXJjaF94bWEFKmN0bDAwJGNvbnRlbnRTZWFyY2hFbmdpbmUkY3RsMDAkc2VhcmNoX3htbQUrY3RsMDAkY29udGVudFNlYXJjaEVuZ2luZSRjdGwwMCRzZWFyY2hfZnRfMAUrY3RsMDAkY29udGVudFNlYXJjaEVuZ2luZSRjdGwwMCRzZWFyY2hfZnRfMQUpY3RsMDAkY29udGVudFNlYXJjaEVuZ2luZSRjdGwwMCRzZWFyY2hfZmUFKWN0bDAwJGNvbnRlbnRTZWFyY2hFbmdpbmUkY3RsMDAkc2VhcmNoX2ZoBSxjdGwwMCRjb250ZW50U2VhcmNoRW5naW5lJGN0bDAwJHNlYXJjaF9jYXRfMAUsY3RsMDAkY29udGVudFNlYXJjaEVuZ2luZSRjdGwwMCRzZWFyY2hfY2F0XzEFLWN0bDAwJGNvbnRlbnRTZWFyY2hFbmdpbmUkY3RsMDAkc2VhcmNoX2NhdF8xNAUsY3RsMDAkY29udGVudFNlYXJjaEVuZ2luZSRjdGwwMCRzZWFyY2hfY2F0XzgFLWN0bDAwJGNvbnRlbnRTZWFyY2hFbmdpbmUkY3RsMDAkc2VhcmNoX2NhdF8yOAUsY3RsMDAkY29udGVudFNlYXJjaEVuZ2luZSRjdGwwMCRzZWFyY2hfY2F0XzIFLGN0bDAwJGNvbnRlbnRTZWFyY2hFbmdpbmUkY3RsMDAkc2VhcmNoX2NhdF8zBSxjdGwwMCRjb250ZW50U2VhcmNoRW5naW5lJGN0bDAwJHNlYXJjaF9jYXRfNKOZpV4%2BDwHqftYBSHd8irWHmjM0eVxLyBvG0Gx197tY&ctl00%24contentSearchEngine%24ctl00%24search_fe=on&ctl00%24contentSearchEngine%24ctl00%24btnSearch=Leita"
    });

    const parsedPage = cheerio.load(await res.text());
    const parsedPages = [parsedPage];

    const getNextPage = async nextPageLink => {
      console.log("Getting next page", nextPageLink);
      const nextRes = await fetch(nextPageLink);

      const parsedNextHtml = cheerio.load(await nextRes.text());
      parsedPages.push(parsedNextHtml);

      const nextestPageLink = parsedNextHtml(".pagingCell .fa-angle-right")
        .parent()
        .attr("href");

      if (nextestPageLink) {
        console.log("Found", nextestPageLink, "on", nextPageLink);
        return getNextPage(`https://bilasolur.is/${nextestPageLink}`);
      }
    };

    const nextPageLink = parsedPage(".pagingCell .fa-angle-right")
      .parent()
      .attr("href");

    if (nextPageLink) {
      await getNextPage(`https://bilasolur.is/${nextPageLink}`);
    }

    const cars = [];

    parsedPages.map(page => {
      const srItems = page(".sr-item");
      srItems.each((i, element) => {
        const parsedElement = cheerio(element);
        const link = parsedElement.find(".sr-link").attr("href");
        if (!link) {
          // There are .sr-link items that are not car listings
          return;
        }

        const imageSrc = parsedElement.find("img.swiper-slide").attr("src");

        const model = parsedElement
          .find(".car-make-and-model")
          .text()
          .replace(parsedElement.find(".car-make").text(), "")
          .trim();

        const details = parsedElement.find(".tech-details div");

        cars.push({
          image: imageSrc && `https://bilasolur.is/${imageSrc}`,
          link: link && `https://bilasolur.is/${link}`,
          make: parsedElement.find(".car-make").text(),
          model: model.split(" ")[0],
          modelExtra: model
            .split(" ")
            .slice(1)
            .join(" "),
          date: cheerio(details[0])
            .text()
            .split(" · ")[0],
          milage: cheerio(details[1])
            .text()
            .split(" · ")[0],
          price: parsedElement.find(".car-price span").text()
        });
      });
    });

    return {
      cars: cars.filter(
        car =>
          carBlacklist.every(make => !car.make.toLowerCase().includes(make)) &&
          carBlacklist.every(make => !car.model.toLowerCase().includes(make)) &&
          carBlacklist.every(
            make => !car.modelExtra.toLowerCase().includes(make)
          )
      )
    };
  };

  state = {
    filter: undefined
  };

  handleSetFilter = filter => {
    this.setState({ filter });
  };

  render() {
    const { cars } = this.props;
    const { filter } = this.state;

    return (
      <div className="root" key="index">
        <h1>Notaðir Rafbílar</h1>

        <div className="filters">
          <div
            className="filter"
            style={!filter ? { backgroundColor: "#EEE" } : undefined}
            onClick={() => this.handleSetFilter()}
          >
            ALLIR <span className="count">{cars.length}</span>
          </div>

          {Object.entries(
            cars
              .map(car => car.make)
              .reduce(
                (makes, make) =>
                  makes[make]
                    ? { ...makes, [make]: makes[make] + 1 } // Add one count
                    : { ...makes, [make]: 1 }, // Create a new make and set to 1
                {}
              )
          ).map(([make, count]) => (
            <div
              key={make}
              className="filter"
              style={filter === make ? { backgroundColor: "#EEE" } : undefined}
              onClick={() => this.handleSetFilter(make)}
            >
              {make} <span className="count">{count}</span>
            </div>
          ))}
        </div>

        {cars
          .filter(car => !filter || car.make === filter)
          .map(car => (
            <Car car={car} key={car.link} />
          ))}

        <style jsx global>{`
          body {
            font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif;
            color: #111;
          }
        `}</style>

        <style jsx>
          {`
          .root {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            margin 0 auto;
            max-width: 560px;
            padding: 24px;
          }
          h1 {
            font-size: 40px;
            font-weight: 600;
          }
          .filters {
            display: flex;
          }
          .filter {
            font-size: 11px;
            font-weight: 600;
            margin-right: 2px;
            padding: 4px 8px;
            border-radius: 4px;
            cursor: pointer;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .filter:hover {
            background-color: #EEE;
          }
          .count {
            font-weight: 400;
            margin-left: 2px;
            color: #888;
          }
        `}
        </style>
      </div>
    );
  }
}
