# E-Commerce Backend

This is the backend application for an E-Commerce website. It provides RESTful API endpoints for managing products, categories, and tags. The application is built using Node.js, Express.js, and Sequelize as the ORM for MySQL.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Database Setup](#database-setup)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Contributing](#contributing)
- [License](#license)
  
## Mock up
![13-orm-homework-demo-01](https://github.com/Jay1194/E-commerce-backEnd/assets/105843570/c29c3e54-106b-4140-a1e5-bfde49b60afe)
![13-orm-homework-demo-02](https://github.com/Jay1194/E-commerce-backEnd/assets/105843570/b6a56395-d11a-4e5f-aeb2-b171002f1e87)

## Installation

  Clone the repository:
  
       git clone https://github.com/your-username/e-commerce-backend.git
1. Navigate to the project directory:

     ```
    Copy code
    cd e-commerce-backend
2. Install dependencies:

    ```
    Copy code
    npm install
## Usage
    
  3. Set up the database configuration:
  - Create a .env file in the root directory.
  - Add your MySQL database credentials:
     ```
     env
    Copy code
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password

4. Start the application:

    ```
    Copy code
    npm start
    The server will be running at http://localhost:3001.

## Database Setup
5. Create a MySQL database.

6. Update the .env file with your database details.

7. Run the Sequelize migrations to create tables:

     ```
    Copy code
    npm run migrate
    Seed the database with sample data:

    ```bash 
     Copy code
     npm run seed

## API Endpoints
**Categories:**
- GET /api/categories
- GET /api/categories/:id
- POST /api/categories
- PUT /api/categories/:id
- DELETE /api/categories/:id

**Products:**
- GET /api/products
- GET /api/products/:id
- POST /api/products
- PUT /api/products/:id
- DELETE /api/products/:id

**Tags:**
- GET /api/tags
- GET /api/tags/:id
- POST /api/tags
- PUT /api/tags/:id
- DELETE /api/tags/:id

##  Models
**Category:**
- id (INTEGER, PRIMARY KEY)
- category_name (STRING)

**Product:**
- id (INTEGER, PRIMARY KEY)
- product_name (STRING)
- price (DECIMAL)
- stock (INTEGER)
- category_id (INTEGER, FOREIGN KEY)
  
**Tag:**
- id (INTEGER, PRIMARY KEY)
- tag_name (STRING)

**ProductTag:**
- id (INTEGER, PRIMARY KEY)
- product_id (INTEGER, FOREIGN KEY)
- tag_id (INTEGER, FOREIGN KEY)
  
## Contributing
Contributions are welcome! Please follow the Contribution Guidelines.

## License
This project is licensed under the MIT License.
