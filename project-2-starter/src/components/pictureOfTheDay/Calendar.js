// import React from "react"
import Calendar from "react-calendar";
import React from "react"


function Calendar2() {

  const [value, setValue] = React.useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
    // this is allowing to navigate the calendar by clicking eg. a day from a different month
  }

  function onClickDay() {
    // point to the DatePage component
  }


  return (
    <Calendar
      // FUNCTIONS
      onChange={onChange}
      onClickDay={onClickDay}
      value={value}

      // SETTINGS
      tileContent={<img src="https://media4.giphy.com/media/l0Iych4GHWMRxci2I/giphy.gif?cid=790b761194122cfca4d97229dc5a95369c32bf677d08d9ad&rid=giphy.gif&ct=g"/>}
      minDetail="month" // this means users can only see a month view (change to year to have year and month options)
      maxDate={new Date()} // this stops users selecting future dates
      selectRange={true} // this allows users to select a range of dates - we will use this to show the pictures from all of these dates
      defaultView="month"
    />
  );

}

export default Calendar2

// import React from "react";

// function CheeseIndex() {
//   const [cheeses, setCheeses] = React.useState([]);

//   React.useEffect(() => {
//     console.log("Index page mounted");
//   }, []);

//   React.useEffect(() => {
//     async function fectchCheeses() {
//       const resp = await fetch("https://ga-cheesebored.herokuapp.com/cheeses/");
//       const data = await resp.json();
//       setCheeses(data);
//     }
//     fectchCheeses();
//   }, []);

//   return (
//     <section className="section">
//       <div className="container">
//         <div className="columns is-multiline">
//           {cheeses ? (
//             cheeses.map((cheese) => <CheeseCard key={cheese._id} {...cheese} />)
//           ) : (
//             <p>...loading</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default CheeseIndex;
