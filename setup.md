# Quick Setup Guide

## Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

## Environment Setup

### 1. Create Environment File
Create a `.env` file in the `backend` directory with the following content:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/recruitment_platform

# JWT Secret (change this to a secure random string in production)
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# Environment
NODE_ENV=development
```

### 2. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 3. Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### 4. Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## Testing the Application

1. **Register a new user** at http://localhost:5173/register
2. **Login** with your credentials at http://localhost:5173/login
3. **View your profile** at http://localhost:5173/profile

## API Testing with cURL

### Register User
```bash
curl -X POST http://localhost:3000/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

### Login User
```bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

### Get Profile (with token)
```bash
curl -X GET http://localhost:3000/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally or use MongoDB Atlas
- Check the MONGO_URI in your .env file
- Verify network connectivity

### Port Conflicts
- Backend runs on port 3000
- Frontend runs on port 5173
- Change ports in server.js and vite.config.js if needed

### CORS Issues
- Ensure frontend and backend are running on correct ports
- Check axios baseURL configuration in App.jsx
