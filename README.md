# SocialHub API 🚀

A simple REST API built using **Node.js** and **Express.js** for user authentication and post creation.

This project was created as part of an internship evaluation task to demonstrate backend API design, request handling, and CRUD fundamentals.


# 📌 Features

* User Registration
* User Login
* Create Post
* Get All Posts
* JSON Request / Response Handling
* REST API Architecture


# 🛠 Tech Stack

* Node.js
* Express.js
* Postman (for testing)


# 📂 Project Structure

socialhub-api/
│── server.js
│── package.json
│── package-lock.json
│── README.md


# ▶️ How to Run Locally

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/socialhub-api.git
```

### 2. Open Project Folder

```bash
cd socialhub-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Server

```bash
node server.js
```

Server runs on:

```text
http://localhost:5000
```


# 📡 API Endpoints

# 🔹 Register User

**POST** `/api/register`

### Request Body

```json
{
  "name": "Rahul",
  "email": "rahul.dev@example.com",
  "password": "123456"
}
```

### Response

```json
{
  "message": "User registered successfully",
  "userId": 1
}
```


# 🔹 Login User

**POST** `/api/login`

### Request Body

```json
{
  "email": "rahul.dev@example.com",
  "password": "123456"
}
```

### Response

```json
{
  "message": "Login successful",
  "token": "abc123xyz",
  "userId": 1
}
```


# 🔹 Create Post

**POST** `/api/posts`

### Request Body

```json
{
  "title": "My First Post",
  "content": "Hello everyone, this is my first post!",
  "userId": 1
}
```

### Response

```json
{
  "message": "Post created successfully",
  "postId": 1
}
```


# 🔹 Get All Posts

**GET** `/api/posts`

### Response

```json
[
  {
    "id": 1,
    "title": "My First Post",
    "content": "Hello everyone, this is my first post!",
    "userId": 1
  }
]
```


# 📸 API Testing Screenshots

Add your Postman screenshots here.

* Register API
  <img width="1918" height="1016" alt="Screenshot 2026-04-19 101605" src="https://github.com/user-attachments/assets/80b2b8cb-1082-40a4-99f0-4a7a6f4f9729" />

* Login API
  <img width="1919" height="1020" alt="Screenshot 2026-04-19 101744" src="https://github.com/user-attachments/assets/ea3a835a-f17b-4090-9d62-0cb131774c9f" />

* Create Post API
  <img width="1916" height="1019" alt="Screenshot 2026-04-19 101849" src="https://github.com/user-attachments/assets/0129541d-7a88-41c7-925b-217d443d593e" />

* Get Posts API
  <img width="1919" height="1020" alt="Screenshot 2026-04-19 101955" src="https://github.com/user-attachments/assets/133c5c41-d800-4c28-9312-b45e242d411f" />



# 🎯 Learning Outcomes

Through this project, I learned:

* REST API Design
* Express Routing
* Handling HTTP Requests
* JSON Data Processing
* Backend Project Structure
* API Testing with Postman


# 👨‍💻 Author

Developed by **Prakul Dobriyal**
