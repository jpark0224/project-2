// Returns the images for the calendar month displayed

import React from "react"




function CalendarImage () {
// const { dateImage }
    const [apod, setApod] = React.useState(undefined);

    React.useEffect(() => {
        async function fetchApod() {
          const resp = await fetch("https://api.nasa.gov/planetary/apod?start_date=2022-02-02&end_date=2022-02-02&api_key=ZNZOJj0Nq1kjV9IBBHp5qNWaAfThwOh4Kn98vhuY"
          );
          const data = await resp.json();
          setApod(data);
          // console.log(apod)
        }
        fetchApod();
      }, []);

    return (
      ({ date, view }) => view === "month" && date.getDate() === 1 ? <img display-name="hi" src={apod ? apod[0].url : "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg"} /> : null
    )
    
}

export default CalendarImage

// tileContent={<img src={apod ? apod[0].url : "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg"} />}