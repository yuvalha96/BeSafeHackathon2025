# queenb-summer-project-template-24

This project template is designed for junior deevlopers aimed at gaining hands-on experience in full-stack development. 
This project includes a Node.js server with Express, a React client, and MongoDB for the database, providing an opportunity to engage in frontend development, backend development, and API integration.
Specifically the template is a full-stack MERN application for managing a library of rubber ducks - but you can modify it and build a library application of your choice.

**FORK THIS REPO** before starting the installations and settings. 

## Table of Contents

- [Installation](#installation)
- [Setting Up MongoDB Atlas](#setting-up-mongodb-atlas)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

## Installation

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en) (version 20.x or higher)
- npm (version 10.x or higher)
- MongoDB (Atlas)

### Clone the Repository
copy yout repo url.

```bash
git clone https://github.com/yourusername/rubber-ducks-library.git
cd rubber-ducks-library
```

### Server Setup
1. Navigate to the server directory:

```bash
cd server
```

2. Install server dependencies:

```bash
npm install
```

3. Create a `.env` file in the server directory and add your MongoDB connection string (see the Setting Up MongoDB Atlas section for details).

### Client Setup
1. Navigate to the client directory:

```bash
cd ../client
```

2. Install client dependencies:

```bash
npm install
```

3. Start the client:

```bash
npm start
```

### Environment Variables
Make sure your `.env` file in the server directory contains the following:

```env
MONGO_URI=your_mongodb_connection_string
```

## Setting Up MongoDB Atlas

### Creating a New Database in MongoDB Atlas

1. **Sign Up / Log In to MongoDB Atlas**:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up for a new account or log in if you already have one.

2. **Create a New Project**:
   - Once logged in, click on "Projects" in the left-hand menu.
   - Click on the "New Project" button.
   - Enter a project name, e.g., "LibraryProject", and click "Next".

3. **Create a New Cluster**:
   - Within your new project, click on "Build a Cluster".
   - Choose a cloud provider and region. The free tier usually provides several options.
   - Click "Create Cluster". This process might take a few minutes.

4. **Set Up Database Access**:
   - Once your cluster is created, you need to set up a user to access the database.
   - Click on the "Database Access" tab.
   - Click the "Add New Database User" button.
   - Create a user with a username and password. Make sure to note these down as you will need them later.
   - Set the user's permissions to "Read and write to any database".

5. **Network Access**:
   - Click on the "Network Access" tab.
   - Click the "Add IP Address" button.
   - Add your current IP address or allow access from anywhere (0.0.0.0/0) if you're just testing. Be cautious with security when using the latter option.

6. **Create a Database**:
   - Click on the "Clusters" tab.
   - Click the "Collections" button next to your cluster.
   - Click "Add My Own Data".
   - Enter a database name, e.g., "libraryDB", and a collection name, e.g., "ducks".
   - Click "Create".

7. **Connect to Your Cluster**:
   - Go back to the "Clusters" tab.
   - Click the "Connect" button next to your cluster.
   - Choose "Connect your application".
   - Copy the connection string. It will look something like this:
     ```
     mongodb+srv://<username>:<password>@cluster0.mongodb.net/libraryDB?retryWrites=true&w=majority
     ```

8. **Update Your .env File**:
   - In your `server` directory, create a `.env` file if it doesn't already exist.
   - Add your MongoDB connection string to the `.env` file, replacing `<username>` and `<password>` with your database user credentials:
     ```env
     MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/libraryDB?retryWrites=true&w=majority
     ```

### Summary of Environment Variable

Ensure your `.env` file in the `server` directory contains:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/libraryDB?retryWrites=true&w=majority
```

### Testing the Connection
1. Start the Server:

  * Navigate to the server directory:
```bash
cd server
```
  * Start the server:
```bash
npm run dev
```

  * Verify Connection:
  Check the terminal for a message indicating a successful connection to MongoDB:

By following these steps, you will have a MongoDB Atlas database set up and connected to your MERN stack application. 

## Usage
1. Ensure your MongoDB server is running or you have access to your MongoDB Atlas cluster.
2. Run the server and client as described in the installation steps.
3. Open your browser and navigate to http://localhost:3000 to view the application.

## Project Structure
```bash
queenb-summer-project-template-24/
│
├── client/                 # React client
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── styles/
│       ├── App.js
│       ├── index.js
│       └── package.json    # Client dependencies
│
├── server/                 # Node.js server
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env                # Environment variables
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
│
├── README.md
└── package.json            # Root package.json for repo management
```

## API Endpoints
* GET /api/ducks: Retrieve all ducks
* GET /api/ducks/:id: Retrieve a single duck by ID
* POST /api/ducks: Create a new duck
* DELETE /api/ducks/:id: Delete a duck by ID
* PATCH /api/ducks/:id: Update a duck by ID
You can edit and add more endpoints as needed.

