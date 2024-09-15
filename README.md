![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

# Krazy Kanban Board

## Description

This project is a full-stack Kanban board application designed to enhance team productivity through task management. The application includes a secure login system using JSON Web Tokens (JWT) for authentication. It allows users to log in, manage tasks in a Kanban-style interface, and ensures that only authenticated users can access and manipulate data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/RubenDguez/kanban-board.git
    ```

2. Navigate to the project directory:
    ```bash
    cd kanban-board
    ```

3. Install dependencies for both client and server:
    ```bash
    npm install
    ```

4. Set up environment variables:
    - In the `server` directory, create a `.env` file and include the following:
        ```
        DB_NAME=your_db_name
        DB_USER=your_db_username
        DB_PASSWORD=your_db_password
        JWT_SECRET_KEY=your_secret_key
        ```

5. Run the development:
    ```bash
    npm run start:dev
    ```

## Usage

1. Visit the login page to authenticate with your credentials.
2. Upon successful login, you’ll be redirected to the Kanban board.
3. Manage tasks by adding, editing, or deleting items within different task columns (To Do, In Progress, and Done).
4. Logout when you are done, which will invalidate your JWT token.

## Features

- **JWT Authentication**: Secure login with JSON Web Tokens.
- **Task Management**: Create, edit, and delete tasks within a Kanban board.
- **Local Storage for Tokens**: JWT stored securely in local storage for authenticated API requests.
- **Session Expiration**: Automatic session invalidation after a period of inactivity.
- **Error Handling**: Informative messages for invalid login attempts.

### Future Feature Development

- **Task Sorting**: Sort tasks within columns.
- **Task Filtering**: Filter tasks based on criteria like status or priority.

## Deployment

This application is deployed on Render and can be accessed at the following URL:

- **Live Application**: [https://kanban-board-73pe.onrender.com/](https://kanban-board-73pe.onrender.com/)
- **GitHub Repository**: [https://github.com/RubenDguez/kanban-board](https://github.com/RubenDguez/kanban-board)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the [MIT](LICENSE) License.
