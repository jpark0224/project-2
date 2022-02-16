// import React, { useState } from "react";
// import { render } from "react-dom";

// function App() {

//   return (
//     <h1>Home page</h1>
//   )


// }

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ? Here are some page components for you to use. Definitely test one at a time!
import Home from "./components/common/Home";
import Layout from "./components/common/Layout";
import CalendarPage from "./components/pictureOfTheDay/CalendarPage"
import DatePage from "./components/pictureOfTheDay/DatePage"
// import Calendar from "./components/picture of the day/Calendar";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/calendar" element={<CalendarPage />}/>
            <Route path="/datepage/:date" element={<DatePage />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App
