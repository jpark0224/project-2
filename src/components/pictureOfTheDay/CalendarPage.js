//shows the Calendar consuming NASA's APOD (Astronomy Picture of the Day)

import Calendar from "react-calendar";
import React from "react"
import { useNavigate } from "react-router-dom";
import CalendarImages from "./CalendarImages"

function CalendarPage() {
  const navigate = useNavigate()
  const [value, setValue] = React.useState(new Date());
  const [apod, setApod] = React.useState(undefined);
  //apod = Astronomy Picture of the Day (abbreviation used by the NASA APOD API)
  let date = new Date()
   let firstDateOfCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 1)
  let summerTimeAdjustedFirstDate = new Date(
    firstDateOfCurrentMonth
      .getTime() - firstDateOfCurrentMonth.getTimezoneOffset() * 60000
  ).toISOString().split("T")[0]
  let formattedToday = new Date(
    date
      .getTime() - date.getTimezoneOffset() * 60000
  ).toISOString().split("T")[0]
  const [formattedStartDate, setStartDate] = React.useState(summerTimeAdjustedFirstDate);
  const [formattedEndDate, setEndDate] = React.useState(formattedToday);

  React.useEffect(() => {
    async function fetchApod() {
      const resp = await fetch(`https://api.nasa.gov/planetary/apod?start_date=${formattedStartDate}&end_date=${formattedEndDate}&thumbs=true&api_key=ZNZOJj0Nq1kjV9IBBHp5qNWaAfThwOh4Kn98vhuY`);
      const data = await resp.json();
      setApod(data);
    }
     fetchApod();
  }, [formattedStartDate, formattedEndDate]);

  function onChange(nextValue) {
    setValue(nextValue);
    // this is allowing to navigate the calendar by clicking eg. a day from a different month
  }

  function onClickDay(value) {
    // point to the DatePage component
    const calendarDate = new Date(
      value.getTime() -
      value.getTimezoneOffset() * 60000
    ).toISOString().split('T')[0]
    const dateToString = calendarDate.toString()
    console.log("date clicked")
    navigate(`/datepage/${dateToString}`)
    console.log(dateToString)
  }

  function onActiveStartDateChange(action) {
    let startDate = new Date(
  action.activeStartDate.getTime() -
    action.activeStartDate.getTimezoneOffset() * 60000
)
    let formattedStartDate = startDate.toISOString().split('T')[0]
    let lastDate = new Date(startDate.getFullYear()
, startDate.getMonth()
 + 1, 0)
    let formattedLastDate = new Date(
  lastDate.getTime() - lastDate.getTimezoneOffset() * 60000
).toISOString().split("T")[0]
    setApod(undefined);
    setStartDate(formattedStartDate)
    setEndDate(formattedLastDate)
  } 

  function decideImage({ date }) {
    //this draws the images into the calendar from CalendarImages component
    if (date <= new Date()) {
      return (
        <>
          {apod ? <CalendarImages {...apod[date.getDate() - 1]} /> : <img className="loadingImg" src="https://cdn.dribbble.com/users/1260892/screenshots/6529031/planets.gif" alt="loading"/> }
        </>
      )
    }
  }

  return (
    <>
      <h1 style={{ margin: `2rem` }} className="title bold has-text-centered">Space Calendar </h1>
      <h2 className="subtitle has-text-centered">✨ our universe is beautiful✨  click on one of NASA's images of the day to learn more! 🚀</h2>
      <div className="calendarContainer">
      <Calendar
        // FUNCTIONS
        onChange={onChange}
        onClickDay={onClickDay}
        value={value}
        onActiveStartDateChange={onActiveStartDateChange}

        // SETTINGS
        minDetail="month" // this means users can only see a month view (change to year to have year and month options)
        maxDate={new Date()} // this stops users selecting future dates
        tileContent={decideImage}

        selectRange={true} // this allows users to select a range of dates - we will use this to show the pictures from all of these dates
        defaultView="month"
        showNeighboringMonth={false}
        className={['react-calendar']} 
        tileClassName="tile"
        />
        </div>
      <footer>
        <div className="content has-text-centered">
            <p style={{padding: `1rem`}}>✨ Made with love by Julie, Laura, and Rachel 🚀 project 2 GA-sei-flex-22-ldn 🌙 </p>
          </div>
      </footer> 
    </>
  );
}


export default CalendarPage