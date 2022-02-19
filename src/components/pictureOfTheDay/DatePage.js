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
    
    function getYesterday (date) {
      let newDate = new Date(date); // gets today's date into full javascript text string format
      let yesterday = new Date(newDate.setDate(newDate.getDate() - 1)) // decreses the date by 1 day to yesterday
      let tempYesterday = new Date(
        yesterday.getTime() -
        yesterday.getTimezoneOffset() * 60000
      )
      return tempYesterday.toISOString().split('T')[0]
    }

    console.log(getYesterday(date))
    return (`/datepage/${getYesterday(date)}`)

    // console.log('current page is /datepage/'.concat(date))
    // console.log("we're trying to get to /datepage/".concat(date.substring(0, date.length - 1).concat("1")))
    // return ("/datepage/".concat(date.substring(0, date.length - 1).concat("1")))
  }
  
  function nextDate(date) {
    function getTomorrow (date) {
      let newDate = new Date(date);
      let tomorrow = new Date(newDate.setDate(newDate.getDate() + 1))
      let tempTomorrow = new Date(
        tomorrow.getTime() -
        tomorrow.getTimezoneOffset() * 60000
      )
      return tempTomorrow.toISOString().split('T')[0]
    }

    console.log(getTomorrow(date))
    return (`/datepage/${getTomorrow(date)}`)

    // console.log("current page is /datepage/".concat(date))
    // console.log("we're trying to get to /datepage/".concat(date.substring(0, date.length - 1).concat("5")))
    // return ("/datepage/".concat(date.substring(0, date.length - 1).concat("5")))
  }

  return (
    <section className="section">
      <section className="level">
        <Link to={previousDate(date)}> <img className="prevArrowIcon" src="./images/nextIcon.png" alt="previousIcon" /></Link>
      <section className="mainContent">
      <div className="container">
        <h1>Here is the day's Nasa image</h1>
      
        <Link to = "/calendar">{"⬅ Back to calendar"}</Link>
   
        {apod ? <InfoCard {...apod} /> : <p>Loading image from space...</p>}
      </div>
      <div className="has-text-centered">
        <img style={{ padding: `2rem` }} width="350"
          height="175" src="https://media4.giphy.com/media/l0Iych4GHWMRxci2I/giphy.gif?cid=790b761194122cfca4d97229dc5a95369c32bf677d08d9ad&rid=giphy.gif&ct=g" alt="space dog"/>
      </div>
      </section>
<Link to={nextDate(date)}>
  <img
            className="nextArrowIcon"
    src='https://e7.pngegg.com/pngimages/361/489/png-clipart-blue-and-white-arrow-logo-bullet-computer-icons-arrow-next-button-blue-angle.png'
    alt='nextIcon'
  />
</Link>
</section>
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
