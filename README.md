📘 Course Registration System — Full Stack Project

This is a full-stack web application for managing course registrations.
Users can register for courses through a form and view/edit/delete submissions from an admin dashboard.

🚀 Tech Stack Used
🔹 Backend

Java 17

Spring Boot

REST API

Spring Data JPA

MySQL Database

🔹 Frontend

HTML5

CSS3

JavaScript (Fetch API)

UI used: Glassmorphism form & dashboard

📂 Project Folder Structure
Course-Registration-Project
│
├── course-registration-backend
│   ├── src/main/java/com/uma/courseregistration
│   │   ├── entity/Registration.java
│   │   ├── repository/RegistrationRepository.java
│   │   ├── service/RegistrationService.java
│   │   ├── controller/RegistrationController.java
│   │   └── CourseRegistrationApplication.java
│   ├── src/main/resources/application.properties
│
├── COURSE-REGISTRATION-UI
│   ├── UI-A-simple
│   ├── UI-B-modern
│   ├── UI-C-glassmorphism      ← Form (index.html, script.js, style.css)
│   ├── UI-D-dashboard          ← Dashboard (index.html, script.js, style.css)
│   └── start_project.bat       ← Runs backend + opens dashboard quickly
│

🧠 Application Features
Feature	Status
Registration Form	✔
Store data in MySQL	✔
View all registrations	✔
Delete Registration	✔
Edit Registration	✔
Live search filter	✔
Fetch from backend via REST APIs	✔
Deployment (Netlify UI + plan for Render backend)	✔
🔗 REST API Endpoints
Method	Endpoint	Description
POST	/api/registrations	Add new registration
GET	/api/registrations	Get all registrations
GET	/api/registrations/{id}	Get one by ID
PUT	/api/registrations/{id}	Update registration
DELETE	/api/registrations/{id}	Delete registration
⚙ Database Configuration (application.properties)
spring.datasource.url=jdbc:mysql://localhost:3306/course_db
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

▶ How to Run Locally
🔹 1️⃣ Start Backend

Run Spring Boot project from IntelliJ / Eclipse / VS Code.

OR use:

mvn spring-boot:run

🔹 2️⃣ Start UI

Open start_project.bat (double-click file)

It will:
✔ Start backend
✔ Wait for server
✔ Open dashboard automatically

🌐 Deployment Notes
Platform	Used For	Status
Netlify	UI Deployment	✔
Render / Railway	Backend Deployment	⏳ To be done

📌 Netlify UI works online, but backend API still runs on localhost —
so dashboard shows “Failed to fetch” unless backend is running.

To make the website 100% live, backend must be deployed to Render.

Live Demo : https://stalwart-crisp-41f2dc.netlify.app/ -UI
Live Demo : https://magenta-piroshki-3d1081.netlify.app/ -DB
	
👨‍💻 Developer

M. UMA

📌 Project created with support from learning sessions.

⭐ Final Result

This project demonstrates:

Full-stack development skills

REST API + database CRUD

Real deployment experience

Clean and modern UI
