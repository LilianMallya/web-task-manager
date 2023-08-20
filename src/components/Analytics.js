import React from "react";
import { Container, Row, Col, Card, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const Analytics = () => {
 
  const taskCompletionRate = 78;
  
  const productivityTrends = [15, 20, 18, 22, 25, 30, 28];

  const productivityChartData = {
    labels: [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
    ],
    datasets: [
      {
        label: "Productivity Trends",
        data: productivityTrends,
        backgroundColor: "rgba(54, 162, 235, 0.8)",
        borderColor: "rgba(54, 162, 235, 1)",
        fill: false,
      },
    ],
  };

  const productivityChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: Math.max(...productivityTrends) + 5,
      },
    },
  };

  const totalTimeSpent = "25h 43m";
  const taskCategoryBreakdown = [
    { category: "Work", count: 15 },
    { category: "Personal", count: 8 },
    { category: "Health", count: 5 },
  ];
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
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
      <h1 className="text-center mt-4">Analytics</h1>

      <Card className="mt-4">
        <Card.Body>
          <h5>Task Completion Rate</h5>
          <h2 className="text-center">{taskCompletionRate}%</h2>
          {}
          {}
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Body>
          <h5>Productivity Trends</h5>
          <div
            className="chart-container"
            style={{ width: "50%", height: "400px", margin: "0 auto" }}
          >
            <Line
              data={productivityChartData}
              options={productivityChartOptions}
            />
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Body>
          <h5>Time Tracking Summary</h5>
          <h2 className="text-center">{totalTimeSpent}</h2>
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Body>
          <h5>Task Category Breakdown</h5>
          <Row>
            {taskCategoryBreakdown.map((category, index) => (
              <Col xs={4} key={index}>
                <h6>{category.category}</h6>
                <p>{category.count}</p>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Analytics;
