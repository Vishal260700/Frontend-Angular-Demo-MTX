## Frontend for MTX-Demo

# Intro

EmployeeConnect is an app for admin to add/delete/update/search user details to manage them and connect them with Team leads for intra-company transfer. Technologies utilized include Angular, Angular-material, Spring-MongoDB Backend(Seperate github repo) and Firebase (authentication purpose)

# Setup

1. git clone repo
2. npm install (to install all dependencies)
3. ng serve
4. Open localhost:4200

# Routings
1. "/" - Welcome Component
2. "/login" - LoginComponent
3. "/dashboard" - DashboardComponent (Angular AuthGuard working with Firebase Authentication)
4. "**" - Error 404 page for any other routes

# Services
1. AuthService - Firebase Authentication
2. UserService - API Handeler

# Components
1. DashboardComponent - ngOninit() to Fetch all users after admin auth - Integrates profile-card component, Search-bar component, Add-User component
2. ErrorComponent
3. LoginComponent - Uses Auth service with Firebase Authentication
4. Profile-card Component - profile card component
5. ResultComponent - to showcase search results - Integrates Profile card component in it
6. AddTech Component - Form for Adding new user (Utilized Angular Reactive Form - FormGroups)
7. UpdateUserComponent - Angular Reactive Form for updating user details
8. SearchBarComponent - Utilizes UserService for API Service by Spring and MongoDB

# Future Ideas
Implementing a robust automated algorithm for auto-matching company employees(SDEs, Analysts,etc) with Team leads, Managers who are seeking employees with certain technical capabilities for Intra-company transfer. Adding a chat UI and service for them to chat in that too with end-to-end encryption.
