import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from "./components/signup"
import LoginPage from "./components/login";
import Dashboard from "./components/Dashboard";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.css";
import Calendar from "./components/CalendarView"
import Habit from "./components/Habit";
import Collaboration from "./components/Collaboration";
import Settings from "./components/Settings";
import Notifications from "./components/Notifications";
import Analytics from "./components/Analytics";
import Accounts from "./components/Accounts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/TaskList" element={<TaskList />} />
          <Route path="/CalendarView" element={<Calendar />} />
          <Route path="/HabitTracker" element={<Habit />} />
          <Route path="/Collaboration" element={<Collaboration />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Accounts" element={<Accounts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
