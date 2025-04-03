# Nestjs Microservices Monorepo

## 📌 Overview
- This repository contains a microservices architecture built with NestJS using a monorepo structure
- The application provides a complete RESTful API for a reservation website, handling authentication, user management, reservations, payments with Stripe, and email notifications. 
- The application is containerized with Docker and deployed using Google Cloud Build.

## 🛠️ Tech Stack
- **Nestjs**
- **MongoDB**
- **Stripe**
- **Nodemailer**

## 🏗️ Setup & Run Locally

### **1. Clone the repository**
```sh
git clone https://github.com/NgoVietCuong/nestjs-microservices.git
cd nestjs-microservices
```
### **2. Install dependencies**
```bash
$ yarn install
```

### **3. Config .env for each service**
- Create a .env file for each service by copying the content from the .env.example file and modifying the values of environment variables as needed.

### **4. Start applications**
```bash
# Start all services
yarn run start:dev reservations
yarn run start:dev auth
yarn run start:dev payments
yarn run start:dev notifications
```