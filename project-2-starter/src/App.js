//houses our routes 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/common/Home";
import Layout from "./components/common/Layout";
import CalendarPage from "./components/pictureOfTheDay/CalendarPage"
import DatePage from "./components/pictureOfTheDay/DatePage"
import './styles/main.scss'

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
