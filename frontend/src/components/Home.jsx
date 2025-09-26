import { Link } from 'react-router-dom';

const Home = ({ user }) => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to RecruitHub</h1>
        <p>Your career journey starts here</p>
        {user ? (
          <div className="user-welcome">
            <p>Welcome back, {user.name}!</p>
            <Link to="/profile" className="btn btn-primary">
              View Profile
            </Link>
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/register" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/login" className="btn btn-secondary">
              Login
            </Link>
          </div>
        )}
      </div>
      
      <div className="features">
        <div className="feature">
          <h3>Job Search</h3>
          <p>Browse thousands of job opportunities from top companies across various industries.</p>
        </div>
        <div className="feature">
          <h3>Professional Network</h3>
          <p>Connect with industry professionals and build meaningful career relationships.</p>
        </div>
        <div className="feature">
          <h3>Career Growth</h3>
          <p>Access resources and tools to advance your career and achieve your professional goals.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
