// import React from "react"
import Calendar from "react-calendar";
import React from "react"
// import { Redirect } from "react-router";
import { useNavigate } from "react-router-dom";

function CalendarPage() {
  // const [apod, setApod] = React.useState(undefined);
  const navigate = useNavigate()
  const [value, setValue] = React.useState(new Date());

  // React.useEffect(() => {
  //   async function fetchApod() {
  //     const resp = await fetch("https://api.nasa.gov/planetary/apod?start_date=2022-02-02&end_date=2022-02-02&api_key=ZNZOJj0Nq1kjV9IBBHp5qNWaAfThwOh4Kn98vhuY"
  //     );
  //     const data = await resp.json();
  //     setApod(data);
  //     // console.log(apod)
  //   }
  //   fetchApod();
  // }, []);

  function onChange(nextValue) {
    setValue(nextValue);
    // this is allowing to navigate the calendar by clicking eg. a day from a different month
  }

  function onClickDay() {
    // point to the DatePage component
    console.log("date clicked")
    navigate("/")
  }

  return (
    <Calendar
      // FUNCTIONS
      onChange={onChange}
      onClickDay={onClickDay}
      value={value}

      // SETTINGS
      // tileContent={<img src={apod[0].url} />}
      // titleContent={apod ? <img src={apod[0].url} alt={apod[0].title} /> : <p>Loading image from space...</p>}

      minDetail="month" // this means users can only see a month view (change to year to have year and month options)
      maxDate={new Date()} /      tileContent={<img src="https://media4.giphy.com/media/l0Iych4GHWMRxci2I/giphy.gif?cid=790b761194122cfca4d97229dc5a95369c32bf677d08d9ad&rid=giphy.gif&ct=g"/>}
      // tileContent={apod ? <CalendarImages {...apod[0]} /> : <p>Loading image from space...</p>}/ this stops users selecting future dates
      selectRange={true} // this allows users to select a range of dates - we will use this to show the pictures from all of these dates
      defaultView="month"
    />
  );

}

export default CalendarPage