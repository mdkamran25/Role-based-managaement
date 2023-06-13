# Trainexus

Trainexus is an admin, mentor, and trainee management application built using React. The application provides separate panels for each role to manage their specific tasks and responsibilities.

## Features

## Login

The login page allows users to select their role (admin, mentor, or trainee) and log in to their respective panels.

![Screenshot from 2023-06-12 18-00-01](https://github.com/mdkamran25/Role-based-managaement/assets/122250114/45e40ccf-09a1-4126-9675-58388beae233)

## Admin Panel

The admin panel provides functionalities for managing the overall system and user roles. It includes features such as:

- Dashboard: Provides an overview of system statistics and important information.
- User Management: Allows the admin to add mentor to unassigned trainee.
- Responsibility: Admin can add module for trainee to learn.

## Mentor Panel

The mentor panel is designed for mentors who oversee and guide trainees. It includes features such as:

- Dashboard: Displays a summary of assigned trainees and their progress.
- Trainee Management: Allows mentors to view and update trainee details.
- Task Assignment: Enables mentors to assign tasks to trainees and track their submissions.


## Trainee Panel

The trainee panel is specifically designed for trainees who are undergoing a training program. It includes features such as:

- Dashboard: Displays a personalized dashboard with important information and tasks.
- Task Management: Allows trainees to view assigned tasks and submit their completed work.
- Progress Tracking: Enables trainees to track their progress and view feedback from mentors.


### Public, Private, and Protected Routes

- Public Route: The login page is accessible to everyone.
- Private Route: All pages except the login page require authentication.
- Protected Route: Trainees cannot access other trainee profiles.

### Lazy Loading

- Implemented lazy loading on the dashboard page to display a loading message while loading the dashboard.

### Bell Notification

- Mentor: Shows notifications when a new module is added or when a trainee submits a task.
- Trainee: Shows notifications when a new module is added or when a mentor assigns a task.

### Pages
- There are total of 6 pages in the app.
    - Dashboard: 

         <picture>
          <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/67c67794f2302ecefc5ef355c27ee85dbeada9d3/Screenshot%20from%202023-06-12%2018-19-01.png" alt="Dashboard" >
         </picture>

    - All Trainee Profile: 

      <picture>
        <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/e3ab7e814df3d954e4f1a60bcd3b63345863d67a/Screenshot%20from%202023-06-12%2018-28-11.png" alt="All Trainee Profile" >
      </picture>

    - Modules

      <picture>
        <img src="" alt="Module" >
      </picture>

    - SubTopics Page: 

      <picture>
        <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/fcb8c94a9a2639ee2bbb252a77c648b843708c50/Screenshot%20from%202023-06-12%2018-32-05.png" alt="sub topcics" >
      </picture>

    - Page Not Found: 

      <picture>
        <img src="" alt="Page Not Found" >
      </picture>

    - Profile: 
 
      <picture>
        <img src="" alt="All Trainee Profile" >
      </picture>


### Search Option

- Module Page: Allows searching for modules by entering the module name as a keyword.
- All Trainee Profile Page: Allows mentors and trainees to search for trainees by entering their names as keywords.



### Limitations

- Data Storage in Local Storage: The Redux persist library has limitations in storing data in the local storage. The Chrome browser's local storage has a capacity of 10MB, which can be a limitation when adding a large number of media files.
- Deletion Notifications: If a trainee or mentor deletes their submission or task, the corresponding notification will not be deleted.

## Installation

To install and run the Trainexus application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/username/Trainexus.git`
2. Navigate to the project directory: `Go to the drectory where file is clone`
3. Install dependencies: `npm install`
4. Start the application: `npm start`
5. Open your browser and visit: `http://localhost:3000`

## Demo

A live demo of the Trainexus application can be accessed at: [https://trainexus.netlify.app](https://trainexus.netlify.app)

## Credentials

### Admin Login

- Email: admin@gmail.com
- Password: admin@123

### Mentor Login

- Email: [Email selected during mentor selection]
- Password: [Mentor Name]@123 (Use the same capitalization as entered for the mentor's name)

### Trainee Login

- Email: [Trainee Email as shown in the admin dashboard]
- Password: [Trainee Name]@123 (Use all lowercase for the trainee's name)

## Known Issues

- None at the moment.

## Contributors

Feel free to explore and use Trainexus for managing your admin, mentor, and trainee activities. If you encounter any issues or have suggestions for improvements, please let us know.



