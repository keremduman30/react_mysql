# books-app

This project is a book management application where users can view, add, update, and delete books.

## Features
- **List Books**: Users can list the available books.
- **Add Book**: You can add new books.
- **Update Book**: You can update existing books.
- **Delete Book**: You can delete books.

## Technologies Used
**Frontend**

- **React**: For building the user interface.
- **RTK Query**: For data management and API requests.
- **Material-UI (MUI)**: For UI components and styling.
- **React-Hook-Form**: For form management and validation.

**Backend**

- **Node.js**: For server-side operations.
- **Express**: For creating the server and managing APIs.
- **MySQL**: For database management.

## Installation and Running
To run the project locally, follow these steps:
  
    
    git clone https://github.com/keremduman30/react_mysql.git
    cd react_mysql


   -**Backend**

1. **Navigate to the Backend Directory**
   ```bash
   cd backend
2. **Install Dependencies**
   ```bash
   npm install
   
3. **Create the .env File**
   
   Create a .env file in the project root directory with the following content:

    ```bash
    PORT=your port
    MYSQL_PASSWORD=your mysql password
    DATABASE=your db name

5. **Create the Database Schema**

   Create the database and tables in MySQL:

    ```bash
    CREATE DATABASE books_db;
    USE books_db;

    -- Create the books table
    CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(45) NOT NULL,
    desc VARCHAR(255) NOT NULL
    );

6. **Start the Server**
   ```bash
   npm start



  -**Frontend**
  
1. **Navigate to the Frontend Directory**
   
   ```bash
   cd client
   
3. **Install Dependencies**
   
   ```bash
   npm install
   
5. **Create the .env File**
   
   Create a .env file in the project root directory with the following content:
   
    ```bash
    VITE_BASE_URL=http://localhost:(yourbackendport)/api/books
    

 6. **Start the Project**
     ```bash
     npm run dev

   
This README organizes the setup and usage of your application into separate sections for Frontend and Backend, making the installation and use clearer. You can add your own project-specific information as needed.
