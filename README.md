# Node.js + Express & Java Spring Boot + Thymeleaf Demo Apps
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/btp-cf-uis)](https://api.reuse.software/info/github.com/SAP-samples/btp-cf-uis)

This project contains two separate full-stack applications that serve the same purpose but are implemented in different technologies:
- Node.js App: Express.js backend rendering HTML pages using the Pug template engine
- Java App: Spring Boot backend rendering HTML pages using Thymeleaf templates

Both apps are structured for easy local development and deployment to SAP BTP Cockpit using Cloud Foundry.

## Getting Started Locally

### Start Locally
#### Option 1: Run Node.js App Locally
#### Prerequisites
- Node.js (v18+ recommended)

``` bash 
cd node-backend
npm install
npm start
```
You can view the app at:

``` 
http://localhost:3000
```

#### Option 2: Run Java App Locally
#### Prerequisites
- Java (v17+ recommended)
- Maven (for building the Java app)

``` bash 
cd java-backend
mvn clean install
mvn spring-boot:run
```
You can view the app at:

``` 
http://localhost:8080
```

## Deploying to SAP BTP
Each app is deployed independently and works as a self-contained full-stack app.

### Node.js App
```
cd node-backend
npm run build
npm run zip
cd ..
```
This will prepare a `build.zip` ready for deployment.
1. Make sure the `build.zip` is located in the root directory.
2. Check your `manifest.yaml`, located in `node-backend/manifest.yaml`
3. Deploy the frontend using the BTP Cockpit UI:
   - Go to Applications page and click Deploy button
   - Upload the ZIP file from `node-backend/build.zip`
   - Upload the `node-backend/manifest.yaml`

Make sure the application started successfully and is running.

### Java App
```
cd java-backend
mvn clean install
cd ..
```
1. Make sure the JAR is located in `java-backend/target/java-demo-app-0.0.1-SNAPSHOT.jar`
2. Check your `manifest.yaml`, located in `java-backend/manifest.yaml`
3. Deploy the backend using the BTP Cockpit UI:
   - Go to Applications page and click Deploy button
   - Upload the JAR file from `java-backend/target/java-demo-app-0.0.1-SNAPSHOT.jar`
   - Upload the `java-backend/manifest.yaml`

Make sure the application started successfully and is running.

### Environment Variables
Each app is configured to use environment variable for customization. By default, it is set to `false`.
If you want to switch to dark theme, you can set the environment variable `DARK_MODE` to `true` in your BTP environment.
