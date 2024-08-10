# queenb-summer-project-template-24

This project template is designed for junior deevlopers aimed at gaining hands-on experience in full-stack development. 
This project includes a Node.js server with Express, a React client, and MongoDB for the database, providing an opportunity to engage in frontend development, backend development, and API integration.
Specifically the template is a full-stack MERN application for managing a library of rubber ducks - but you can modify it and build a library application of your choice.

**FORK THIS REPO** before starting the installations and settings. 

## Table of Contents

- [Installation](#installation)
- [Setting Up MongoDB Atlas](#setting-up-mongodb-atlas)
- [Setting Up Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

## Installation

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en) (version 20.x or higher)
- npm (version 10.x or higher)
- MongoDB - Atlas (see the Setting Up MongoDB Atlas section for details)

### Clone the Repository
copy yout repo url.

```bash
git clone <paste-your-repo-url>
cd queenb-summer-project-template-24
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

3. Create a `.env` file in the server directory and add your MongoDB connection string and desired port (see the Setting Up MongoDB Atlas, and Environment Variables sections for details).

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

## Setting Up MongoDB Atlas
only once per project.

### Creating a New Database in MongoDB Atlas

see video toturial by Net Ninja - [Link](https://youtu.be/s0anSjEeua8?si=GAeglEfAuJmvoAtj)

1. **Sign Up / Log In to MongoDB Atlas**:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up for a new account or log in if you already have one.

2. **Create a New Project**:
   - Once logged in, click on "Projects" in the left-hand menu.
   - Click on the "New Project" button.
   - Enter a project name, e.g., "LibraryProject", and click "Next".
   - Add your teamates as project members.
   - Click "create project".

3. **Create a New Cluster**:
   - Within your new project, click on "Create a Cluster".
   - Choose a cloud provider and region - choose the free plan and the AWS cloud provider.
   - Click "Create Deployment". This process might take a few minutes.

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
   - Click on the "Database" tab.
   - Click the "Browse Collections" button next to your cluster.
   - Click "Create Database".
   - Enter a database name, e.g., "libraryDB", and a collection name, e.g., "ducks".
   - Click "Create".

7. **Connect to Your Cluster**:
   - Go back to the "Database" tab.
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
  Check the terminal for a message indicating a successful connection to MongoDB.

By following these steps, you will have a MongoDB Atlas database set up and connected to your MERN stack application. 


## Environment Variables

Environment variables are used to configure your application without hardcoding sensitive information into your code. For this project, you need to set up the following environment variables in a `.env` file located in the `server` directory:

1. **MONGO_URI**: This variable contains the connection string for your MongoDB database. It tells your server where to find the database and how to connect to it. You will get this connection string from MongoDB Atlas when you set up your database.

2. **PORT**: This variable defines the port on which your Express server will run. By default, this is set to `5000`, but you can change it to any available port number.

#### How to Set Up Your `.env` File

1. **Create a `.env` File**:
   - Navigate to the `server` directory:
     ```bash
     cd server
     ```
   - Create a file named `.env` if it does not already exist.

2. **Add the Environment Variables**:
   - Open the `.env` file in a text editor.
   - Add the following lines, replacing placeholders with your actual values:

     ```env
     MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/libraryDB?retryWrites=true&w=majority
     PORT=5000
     ```

   - Replace `<username>` and `<password>` with the credentials you created for your MongoDB Atlas database.
   - `libraryDB` should be replaced with the name of your database if different.
   - You can change `5000` to any port number you prefer.

3. **Save the File**:
   - Save the `.env` file after adding the necessary environment variables.

#### Example `.env` File

Here is an example of what your `.env` file might look like:

```env
MONGO_URI=mongodb+srv://myUser:myPassword@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
PORT=5000
```

## Usage
1. Ensure your MongoDB server is running or you have access to your MongoDB Atlas cluster.
2. Run the server and client as described in the installation steps.
3. Open your browser and navigate to http://localhost:3000 to view the application.

## Project Structure

- `client/`: Contains the React frontend application.
- `server/`: Contains the Express backend application, including API routes and database models.

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
This projects server includes the following endpoints:
* GET /api/ducks: Retrieve all ducks
* GET /api/ducks/:id: Retrieve a single duck by ID
* POST /api/ducks: Create a new duck
* DELETE /api/ducks/:id: Delete a duck by ID
* PATCH /api/ducks/:id: Update a duck by ID
You can edit and add more endpoints as needed.

It is recommanded to use [Postman](https://www.postman.com/) app to test your api endponts.

## Summary

The provided setup instructions cover the installation, configuration, and running of both the client and server, including setting up environment variables and connecting to MongoDB Atlas. By following the guidelines, you will be able to develop a complete application and understand the key components of a full-stack web development project.

Feel free to customize and extend this template based on your project requirements and learnings from the mentorship program.

For any issues please contact us via [mail](queenb.community@gmail.com) or open an issue.

Happy Coding! :)
