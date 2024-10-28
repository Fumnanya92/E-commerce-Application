# Capstone Project: E-Commerce Application CI/CD Pipeline

## Project Overview
This project focuses on developing and automating the CI/CD pipeline for a full-stack e-commerce platform. The platform consists of:
1. **E-Commerce API**: Backend service to manage product listings, user accounts, and order processing.
2. **E-Commerce Frontend**: A React-based web application for user interaction.

The goal is to automate testing, building, and deployment using GitHub Actions, Docker, and a cloud platform.

---

## Task 1: Project Setup

### Steps:
1. **Create a GitHub Repository**:
   - Name the repository: `ecommerce-platform`.
2. **Directory Structure**:
   - Inside the repository, create two directories:
     - `api`: For the backend API.
     - `webapp`: For the frontend web application

```bash
mkdir api webapp
```

---

## Task 2: Initialize GitHub Actions

### Steps:
1. **Initialize Git Repository**:
   - Inside your project directory, initialize git:
   ```bash
   git init
   ```
2. **Add Initial Structure**:
   - Add the project directories and an initial README.
3. **Create GitHub Actions Directory**:
   - Inside the repository, create a `.github/workflows` directory:
   ```bash
   mkdir -p .github/workflows
   ```

---

## Task 3: Backend API Setup

### Steps:
1. **Initialize Node.js Project**:
   - Navigate to the `api` directory and set up a basic Node.js project:
   ```bash
   cd api
   npm init -y
   ```
2. **Install Dependencies**:
   - Install Express and other necessary dependencies:
   ```bash
   npm install express.
   ```
3. **Basic API Setup**:
   - Create an `index.js` file to define basic routes (e.g., product listing, order creation).
4. **Unit Testing**:
   - Install a testing framework like Jest:
   ```bash
   npm install --save-dev jest
   ```
   - Add unit tests for the API functionality.

---

## Task 4: Frontend Web Application Setup

### Steps:
1. **Create React Application**:
   - In the `webapp` directory, create a React app:
   ```bash
   npx create-react-app webapp
   ```
![image](https://github.com/user-attachments/assets/5f5c930d-26a7-431c-9b87-53bd2b8828f3)

Here’s how you can resolve it:
1. Ensure npm and Node.js are Installed Correctly
Check if npm and node are installed correctly by running:
bash
Copy code
npm -v
node -v
If you don't get a version number for either, download and reinstall Node.js from the official Node.js website. The installation includes npm by default.
2. Manually Create the Missing Directory
The error suggests that the directory C:\Users\DELL\AppData\Roaming\npm does not exist. You can manually create this directory and re-run the command:
Navigate to C:\Users\DELL\AppData\Roaming in File Explorer.
Create a new folder named npm.
Run the npx create-react-app command again:
bash aha

npx create-react-app webapp
   
2. **Basic Features**:
   - Implement basic functionality for product listing, user login, and order placement.
3. **API Integration**:
   - Ensure the React app interacts with the backend API.

---

## Task 5: Continuous Integration Workflow

### Steps:
1. **Create GitHub Actions Workflow**:
   - Inside `.github/workflows`, create a new YAML file for the CI workflow.
   - The workflow should:
     - Install dependencies.
     - Run tests for both backend and frontend.
     - Build the application.

```yaml
name: CI Workflow

on: [push, pull_request]

jobs:
  api-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm install
      - run: npm test
        working-directory: ./api

  webapp-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm install
      - run: npm test
        working-directory: ./webapp
```

---

## Task 6: Docker Integration

### Steps:
1. **Create Dockerfile for Backend**:
   - In the `api` directory, create a `Dockerfile`:
   ```dockerfile
   FROM node:14
   WORKDIR /app
   COPY . .
   RUN npm install
   CMD ["node", "index.js"]
   ```
2. **Create Dockerfile for Frontend**:
   - In the `webapp` directory, create a `Dockerfile`:
   ```dockerfile
   FROM node:14
   WORKDIR /app
   COPY . .
   RUN npm install
   RUN npm run build
   CMD ["npm", "start"]
   ```
3. **Modify GitHub Actions**:
   - Update the GitHub Actions workflow to build Docker images.

```yaml
jobs:
  build-api:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build Docker Image
        run: docker build -t api-image ./api

  build-webapp:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build Docker Image
        run: docker build -t webapp-image ./webapp
```

---

## Task 7: Deploy to Cloud

### Steps:
1. **Choose a Cloud Platform**:
   - Select AWS, Azure, or GCP for deployment.
2. **Docker Image Deployment**:
   - Modify your GitHub Actions to push Docker images to your cloud provider’s container registry.
3. **Secure Access**:
   - Use GitHub Secrets to store cloud credentials and access keys.

```yaml
jobs:
  deploy-api:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Log in to Cloud
        run: echo "${{ secrets.CLOUD_KEY }}" | docker login -u ${{ secrets.USERNAME }} --password-stdin
      - name: Push Docker Image
        run: docker push your-cloud-repo/api-image

  deploy-webapp:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Log in to Cloud
        run: echo "${{ secrets.CLOUD_KEY }}" | docker login -u ${{ secrets.USERNAME }} --password-stdin
      - name: Push Docker Image
        run: docker push your-cloud-repo/webapp-image
```

---

## Task 8: Continuous Deployment

### Steps:
1. **Automate Deployment**:
   - Configure workflows to automatically deploy to the cloud whenever changes are pushed to the `main` branch.

---

## Task 9: Performance and Security

### Steps:
1. **Caching**:
   - Use caching in GitHub Actions to speed up build times.
2. **Secure Data**:
   - Ensure sensitive data like API keys and database credentials are stored in GitHub Secrets.

---

## Task 10: Project Documentation

### Steps:
1. **README.md**:
   - Document the project setup, instructions for running locally, and details on the CI/CD workflow.
2. **Instructions**:
   - Include deployment instructions for both local and cloud environments.

---

## Conclusion
This project provides a comprehensive workflow to set up an e-commerce platform using Node.js and React, automate testing, building, and deployment using GitHub Actions and Docker, and deploy to the cloud.

---

## Additional Resources:
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Docker Documentation](https://docs.docker.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- Cloud Platform Documentation:
  - [AWS](https://aws.amazon.com/documentation/)
  - [Azure](https://azure.microsoft.com/en-us/documentation/)
  - [Google Cloud](https://cloud.google.com/docs)

