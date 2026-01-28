# MotoCare – Agency Management System (Frontend)

MotoCare is a web-based agency management system designed to support motorcycle service centers in managing appointments, maintenance records, and promotional programs. This project was developed as part of a university group assignment, focusing on building a clean, consistent, and scalable frontend application based on real-world business workflows. The system provides core features such as agency dashboard analytics, appointment management with detailed views and status handling, maintenance history tracking and new maintenance record creation, and promotion management with basic interactions (view and delete). The frontend is implemented using Angular with standalone components, following modular architecture, reusable UI patterns, and enterprise-style UI/UX aligned with Figma designs. Currently, the project uses mock data to simulate backend behavior and is prepared for future backend API integration.

## 🚀 Key Features

- Agency dashboard with summary statistics and today's appointments
- Appointment management (list, detail view, status actions)
- Maintenance management (history view, create new maintenance record)
- Promotion management (view details, delete with confirmation)
- Responsive layout with reusable components
- UI/UX designed according to Figma mockups
- Mock data structure ready for backend integration

## 🛠 Tech Stack

- **Framework:** Angular
- **Language:** TypeScript
- **Styling:** CSS (custom, Figma-aligned)
- **Architecture:** Standalone Components
- **Routing:** Angular Router
- **Data:** Mock data (temporary, frontend-only)

## 📂 Project Structure
```
src/
├── app/
│ ├── layouts/
│ │ └── agency-layout/
│ ├── pages/
│ │ ├── agency-dashboard/
│ │ ├── agency-appointments/
│ │ ├── agency-appointment-detail/
│ │ ├── agency-maintenance/
│ │ ├── agency-record-maintenance/
│ │ └── agency-promotions/
│ ├── data/
│ │ └── appointments.mock.ts
│ └── app.routes.ts
├── assets/
│ ├── images/
│ └── icons/
```
## ▶️ Getting Started

1. Clone the repository:
git clone https://github.com/your-username/motocare.git

2. Install dependencies:
```
npm install
```
3. Run the project:
```
ng serve
```
4. Open in browser:
```
http://localhost:4200
```
🔮 Future Improvements

Integrate backend APIs (authentication, database)

Implement real CRUD operations

Add role-based access control

Improve form validation and error handling

Add notification service (toast / snackbar)

👨‍💻 Author

Developed by a university student as part of a group software engineering project.
Frontend implementation and UI logic were the main responsibilities.

📄 License

This project is for educational purposes only.