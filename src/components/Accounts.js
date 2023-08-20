import React, { useState } from "react";
import { Container, Form, Button, Card, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Accounts = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailPreferences, setEmailPreferences] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
   
    if (newPassword === confirmPassword) {
      console.log("Password updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      console.log("Password and confirm password do not match!");
    }
  };

  const handleToggleEmailPreferences = () => {
    setEmailPreferences(!emailPreferences);
   
    console.log("Email preferences updated successfully!");
  };

  const handleDataExport = () => {
   
    console.log("Data export initiated!");
  };

  const handleLogout = () => {
    
    console.log("User logged out successfully!");
    
    navigate("/login");
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
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Account Management</Card.Title>
          <Form className="mt-4">
            <Form.Group controlId="formCurrentPassword">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formNewPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleChangePassword}>
              Change Password
            </Button>
          </Form>

          <Form className="mt-4">
            <Form.Group controlId="formEmailPreferences">
              <Form.Check
                type="switch"
                label="Email Preferences"
                checked={emailPreferences}
                onChange={handleToggleEmailPreferences}
              />
            </Form.Group>
          </Form>

          <Button variant="primary" onClick={handleDataExport} className="mt-4">
            Data Export
          </Button>

          <Button variant="primary" onClick={handleLogout} className="mt-4">
            Log Out
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Accounts;
