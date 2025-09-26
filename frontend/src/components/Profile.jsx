import { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ user }) => {
  const [profileData, setProfileData] = useState(user);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get('/profile');
      setProfileData(response.data.user);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>User Profile</h2>
        <p>Manage your account information</p>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-avatar">
            <div className="avatar-circle">
              {profileData?.name?.charAt(0).toUpperCase()}
            </div>
          </div>
          
          <div className="profile-info">
            <h3>{profileData?.name}</h3>
            <p className="profile-email">{profileData?.email}</p>
            <p className="profile-joined">
              Member since {formatDate(profileData?.createdAt)}
            </p>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-section">
            <h4>Account Information</h4>
            <div className="detail-grid">
              <div className="detail-item">
                <label>Full Name</label>
                <span>{profileData?.name}</span>
              </div>
              <div className="detail-item">
                <label>Email Address</label>
                <span>{profileData?.email}</span>
              </div>
              <div className="detail-item">
                <label>User ID</label>
                <span className="user-id">{profileData?._id}</span>
              </div>
              <div className="detail-item">
                <label>Account Created</label>
                <span>{formatDate(profileData?.createdAt)}</span>
              </div>
              <div className="detail-item">
                <label>Last Updated</label>
                <span>{formatDate(profileData?.updatedAt)}</span>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h4>Platform Features</h4>
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Profile Management</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Secure Authentication</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Job Search Access</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Application Tracking</span>
              </div>
            </div>
          </div>
        </div>

        {message && (
          <div className="success-message">{message}</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
