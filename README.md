# Syntecxhub User Management API

RESTful User Management API built for the Syntecxhub Web Development internship task.  
The project uses Node.js, Express, MongoDB Atlas, and Mongoose to manage users with full CRUD operations and basic authentication.

---

## Features

- RESTful API for user management
- CRUD operations: Create, Read, Update, Delete users
- MongoDB + Mongoose for schema-based data storage
- Password hashing with bcrypt
- HTTP Basic Authentication to protect all user endpoints
- Tested using Postman

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- dotenv
- nodemon (for development)

---

## Project Structure

```text
syntecxhub_user_management/
  config/
    db.js
  middleware/
    auth.js
  models/
    User.js
  routes/
    userRoutes.js
  .env              (not committed, local only)
  .env.example
  .gitignore
  package.json
  package-lock.json
  server.js
  README.md
