//shows the Calendar consuming NASA's APOD (Astronomy Picture of the Day)

import Calendar from "react-calendar";
import React from "react"
import { useNavigate } from "react-router-dom";
import CalendarImages from "./CalendarImages"

function CalendarPage() {
  const navigate = useNavigate()
  const [apod, setApod] = React.useState(undefined);
  //apod = Astronomy Picture of the Day (abbreviation used by the NASA APOD API)
  
  let date = new Date() // get today's date
   let firstDateOfCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 1) // get the first date of current month
  let summerTimeAdjustedFirstDate = new Date(
    firstDateOfCurrentMonth
      .getTime() - firstDateOfCurrentMonth.getTimezoneOffset() * 60000
  ).toISOString().split("T")[0] // adjust the first date of current month to offset issues with British Summer Time and format it into YYYY-MM-DD
  let formattedToday = new Date(
    date
      .getTime() - date.getTimezoneOffset() * 60000
  ).toISOString().split("T")[0] // adjust today's date to offset issues with British Summer Time and format it into YYYY-MM-DD

  // date states
  const [value, setValue] = React.useState(new Date())
  const [formattedStartDate, setStartDate] = React.useState(summerTimeAdjustedFirstDate);
  const [formattedEndDate, setEndDate] = React.useState(formattedToday);

  // fetch data from a start date to end date (today if the calendar page is in current month)
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

 

  function onActiveStartDateChange(action) {
    let startDate = new Date(
  action.activeStartDate.getTime() -
    action.activeStartDate.getTimezoneOffset() * 60000
) // adjust the start date of the month to offset issues with British Summer Time 
    let formattedStartDate = startDate.toISOString().split('T')[0] // format he adjusted date into YYYY-MM-DD
    let lastDate = new Date(startDate.getFullYear() // fetches the year
, startDate.getMonth()
 + 1, 0) // get the last date of the month
    let formattedLastDate = new Date(
  lastDate.getTime() - lastDate.getTimezoneOffset() * 60000
).toISOString().split("T")[0] // format the last date of the month into YYYY-MM-DD
    setApod(undefined); // reset the images previously fetched in calendar
    setStartDate(formattedStartDate) // set start date state into the current start date
    setEndDate(formattedLastDate)
    // set end date state into the current end date
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
      <Calendar                 // This is the calendar library. The lines below all edit how the library works
        // FUNCTIONS            These pass the above functions into the Calendar library functionality
        onChange={onChange}
        onClickDay={onClickDay}
        value={value}
        onActiveStartDateChange={onActiveStartDateChange}

        // SETTINGS             These are simply parameters affecting how the calendar is displayed
        minDetail="month" // this means users can only see a month view (change to year to have year and month options)
        maxDate={new Date()} // this stops users selecting future dates
        tileContent={decideImage}

        selectRange={true} // this allows users to select a range of dates - we will use this to show the pictures from all of these dates
        defaultView="month"
        showNeighboringMonth={false} // this ensures we only show dates from the current month
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