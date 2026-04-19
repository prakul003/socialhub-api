const express = require("express");
const app = express();

app.use(express.json());

// Temporary Data Storage
let users = [];
let posts = [];

// Home Route
app.get("/", (req, res) => {
  res.send("SocialHub API Running");
});

// Register API
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    return res.status(400).json({ error: "Email already exists" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password
  };

  users.push(newUser);

  res.json({
    message: "User registered successfully",
    userId: newUser.id
  });
});

// Login API
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    user => user.email === email && user.password === password
  );

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  res.json({
    message: "Login successful",
    token: "abc123xyz",
    userId: user.id
  });
});

// Create Post API
app.post("/api/posts", (req, res) => {
  const { title, content, userId } = req.body;

  const newPost = {
    id: posts.length + 1,
    title,
    content,
    userId
  };

  posts.push(newPost);

  res.json({
    message: "Post created successfully",
    postId: newPost.id
  });
});

// Get All Posts API
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});