import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  ListGroup,
  Navbar,
  Nav,
} from "react-bootstrap";

const TaskList = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      dueDate: "2023-05-11",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      dueDate: "2023-05-12",
      priority: "Medium",
      completed: false,
    },
    {
      id: 3,
      title: "Task 3",
      dueDate: "2023-05-13",
      priority: "Low",
      completed: true,
    },
    // Add more sample tasks here
  ]);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [taskInput, setTaskInput] = useState({
    title: "",
    dueDate: "",
    priority: "",
  });

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handlePriorityFilter = (e) => {
    const priority = e.target.value;
    setPriorityFilter(priority);
    if (priority === "All") {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter((task) => task.priority === priority);
      setFilteredTasks(filtered);
    }
  };

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchKeyword(keyword);
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(keyword)
    );
    setFilteredTasks(filtered);
  };

  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: taskInput.title,
      dueDate: taskInput.dueDate,
      priority: taskInput.priority,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
    setTaskInput({ title: "", dueDate: "", priority: "" });
  };

  const renderTaskList = () => {
    if (filteredTasks.length === 0) {
      return <p>No tasks found.</p>;
    }
    return (
      <>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Task title"
            value={taskInput.title}
            onChange={(e) =>
              setTaskInput({ ...taskInput, title: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="date"
            placeholder="Due date"
            value={taskInput.dueDate}
            onChange={(e) =>
              setTaskInput({ ...taskInput, dueDate: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="select"
            value={taskInput.priority}
            onChange={(e) =>
              setTaskInput({ ...taskInput, priority: e.target.value })
            }
          >
            <option value="">Select priority</option>
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </Form.Control>
        </Form.Group>
        <Button variant="success" onClick={handleAddTask}>
          Add Task
        </Button>
        <ListGroup>
          {filteredTasks.map((task) => (
            <ListGroup.Item key={task.id}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{task.title}</h5>
                  <p>Due Date: {task.dueDate}</p>
                  <p>Priority: {task.priority}</p>
                </div>
                <div>
                  {!task.completed && (
                    <Button
                      variant="primary"
                      className="mr-2"
                      onClick={() => handleCompleteTask(task.id)}
                    >
                      Mark as Complete
                    </Button>
                  )}
                  <Button variant="info" className="mr-2">
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
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
      <h1>Task List</h1>
      <div className="mb-4">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Search tasks..."
            value={searchKeyword}
            onChange={handleSearch}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="select"
            value={priorityFilter}
            onChange={handlePriorityFilter}
          >
            <option value="All">All Priorities</option>
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </Form.Control>
        </Form.Group>
      </div>
      {renderTaskList()}
    </Container>
  );
};

export default TaskList;
