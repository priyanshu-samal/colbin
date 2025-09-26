# RecruitHub

A modern recruitment platform built with Node.js, Express, MongoDB, and React. Connect job seekers with top companies through our intuitive platform.

## 🚀 Features

- **Modern Landing Page**: Clean, professional design with intuitive navigation
- **User Registration & Authentication**: Secure JWT-based authentication system
- **User Profile Management**: View and manage user profile information
- **Job Search Platform**: Browse and apply for job opportunities
- **Professional Networking**: Connect with industry professionals
- **Career Tools**: Resume builder and career guidance resources
- **RESTful API**: Well-structured backend API with proper validation
- **Database Integration**: MongoDB with Mongoose ODM
- **Security**: Password hashing, JWT tokens, and input validation

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **MongoDB** (running locally or MongoDB Atlas)
- **npm** or **yarn**

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd coblin
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/recruitment_platform

# JWT Secret (change this to a secure random string in production)
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# Environment
NODE_ENV=development
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

### 4. Start the Application

**Start the backend server:**
```bash
cd backend
npm start
```
The backend will run on `http://localhost:3000`

**Start the frontend development server:**
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
coblin/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── user.controller.js      # User authentication logic
│   │   ├── middleware/
│   │   │   ├── auth.middleware.js      # JWT authentication middleware
│   │   │   └── validator.middleware.js # Input validation middleware
│   │   ├── models/
│   │   │   └── user.model.js           # User database schema
│   │   ├── routes/
│   │   │   └── app.routes.js           # API routes
│   │   ├── db/
│   │   │   └── db.js                   # Database connection
│   │   └── app.js                      # Express app configuration
│   ├── server.js                       # Server entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LandingPage.jsx         # Modern landing page
│   │   │   ├── LandingPage.css         # Landing page styles
│   │   │   ├── Navbar.jsx              # Navigation component
│   │   │   ├── Home.jsx                # Dashboard page
│   │   │   ├── Register.jsx            # User registration
│   │   │   ├── Login.jsx               # User login
│   │   │   └── Profile.jsx             # User profile
│   │   ├── App.jsx                     # Main app component with routing
│   │   ├── App.css                     # Global styles
│   │   └── main.jsx                    # React entry point
│   └── package.json
└── README.md
```

## 🔧 API Documentation

### Base URL
```
http://localhost:3000
```

### Authentication Endpoints

#### Register User
```http
POST /register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "User registered",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Login User
```http
POST /login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Logged in",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Get User Profile
```http
GET /profile
Authorization: Bearer <token>
```

**Response:**
```json
{
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### Logout
```http
POST /logout
```

**Response:**
```json
{
  "message": "Logged out successfully"
}
```

## 🗄️ Database Schema

### User Model
```javascript
{
  name: String (required, trimmed)
  email: String (required, unique, lowercase, trimmed)
  password: String (required, minlength: 6)
  createdAt: Date (auto-generated)
  updatedAt: Date (auto-generated)
}
```

## 🔐 Security Features

### Authentication & Authorization
- **JWT Tokens**: Secure token-based authentication
- **Password Hashing**: bcryptjs for password security
- **HTTP-Only Cookies**: Prevents XSS attacks
- **Token Expiration**: 24-hour token lifetime

### Input Validation
- **Express Validator**: Server-side validation for all inputs
- **Email Validation**: Proper email format validation
- **Password Requirements**: Minimum 6 characters
- **Name Validation**: Minimum 2 characters, trimmed

### Security Headers
- **CORS**: Configured for frontend-backend communication
- **Secure Cookies**: Production-ready cookie settings
- **Error Handling**: No sensitive information in error responses

## 🏗️ Architecture Decisions

### Backend Architecture
- **MVC Pattern**: Clear separation of concerns
- **Middleware-based**: Modular authentication and validation
- **RESTful Design**: Standard HTTP methods and status codes
- **Error Handling**: Centralized error management

### Frontend Architecture
- **Component-based**: Reusable React components
- **Client-side Routing**: React Router for navigation
- **State Management**: React hooks for local state
- **Responsive Design**: Mobile-first approach

### Database Design
- **MongoDB**: NoSQL for flexibility and scalability
- **Mongoose ODM**: Schema validation and middleware
- **Indexing**: Email field indexed for performance
- **Timestamps**: Automatic creation and update tracking

## 🚨 Error Handling

### Backend Error Responses
```json
{
  "message": "Error description",
  "errors": [
    {
      "path": "field_name",
      "msg": "Validation error message"
    }
  ]
}
```

### Common HTTP Status Codes
- `200`: Success
- `201`: Created
- `400`: Bad Request (validation errors)
- `401`: Unauthorized (invalid/missing token)
- `404`: Not Found
- `409`: Conflict (duplicate email)
- `500`: Internal Server Error

### Frontend Error Handling
- Form validation with real-time feedback
- Network error handling with user-friendly messages
- Loading states for better UX
- Automatic token refresh handling

## 📈 Scaling Suggestions

### Performance Optimizations
1. **Database Indexing**: Add indexes for frequently queried fields
2. **Caching**: Implement Redis for session management
3. **CDN**: Use CDN for static assets
4. **Database Connection Pooling**: Optimize MongoDB connections

### Security Enhancements
1. **Rate Limiting**: Implement request rate limiting
2. **Input Sanitization**: Add HTML sanitization
3. **CORS Configuration**: Restrict origins in production
4. **Environment Variables**: Use secure secret management

### Infrastructure Scaling
1. **Load Balancing**: Multiple server instances
2. **Database Clustering**: MongoDB replica sets
3. **Microservices**: Split into smaller services
4. **Containerization**: Docker for deployment

### Feature Enhancements
1. **Email Verification**: Add email confirmation
2. **Password Reset**: Forgot password functionality
3. **Profile Pictures**: File upload capability
4. **Social Login**: OAuth integration
5. **Admin Panel**: User management interface

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
cd frontend
npm test
```

## 🚀 Deployment

### Environment Variables for Production
```env
NODE_ENV=production
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/recruitment_platform
JWT_SECRET=your_very_secure_jwt_secret_key
```

### Build for Production
```bash
# Backend
cd backend
npm install --production

# Frontend
cd frontend
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions, please contact [your-email@example.com]

---

**Note**: This is a prototype application. For production use, implement additional security measures, comprehensive testing, and proper error monitoring.
