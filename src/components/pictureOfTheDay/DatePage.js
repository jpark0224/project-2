import React from "react";
import { Link, useParams } from "react-router-dom";
import InfoCard from "./InfoCard"


function DatePage() {
  const { date } = useParams();
  const [apod, setApod] = React.useState(undefined);
//apod = Astronomy Picture of the Day (abbreviation used by the NASA APOD API)
  React.useEffect(() => {
    async function fetchApod() {
      const resp = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=ZNZOJj0Nq1kjV9IBBHp5qNWaAfThwOh4Kn98vhuY`);
      const data = await resp.json();
      setApod(data);
      console.log(resp)
    }
    fetchApod();
  }, [date]);

  function previousDate(date) {
    
    let newDate = new Date(date);
    console.log(newDate)
    let yesterday = new Date(newDate.setDate(newDate.getDate() - 1))
    console.log(yesterday);

    console.log('current page is /datepage/'.concat(date))
    console.log("we're trying to get to /datepage/".concat(date.substring(0, date.length - 1).concat("1")))
    return ("/datepage/".concat(date.substring(0, date.length - 1).concat("1")))
  }

  function nextDate(date) {
    let newDate = new Date(date)
    console.log(newDate)
    let tomorrow = new Date(newDate.setDate(newDate.getDate() + 1))
    console.log(tomorrow)

    console.log("current page is /datepage/".concat(date))
    console.log("we're trying to get to /datepage/".concat(date.substring(0, date.length - 1).concat("5")))
    return ("/datepage/".concat(date.substring(0, date.length - 1).concat("5")))
  }

  console.log(date)

  return (
    <section className="section">
      <div className="container">
        <h1>Here is the day's Nasa image</h1>
      
        <Link to = "/calendar">{"⬅ Back to calendar"}</Link>
        <Link to={previousDate(date)}> Previous Page</Link>
        <Link to={nextDate(date)}> Next Page</Link>
        {apod ? <InfoCard {...apod} /> : <p>Loading image from space...</p>}
      </div>
      <div className="has-text-centered">
        <img style={{ padding: `2rem` }} width="350"
          height="175" src="https://media4.giphy.com/media/l0Iych4GHWMRxci2I/giphy.gif?cid=790b761194122cfca4d97229dc5a95369c32bf677d08d9ad&rid=giphy.gif&ct=g" />
      </div>
      <footer>
        <div className="container">
          <div className="content has-text-centered">
            <p className="footer-item">✨ Made with love by Julie, Laura, and Rachel 🚀 project 2 GA-sei-flex-22-ldn 🌙 </p>
          </div>
        </div>
      </footer> 
    </section>
   
    
  )
}

export default DatePage;
