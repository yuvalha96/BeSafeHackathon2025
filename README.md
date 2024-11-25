# QueenB X AppsFlyer - BeSafe Hackathon 2025

This project template is designed for junior deevlopers aimed at gaining hands-on experience in full-stack development. 
This project includes a Node.js server with Express and a React client, providing an opportunity to engage in frontend development, backend development, and API integration.
Specifically the template is a full-stack MERN application for managing a library of rubber ducks - but you can modify it and build a library application of your choice.

**FORK THIS REPO** before starting the installations and settings. 

## Table of Contents

- [Installation](#installation)
   - [Prerequisites](#prerequisites) 
   - [Clone the Repository](#clone-the-repository)
   - [Server Setup](#server-setup)
   - [Client Setup](#client-setup)
- [Configuration](#configuration)
   - [Testing the Template w Random Duck Feature](#testing-the-template-w-random-duck-feature)
   - [Setting Up MongoDB Atlas](#setting-up-mongodb-atlas)
   - [Setting Up Environment Variables](#environment-variables)
- [Usage](#usage)
- [Best Practices for Implementing a Full Stack Feature](#best-practices-for-implementing-a-full-stack-feature)
- [Project Structure](#project-structure)
- [Summary](#summary)

## Installation

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en) (version 20.x or higher)
- npm (version 10.x or higher)

### Clone the Repository
To get started with this project, you need to clone the repository to your local machine. Follow these steps:

1. Open a Terminal
   - Open your preferred terminal application.
2. Navigate to the Desired Directory:
   - Use the cd command to navigate to the directory where you want to clone the repository. For example:
```bash
cd path/to/your/directory
```
3. Fork this repository - only ONCE per project
4. Clone the forked Repository:
   - Copy your repository URL
   - Run the following command to clone the repository:
```bash
git clone <paste-your-repository-url>
```
4. Navigate to the Project Directory:
   - After cloning, navigate into the project directory:
```bash
cd BeSafeHackathon2025
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

### Client Setup
1. Navigate to the client directory:

```bash
cd ../client
```

2. Install client dependencies:

```bash
npm install
```

## Configuration
### Testing the Template w Random Duck Feature
First, ensure All Dependencies Are Installed for client and server (see installation section).

This template includes a simple feature to display a random rubber duck from example READ ONLY database. 
This feature demonstrates the integration of the frontend with the backend and can be used to test if your setup is working correctly.

**How It Works**
1. Client:
   - The home page contains a button labeled "Show Random Duck".
   - When clicked, this button sends a request to the backend to fetch a random rubber duck.
   - The details of the random rubber duck, including its name and image, are displayed on the page.
2. Backend:
   - The server has an endpoint /api/rubberDucks/random that selects a random rubber duck from the database and returns its details in the response.

#### Configure the Backend
1. Configure Environment Variables for the Backend:
   - Open a terminal and navigate to the `server` directory:
```bash
cd ../server
```
   - Create a `.env` file in the server.
   - Copy the content of `.env.example` file under the server folder to the `.env` file.

2. Run the Backend Server in development mode:
```bash
npm run dev
```

#### Configure the Frontend
1. Configure Environment Variables for the Frontend:
   - Open a terminal and navigate to the `client` directory:
```bash
cd ../client
```
   - Create a `.env` file in the client.
   - Copy the content of `.env.example` file under the client folder to the `.env` file.

2. Run the Frontend Client:
```bash
npm start
```

#### Test the Application:
   - Open `http://localhost:<client-port-number>` (usually at http://localhost:3000) and interact with the application to ensure it works as expected.
   - Click the "Show Random Duck" button to retrieve a random duck from the database and display its details on the screen.
   - This feature helps verify that your frontend can communicate with the backend and retrieve data from the MongoDB database correctly. If you see the random duck's details displayed on the page, your setup is working properly.
   - IMPORTANT NOTE - the example MongoDB connection string attached to the server file grants you a READ ONLY permissions to the rubber duck example database - you only be able to use GET requests, and cannot modify data. 

#### Troubleshooting:
1. Check browser console and network logs for errors.
2. Ensure backend and frontend configurations are correct.

- Feedback:
   - Report any issues or provide feedback for further improvements.

After testing the template and verifying the server and client are working as expected - set yout own project MongoDB configurstion and Evironment variavles:

### Environment Variables

Environment variables are used to configure your application without hardcoding sensitive information into your code. For this project, you need to set up the following environment variables in a `.env` file located both in the `server` directory and `client` directory:

#### Setup Server `.env` file
The server `.env` file should contain the following environment variables:

1. **PORT**: This variable defines the port on which your Express server will run. By default, this is set to `5000`, but you can change it to any available port number.

**How to Set Up Your `.env` Server File**

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
CLIENT_URL=http://localhost:3000
PORT=5000
```
   - You can change `5000` to any port number you prefer.
   - Make sure `CLIENT_URL` is set to your client current port.

#### Setup Client .env file
The client .env file should contain the following environment variables:

1. **REACT_APP_API_URL**: This variable contains the URL of your backend API. It tells your client where to send requests to interact with the server. By default, this should be set to http://localhost:5000/api, but you should change it to match your server's actual URL if different.

**How to Set Up Your .env Client File**

1. **Create a `.env` File**:
   - Navigate to the `client` directory:
```bash
cd client
```
   - Create a file named `.env` if it does not already exist.

2. **Add the Environment Variables**:
   - Open the .env file in a text editor.
   - Add the following line, replacing the placeholder with your actual server URL:
```env
REACT_APP_API_URL=http://localhost:5000/api
```
Replace http://localhost:5000/api with the URL of your backend server if it is running on a different host or port.

## Usage

This section explains how to use the application once it’s set up and running. Follow these steps to interact with both the client and server components of the application.

### Running the Server

1. **Navigate to the Server Directory**:
   - Open a terminal and change to the `server` directory:
```bash
cd server
```

2. **Start the Server**:
   - Start the Express server in development mode:
```bash
npm run dev
```
   - By default, the server will run on `http://localhost:5000`. You can change the port by modifying the `PORT` variable in your `.env` file.

3. Verify Server Operation:
   - Open a browser or API client (like [Postman](https://www.postman.com/)) to test your API endpoints.

### Running the Client

1. **Navigate to the Client Directory**:
   - Open a new terminal window or tab and change to the `client` directory:
```bash
cd client
```

2. **Start the Client**:
   - Start the React development server:
```bash
npm start
```
   - By default, the client will be accessible at `http://localhost:3000`.

3. **View the Application**:
   - Open a web browser and navigate to `http://localhost:3000` to view the application. The client communicates with the backend server to fetch and display data.

### Stopping the Servers

- **Stop the Express Server**:
  - In the terminal where the server is running, press `Ctrl + C` to stop the server.

- **Stop the React Client**:
  - In the terminal where the client is running, press `Ctrl + C` to stop the client.

### Troubleshooting

- **Server Issues**:
  - Check the terminal for error messages and ensure your `.env` file is correctly configured.
  - Verify that MongoDB Atlas is running and accessible.

- **Client Issues**:
  - Ensure that the React development server is running and that you have no conflicting applications using port 3000.
  - Check the browser console for errors if the client is not displaying correctly.

By following these steps, you should be able to run and interact with both the client and server components of the application effectively. If you encounter issues, refer to the troubleshooting tips or consult the documentation for more detailed guidance.

## Best Practices for Implementing a Full Stack Feature

When working with a full-stack application, especially in a collaborative environment, it's crucial to follow best practices to ensure smooth development and maintainability. Here are the steps and practices to implement a new feature effectively in this project:

1. Understand the Feature Requirements
   - Review the Requirements: Carefully read the product requirements document to understand the feature's goals and user interactions.
   - User Stories: Refer to user stories to get a clear picture of the user workflows and interactions needed for the feature.
2. Plan the Database Schema
   - Identify Entities: Determine the new entities required for your feature and how they relate to existing ones.
   - Design Schema: Design the database schema, avoid redundant fields.
3. Implement Server-Side Logic
   - API Endpoints: Define the necessary API endpoints following RESTful principles.
   - Controllers: Implement controller functions to handle business logic, ensuring they are modular and reusable.
   - Validation: Implement validation for incoming data to ensure it meets required criteria.
   - Error Handling: Ensure proper error handling and logging to manage and log errors gracefully.
4. Develop Client-Side Logic
   - Routing: Set up routing using the library React Router to manage navigation.
   - Components: Break down the UI into reusable components, each with a single responsibility.
   - State Management: Use the React state and Context (state management solution implemented in this project) to manage application state.
   - API Integration: Implement a service layer for API calls, keeping API logic separate from UI logic.
5. Integrate Client and Server
   - Configure Axios: make sure Axios is set with a base instance that includes the base URL and default headers for API calls.
   - Process Responses: Handle server responses and update the UI accordingly, managing loading states and errors.
6. Testing (optional here but a must in real life production)
   - Unit Tests: Write unit tests for individual components, controllers, and models.
   - Integration Tests: Ensure that different components work together correctly through integration tests.
   - End-to-End Tests: Simulate user interactions with end-to-end tests to ensure the entire feature works as expected.
8. Deployment and Monitoring (optional here but a must in real life production)

### Team Synchronization
- Regular Meetings: Hold regular meetings to discuss progress, blockers, and next steps. Daily stand-ups and weekly sync meetings can help keep everyone on the same page.
- Code Reviews: Conduct code reviews to ensure code quality and share knowledge among team members.
- Branch Management: Use a branching strategy with Git to manage feature development and integration.
- Documentation: Keep documentation updated to reflect changes and new features. This includes the README, API documentation, and any internal wiki pages.
- Clear Communication: Maintain clear communication channels (e.g., Slack, Teams) for quick discussions and updates.

### Example Workflow
- Requirement: Implement a "Create New Duck" feature where users can add a new duck to the library.
- Database Schema: Add a ducks collection with fields like name, description, image url.
- API Endpoint: Create a POST /api/ducks endpoint to handle new duck creation.
- Controller Logic: Implement the createDuck controller to validate and save the duck to the database.
- Client Component: Create a NewDuckForm component with form fields and a submit button.
- State Management: Use React state to manage form inputs and submission status.
- API Call: Use Axios in the NewDuckForm to send a POST request to POST /api/ducks.
- Testing: Write tests for the NewDuckForm component, createDuck controller, and the API endpoint.

By following these best practices, you can ensure that each feature in your full-stack application is well-designed, maintainable, and scalable. This approach will help you efficiently extend the existing infrastructure while adhering to the project requirements.

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

### Explanation
#### Root Directory
- queenb-summer-project-template-24/: This is the root directory of your project.

#### Client Directory
- client/: Contains the React frontend application.
   - public/: Static files like index.html, images, and other assets that need to be served directly.
   - src/: Contains the source code for the React application.
      - components/: Reusable UI components such as buttons, forms, and other elements.
      - pages/: Page components that represent different routes in the application.
      - services/: Services for making API calls and handling business logic.
      - styles/: CSS and styling files for the application.
      - App.js: The main React component that sets up routing and renders the application.
      - index.js: The entry point for the React application, responsible for rendering the App component into the DOM.
      - package.json: Lists the client-side dependencies and scripts for managing the React application.
      
#### Server Directory
- server/: Contains the Node.js backend application.
   - controllers/: Contains the logic for handling API requests and responses.
   - models/: Mongoose models that define the data schema for MongoDB.
   - routes/: Defines the API endpoints and maps them to controller functions.
   - .env: Stores environment variables like database connection strings and server port.
   - server.js: The main server file that sets up Express, connects to the database, and starts the server.
   - package.json: Lists the server-side dependencies and scripts for managing the Node.js application.
   
#### Additional Files
- README.md: Provides documentation for the project, including setup instructions, usage, and other relevant information.


## Summary

The provided setup instructions cover the installation, configuration, and running of both the client and server, including setting up environment variables and connecting to MongoDB Atlas. By following the guidelines, you will be able to develop a complete application and understand the key components of a full-stack web development project.

Feel free to customize and extend this template based on your project requirements and learnings from the mentorship program.

For any issues please contact us via [mail](queenb.community@gmail.com) or open an issue.

Happy Coding! :)
