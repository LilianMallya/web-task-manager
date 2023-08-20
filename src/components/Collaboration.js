import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  Card,
  Image,
  Form,
  Button,
  ListGroup,
} from "react-bootstrap";

const Collaboration = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", assignedTo: "John Doe", completed: false },
    { id: 2, title: "Task 2", assignedTo: "Jane Smith", completed: false },
    
  ]);

  const collaborators = [
    { id: 1, name: "John Doe", avatar: "john.jpg" },
    { id: 2, name: "Jane Smith", avatar: "jane.jpg" },
    
  ];

  const [comments, setComments] = useState([
    { id: 1, author: "John Doe", content: "This task looks great!" },
    {
      id: 2,
      author: "Jane Smith",
      content: "I have a question about this task.",
    },
    
  ]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const newId = comments.length + 1;
    const newCommentObj = {
      id: newId,
      author: "Current User",
      content: newComment,
    };
    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  const handleTaskComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const handleTaskAssign = (taskId, collaboratorId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            assignedTo: collaborators.find((c) => c.id === collaboratorId)
              ?.name,
          }
        : task
    );
    setTasks(updatedTasks);
  };

  const handleTaskUpdate = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
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

      <Container>
        <h1 className="mt-4 mb-3">Collaboration</h1>

        <h3 className="mb-3">Tasks</h3>
        {tasks.map((task) => (
          <Card key={task.id} className="mb-3">
            <Card.Body>
              <Card.Title>{task.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Assigned to: {task.assignedTo}
              </Card.Subtitle>
              {task.completed ? (
                <Card.Text>Completed</Card.Text>
              ) : (
                <Button onClick={() => handleTaskComplete(task.id)}>
                  Mark as Completed
                </Button>
              )}
            </Card.Body>
          </Card>
        ))}

        <h3 className="mb-3">Collaborators</h3>
        {collaborators.map((collaborator) => (
          <div key={collaborator.id} className="d-flex align-items-center mb-2">
            <Image
              src={collaborator.avatar}
              alt={collaborator.name}
              roundedCircle
              width={32}
              height={32}
              className="mr-2"
            />
            <span>{collaborator.name}</span>
          </div>
        ))}

        <h3 className="mb-3">Comments</h3>
        {comments.map((comment) => (
          <Card key={comment.id} className="mb-3">
            <Card.Body>
              <Card.Title>{comment.author}</Card.Title>
              <Card.Text>{comment.content}</Card.Text>
            </Card.Body>
          </Card>
        ))}

        <Form onSubmit={handleCommentSubmit} className="mb-3">
          <Form.Group>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Add a comment"
              value={newComment}
              onChange={handleCommentChange}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </Container>
  );
};

export default Collaboration;
