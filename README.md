<p align="center">
  <a href="https://sequelize.org/" target="blank"><img src="/assets/images/sequelize.png" width="320" alt="Sequelize Logo" /></a>
</p>

# API NODE.JS

## How the API works

### Prerequisites

* Node.js version 20.7.0
* Mysql2

### Create database 

```bash
$ create database security_nodejs_development;

```

### Installation

Clone this repository and install the dependencies

```bash
$ npm install
```

Install CLI Sequelize with mysql2 or other database
```bash
    $ npm install sequelize mysql2
```

Run the migrates
```bash
    $ sequelize db:migrate
```
### Authentication

Register a new User

Example using Postman

<p align="center">
  <a href="https://www.postman.com/" target="blank"><img src="/assets/images/registerUser.png" width="800" alt="Sequelize Logo" /></a>
</p>

Log in to the indicated route.

<p align="center">
  <a href="https://www.postman.com/" target="blank"><img src="/assets/images/token.png" width="800" alt="Sequelize Logo" /></a>
</p>

The generated token will be used to access other routes.

### Endpoints

Follow the same example as user registration to enter the products, rules and permissions according to your routes.
see the project's "routes" file. Each route has all crud methods.

### Contact

For questions please contact
<div>
  <a href = "mailto:vanessa.bert311@gmail.com" ><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
</div>
