import React, { useState } from "react";
import { Container, ListGroup, Button, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Notifications = () => {
   const navigate = useNavigate();

   const handleNavigation = (path) => {
     navigate(path);
   };
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Task 1 has been completed.", read: true },
    { id: 2, message: "You have an upcoming event tomorrow.", read: false },
    { id: 3, message: "Task 2 is due today.", read: false },
  ]);

  const markAsRead = (id) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === id) {
        return { ...notification, read: true };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
  };

  const markAsUnread = (id) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === id) {
        return { ...notification, read: false };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
  };

  const clearAllNotifications = () => {
    setNotifications([]);
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
      <h1>Notifications</h1>
      {notifications.length > 0 ? (
        <ListGroup>
          {notifications.map((notification) => (
            <ListGroup.Item
              key={notification.id}
              className={notification.read ? "read" : "unread"}
            >
              <div>{notification.message}</div>
              {notification.read ? (
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => markAsUnread(notification.id)}
                >
                  Mark as Unread
                </Button>
              ) : (
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => markAsRead(notification.id)}
                >
                  Mark as Read
                </Button>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <div>No notifications</div>
      )}
      {notifications.length > 0 && (
        <Button
          variant="danger"
          onClick={clearAllNotifications}
          className="mt-3"
        >
          Clear All Notifications
        </Button>
      )}
    </Container>
  );
};

export default Notifications;
