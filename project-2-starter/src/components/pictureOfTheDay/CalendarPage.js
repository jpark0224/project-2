// import React from "react"
import Calendar from "react-calendar";
import React from "react"
import { useNavigate } from "react-router-dom";
import CalendarImages from "./CalendarImages"

function CalendarPage() {
  const navigate = useNavigate()
  const [value, setValue] = React.useState(new Date());
  const [apod, setApod] = React.useState(undefined);
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
  const [formattedDate, setDate] = React.useState(summerTimeAdjustedFirstDate);

  React.useEffect(() => {
    async function fetchApod() {
      const resp = await fetch(`https://api.nasa.gov/planetary/apod?start_date=${formattedDate}&thumbs=true&api_key=ZNZOJj0Nq1kjV9IBBHp5qNWaAfThwOh4Kn98vhuY`);
      const data = await resp.json();
      setApod(data);
    }
    fetchApod();
  }, [formattedDate]);

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
    console.log(formattedStartDate, formattedLastDate);
    setDate(formattedStartDate)
  } 

  function decideImage({ date }) {
    if (date <= new Date()) {
      return (
        <>
          {apod ? <CalendarImages {...apod[date.getDate() - 1]} /> : <p>Loading image from space...</p>}
        </>
      )
    }
  }

  return (
    <>
      <h1 className="title bold has-text-centered">Welcome to our Calendar</h1>
      <Calendar
        // FUNCTIONS
        onChange={onChange}
        onClickDay={onClickDay}
        value={value}
        onActiveStartDateChange={onActiveStartDateChange}

        // SETTINGS
        minDetail="month" // this means users can only see a month view (change to year to have year and month options)
        maxDate={new Date()} // this stops users selecting future dates

        // tileContent={({ date, view }) => view === "month" && date.getDate() === 1 ? <img src={apod ? apod[0].url : "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg"} /> : null}
        tileContent={decideImage}
        // tileContent={tileContentGenerator}
        
        selectRange={true} // this allows users to select a range of dates - we will use this to show the pictures from all of these dates
        defaultView="month"
        showNeighboringMonth={false}
      />
      <div className="has-text-centered">
        <img width="500"
          height="300" src="https://media4.giphy.com/media/l0Iych4GHWMRxci2I/giphy.gif?cid=790b761194122cfca4d97229dc5a95369c32bf677d08d9ad&rid=giphy.gif&ct=g" />
      </div>
      
    </>
  );
}


export default CalendarPage