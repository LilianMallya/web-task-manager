import React from "react";
import { Container, Form, Button, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Settings = () => {
   const navigate = useNavigate();

   const handleNavigation = (path) => {
     navigate(path);
   };
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    
  };

  const handleUpdateNotification = (e) => {
    e.preventDefault();
   
  };

  const handleThemeSelection = (e) => {
    e.preventDefault();
    
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    
  };

  const handleDeleteAccount = (e) => {
    e.preventDefault();
   
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
      <h2>Settings</h2>
      <Form onSubmit={handleUpdateProfile}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formProfilePicture">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control type="file" accept="image/*" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Profile
        </Button>
      </Form>

      <Form className="mt-4" onSubmit={handleUpdateNotification}>
        <h4>Notification Preferences</h4>
        <Form.Check
          type="switch"
          id="emailNotification"
          label="Email Notifications"
        />

        <Form.Check
          type="switch"
          id="pushNotification"
          label="Push Notifications"
        />

        <Button variant="primary" type="submit">
          Save Preferences
        </Button>
      </Form>

      <Form className="mt-4" onSubmit={handleThemeSelection}>
        <h4>Theme Selection</h4>
        <Form.Group controlId="formTheme">
          <Form.Label>Choose a Theme</Form.Label>
          <Form.Control as="select">
            <option>Default</option>
            <option>Dark</option>
            <option>Light</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Apply Theme
        </Button>
      </Form>

     

      <Form className="mt-4" onSubmit={handleDeleteAccount}>
        <h4>Delete Account</h4>
        <p>Warning: Deleting your account is irreversible.</p>
        <Button variant="danger" type="submit">
          Delete Account
        </Button>
      </Form>
    </Container>
  );
};

export default Settings;
