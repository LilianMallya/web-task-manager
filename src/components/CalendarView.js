import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Container, Table, Navbar, Nav } from "react-bootstrap";

const CalendarView = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [eventsAndTasks, setEventsAndTasks] = useState([
    { date: "2023-05-01", title: "Event 1" },
    { date: "2023-05-05", title: "Event 2" },
    { date: "2023-05-05", title: "Task 1" },
    { date: "2023-05-10", title: "Task 2" },
    
  ]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newMonth = prevMonth - 1;
      if (newMonth < 0) {
        setCurrentYear((prevYear) => prevYear - 1);
        return 11;
      }
      return newMonth;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newMonth = prevMonth + 1;
      if (newMonth > 11) {
        setCurrentYear((prevYear) => prevYear + 1);
        return 0;
      }
      return newMonth;
    });
  };

  const renderCalendar = () => {
    const currentDate = new Date();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const calendar = [];

   
    for (let i = 1; i <= daysInMonth; i++) {
      const date = `${currentYear}-${currentMonth + 1 < 10 ? "0" : ""}${
        currentMonth + 1
      }-${i < 10 ? "0" : ""}${i}`;
      const hasEventOrTask = eventsAndTasks.some((item) => item.date === date);
      calendar.push(
        <td
          key={date}
          className={`${selectedDate === date ? "bg-primary text-white" : ""} ${
            hasEventOrTask ? "bg-success" : ""
          }`}
          onClick={() => handleDateClick(date)}
        >
          {i}
        </td>
      );
    }

    
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendar.unshift(<td key={`empty-${i}`}></td>);
    }

  
    const totalCells = 35; 
    while (calendar.length < totalCells) {
      calendar.push(<td key={`empty-${calendar.length}`}></td>);
    }

    return calendar;
  };

  const renderEventTaskList = () => {
    if (!selectedDate) {
      return <p>No date selected.</p>;
    }

    const eventsTasksForDate = eventsAndTasks.filter(
      (item) => item.date === selectedDate
    );

    if (eventsTasksForDate.length === 0) {
      return <p>No events or tasks for the selected date.</p>;
    }

    return (
      <ul>
        {eventsTasksForDate.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    );
  };

  const handleAddEventTask = () => {
   
    navigate("/TaskList");
  };

  return (
    <Container fluid className="p-0">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Task Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => handleNavigation("/Dashboard")}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => handleNavigation("/TaskList")}>
              Tasks
            </Nav.Link>
            <Nav.Link onClick={() => handleNavigation("/CalendarView")}>
              Calendar
            </Nav.Link>
            <Nav.Link onClick={() => handleNavigation("/HabitTracker")}>
              HabitTracker
            </Nav.Link>
            <Nav.Link onClick={() => handleNavigation("/Collaboration")}>
              Collaboration
            </Nav.Link>
            <Nav.Link onClick={() => handleNavigation("/Analytics")}>
              Analytics
            </Nav.Link>
            <Nav.Link onClick={() => handleNavigation("/Notifications")}>
              Notifications
            </Nav.Link>
            <Nav.Link onClick={() => handleNavigation("/Settings")}>
              Settings
            </Nav.Link>
            <Nav.Link onClick={() => handleNavigation("/Accounts")}>
              Accounts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <h1>Calendar View</h1>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Button variant="secondary" onClick={handlePrevMonth}>
          Prev Month
        </Button>
        <h2>
          {new Date(currentYear, currentMonth).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <Button variant="secondary" onClick={handleNextMonth}>
          Next Month
        </Button>
      </div>
      <Table bordered>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {renderCalendar()
            .reduce((rows, cell, index) => {
              if (index % 7 === 0) rows.push([]);
              rows[rows.length - 1].push(cell);
              return rows;
            }, [])
            .map((row, index) => (
              <tr key={index}>{row}</tr>
            ))}
        </tbody>
      </Table>
      <div className="mt-4">
        <h3>Events and Tasks for {selectedDate}</h3>
        {renderEventTaskList()}
      </div>
      <Button variant="primary" className="mt-4" onClick={handleAddEventTask}>
        <Link to="/TaskList" className="btn btn-primary mt-4">
          Add Event/Task
        </Link>
      </Button>
    </Container>
  );
};

export default CalendarView;
