// equivalent to ShowCheese

import React from "react";
import { Link } from "react-router-dom";
import InfoCard from "./InfoCard"

function DatePage() {
  // const { date } = useParams();
  const [apod, setApod] = React.useState(undefined);

  React.useEffect(() => {
    async function fetchApod() {
      const resp = await fetch("https://api.nasa.gov/planetary/apod?date=2022-02-14&api_key=ZNZOJj0Nq1kjV9IBBHp5qNWaAfThwOh4Kn98vhuY");
      const data = await resp.json();
      setApod(data);
    }
    fetchApod();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h1>Here is a picture of space</h1>
        {/* <div>
          {apod ? <img src={apod[0].url} alt={apod[0].title} /> : <p>Loading image from space...</p>}
          {apod ? <h2>{apod[0].title}</h2> : <p>Loading image from space...</p>}
        </div> */}
        <Link to="/calendar">{"⬅ Back to calendar"}</Link>
        {apod ? <InfoCard {...apod[0]} /> : <p>Loading image from space...</p>}
      </div>
    </section>
  )
}

export default DatePage;
