# 🌐 Udyam Registration Clone

A full-stack MERN-style application that simulates the **Udyam Registration Portal** for small and medium enterprises (SMEs) in India.  
This project includes a **React + TypeScript + Tailwind CSS frontend** and a **Node.js + Express backend** that handles mock Aadhaar and PAN validations.

---

## 🚀 Features

### 🖥️ Frontend
- Built with **React (TypeScript)** and styled using **Tailwind CSS**.
- Step-by-step registration flow:
  1. **Step 1** – Aadhaar & OTP verification (mock)
  2. **Step 2** – PAN validation
  3. **Step 3** – Confirmation summary
- Form validation using **react-hook-form**.
- Progress bar with smooth transitions between steps.
- Fully responsive and modern UI.

### ⚙️ Backend
- Simple **Node.js + Express** server.
- Accepts registration data from frontend via **POST** requests.
- Returns confirmation messages as JSON responses.
- Ready for integration with a database if needed.

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React, TypeScript, Tailwind CSS, React Hook Form |
| Backend | Node.js, Express |
| Communication | REST API (fetch/POST) |
| Build Tool | CRA (Create React App) |

---

## 📁 Folder Structure

Udyam-Clone/
│
├── frontend/ # React + TypeScript App
│ ├── src/
│ │ ├── components/ # Reusable UI components (Header, ProgressBar)
│ │ ├── Step1.tsx # Aadhaar + OTP mock step
│ │ ├── Step2.tsx # PAN validation step
│ │ ├── Step3.tsx # Summary + API submission
│ │ ├── App.tsx # Multi-step controller
│ │ └── index.tsx
│ └── package.json
│
├── backend/ # Node.js Express Server
│ ├── server.js # API endpoint for registration
│ └── package.json
│
└── README.md


---

## ⚡ Quick Start

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/Udyam-Clone.git
cd Udyam-Clone

2️⃣ Setup Frontend
cd frontend
npm install
npm start


The app will run on http://localhost:3000

3️⃣ Setup Backend
cd backend
npm install
node server.js


The server runs on http://localhost:5000

🔗 API Endpoint
Method	Endpoint	Description
POST	/api/register	Receives Aadhaar & PAN details from frontend

Sample Response:

{
  "message": "Registration data received successfully!"
}

🧠 How It Works

User enters Aadhaar and OTP (mock values).

Proceeds to PAN validation step.

Submits final data → sent to backend via fetch POST.

Backend logs and responds with success message.

Final confirmation is displayed in the frontend.

🪄 Scripts
Command	Description
npm start	Start development server
npm run build	Build production-ready app
npm test	Run tests (if any)
serve -s build	Serve built app locally
🎨 UI Preview
Step	Description
🧾 Step 1	Aadhaar & OTP Input
🪪 Step 2	PAN Validation
✅ Step 3	Registration Confirmation
📦 Deployment
Build the frontend:
cd frontend
npm run build

Serve production build:
npm install -g serve
serve -s build


Frontend will be available on http://localhost:3000