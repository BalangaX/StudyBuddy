# StudyBuddy

## Project Overview
StudyBuddy is a web-based platform designed for university students and faculty to centralize all tools needed for collaborative learning and self-management. The application enables students to create and track tasks (both personal and for groups), share and access academic summaries, join online study groups, use a template-based document editor, and submit support tickets directly to an administrator.

## Live Site Link
[Visit StudyBuddy (Hosted on Firebase)](https://studybuddy-556fa.web.app)

## Core Features

### 1. Authentication & Registration
-   **Flexible Login**: Users can sign up with a username and email, and log in using *either* their username or email address for convenience.
-   **Role-Based Access**: The system distinguishes between two roles: **Student** and **Admin**, with specific permissions for each.

### 2. Main Dashboard
-   **Personalized Stats**: Displays key performance indicators (KPIs) like "Active Tasks," "Task Completion Rate," and "Daily Engagement," calculated from the user's activity.
-   **Progress Visualization**: Includes a line chart showing task completion over the last 30 days and a feed of the user's most recent activities.
-   **Quick Actions**: Provides direct buttons to create a task, upload a summary, or access the writing assistant.

### 3. Task Management
-   **Unified Task System**: Manages both personal tasks and tasks assigned within study groups.
-   **Interactive Calendar**: Utilizes `react-calendar` to display tasks and upcoming deadlines. Days with tasks are highlighted.
-   **Task Creation & Filtering**: A dedicated form allows creating tasks with a title, description, and due date. Users can filter their view to see personal tasks or tasks for a specific group.
-   **Task Types**: Supports general tasks and "Deadline" tasks, which are highlighted separately.

### 4. Summaries Library
-   **Community-Driven Content**: Students can upload their course summaries as PDF files.
-   **Admin Approval Flow**: Uploaded summaries enter a "pending approval" state. An administrator must review and approve them before they become visible to all users.
-   **Search & Filter**: Users can search for summaries by title or author and filter the results.
-   **Direct Download**: Approved summaries can be viewed directly in the browser or downloaded.

### 5. Academic Writing Assistant
-   **Template-Based Editor**: Users select a document type (e.g., Academic Essay, Lab Report) and a corresponding template.
-   **Text Editor Modal**: A full-screen modal opens with a text editor pre-filled with the chosen template's structure.
-   **PDF Export**: Users can edit the text and download the final document as a PDF using the `jsPDF` library.

### 6. Study Groups (Social Hub)
-   **Group Management**: Users can view existing study groups, create new ones, join public groups, and leave groups they are part of.
-   **Group Details Page**: Each group has a dedicated page that includes:
    -   A list of group members.
    -   A dedicated task list for group-specific assignments.
    -   A simple, real-time chat implemented with Firestore for instant communication.

### 7. Help & Settings
-   **FAQ & Support**: A help page with a categorized FAQ section and a support form to submit tickets to the admin. Users can see admin responses to their past tickets.
-   **User Settings**: A settings panel where users can:
    -   Change their password.
    -   Toggle **Dark Mode** for the entire application.

### 8. Admin Dashboard
-   **User Management**: An overview of all registered users, including their email and key activity stats (completed tasks, summaries uploaded).
-   **Summaries Approval**: A queue of all "pending" summaries, with "Approve" / "Reject" buttons for moderation.
-   **Support Ticket Management**: A table of all support tickets with user information. The admin can write and submit responses, which become visible on the user’s settings page.
-   **Data Visualization**: Displays system-wide statistics, including user growth charts and content distribution pie charts, using the `recharts` library.

## Technology Stack

-   **Framework**: React (v19)
-   **Build Tool**: Vite
-   **Routing**: React Router DOM (v7)
-   **Backend & Database**: Firebase (Authentication, Firestore, Storage)
-   **Styling**: CSS Modules & Global CSS with variables for theming (including Dark Mode)
-   **Charts & Visualization**: Recharts
-   **UI Components**: React Calendar
-   **PDF Generation**: jsPDF

## Admin Credentials
Use the following credentials to log in as an administrator:
-   **Username:** `admin`
-   **Password:** `admin123`