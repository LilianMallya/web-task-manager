import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  Form,
  ListGroup,
  Navbar,
  Nav,
} from "react-bootstrap";

const Habit = () => {
  const navigate = useNavigate();

   

   const handleNavigation = (path) => {
     navigate(path);
   };

  const [habits, setHabits] = useState([
    {
      id: 1,
      title: "Exercise",
      streak: 5,
      progress: [true, true, false, true, true, true, true],
    },
    {
      id: 2,
      title: "Read",
      streak: 3,
      progress: [true, true, true, false, false, true, true],
    },
    // Add more sample habits here
  ]);


  const [newHabit, setNewHabit] = useState("");

  const handleHabitCompletion = (habitId, dayIndex) => {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === habitId) {
        const updatedProgress = [...habit.progress];
        updatedProgress[dayIndex] = !updatedProgress[dayIndex];
        return {
          ...habit,
          progress: updatedProgress,
          streak: calculateStreak(updatedProgress),
        };
      }
      return habit;
    });
    setHabits(updatedHabits);
  };

  const calculateStreak = (progress) => {
    let streak = 0;
    for (let i = progress.length - 1; i >= 0; i--) {
      if (progress[i]) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  };

  const handleAddHabit = () => {
    if (newHabit.trim() === "") {
      return;
    }
    const newHabitObject = {
      id: habits.length + 1,
      title: newHabit,
      streak: 0,
      progress: Array(7).fill(false),
    };
    setHabits([...habits, newHabitObject]);
    setNewHabit("");
  };

  const renderHabitList = () => {
    if (habits.length === 0) {
      return <p>No habits found.</p>;
    }
    return (
      <ListGroup>
        {habits.map((habit) => (
          <ListGroup.Item key={habit.id}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5>{habit.title}</h5>
                <p>Streak: {habit.streak} days</p>
              </div>
              <div>
                {habit.progress.map((completed, index) => (
                  <Button
                    key={index}
                    variant={completed ? "success" : "secondary"}
                    className="mr-2"
                    onClick={() => handleHabitCompletion(habit.id, index)}
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
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
            <Nav.Link onClick={() => handleNavigation("/Calendarview")}>
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
      <h1>Habit Tracker</h1>
      <div className="mb-4">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Add a new habit"
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddHabit}>
          Add Habit
        </Button>
      </div>
      {renderHabitList()}
    </Container>
  );
};

export default Habit;
 
