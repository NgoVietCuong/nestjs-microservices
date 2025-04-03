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
### **2. Install dependencies
```bash
$ yarn install
```





## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Deploy the application
