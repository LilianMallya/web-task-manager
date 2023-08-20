import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const sampleNotifications = ["Task 1 completed", "Task 2 overdue"];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const taskInput = e.target.taskInput.value;
    const newTask = { id: Date.now(), title: taskInput };
    setTasks([...tasks, newTask]);
    e.target.taskInput.value = "";
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setFirstName(e.target.firstName.value);
    setLastName(e.target.lastName.value);
  };

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "Good morning";
    } else if (currentHour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  const greeting = getGreeting();

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

      <Row className="mt-3 mx-0">
        <Col xs={12} className="text-center">
          <h2>{greeting}</h2>
          <p>"Your future is created by what you do today, not tomorrow."</p>
        </Col>
      </Row>

      <Row className="mt-3 mx-0">
        <Col xs={12} md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>User Profile</Card.Title>
              <Form onSubmit={handleProfileSubmit}>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Save Profile
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Task Summary</Card.Title>
              <ul>
                {tasks.map((task) => (
                  <li key={task.id}>{task.title}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Calendar Widget</Card.Title>
              <div className="text-center">
                <h4>{formattedDate}</h4>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3 mx-0">
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Card.Title>Notifications</Card.Title>
              <ul>
                {sampleNotifications.map((notification, index) => (
                  <li key={index}>{notification}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3 mx-0">
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Card.Title>Quick Task Input</Card.Title>
              <Form onSubmit={handleTaskSubmit}>
                <Form.Group controlId="taskInput">
                  <Form.Control type="text" placeholder="Enter a task" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Add Task
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
