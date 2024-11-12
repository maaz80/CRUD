
# CRUD Application with React and Express

This project is a simple CRUD (Create, Read, Update, Delete) application built using React for the front end and Express with MongoDB for the backend. It allows users to manage user data such as name, email, and age.

## Features
- **Create User**: Allows users to add a new user to the system.
- **Read User**: Displays a list of all users.
- **Update User**: Allows users to update their information.
- **Delete User**: Enables deletion of a user from the system.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: TailwindCSS

## Setup Instructions

### Prerequisites:
- Node.js
- MongoDB (running locally or via a cloud service like MongoDB Atlas)

### Steps to Set Up:

1. **Clone the Repository:**
   ```
   git clone https://github.com/your-username/crud-app.git
   cd crud-app
   ```

2. **Install Backend Dependencies:**
   ```
   cd backend
   npm install
   ```

3. **Start MongoDB** (If running locally):
   Make sure MongoDB is running on your local machine at `mongodb://127.0.0.1:27017/crud`.

4. **Run the Backend:**
   ```
   npm start
   ```

5. **Install Frontend Dependencies:**
   ```
   cd frontend
   npm install
   ```

6. **Run the Frontend:**
   ```
   npm start
   ```

   The React app will be running on `http://localhost:3000` and the API on `http://localhost:3001`.

## API Endpoints:

- `GET /` - Fetch all users
- `GET /getUser/:id` - Fetch a user by ID
- `POST /create` - Create a new user
- `PUT /update/:id` - Update a user by ID
- `DELETE /deleteUser/:id` - Delete a user by ID

## Folder Structure:
```
.
├── backend
│   ├── models
│   │   └── Users.js
│   ├── server.js
│   ├── package.json
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── User.js
│   │   │   ├── CreateUser.js
│   │   │   ├── UpdateUser.js
│   │   │   └── Navbar.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
└── README.md
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

