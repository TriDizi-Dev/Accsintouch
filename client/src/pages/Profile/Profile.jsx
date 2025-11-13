import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Profile.css';
import WhatsAppLogo from '../../components/WhatsAppLogo';

const Profile = () => {
  const user = {
    name: 'user',
    email: 'user@email.com',
    phone: '+91 98765 43210',
    joined: 'January 2024',
  };

  // Capitalize first letter
  const formattedName = user.name
    ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
    : '';

  return (
    <div className="profile-page">
      <Header activePage="profile" cartCount={0} wishlistCount={0} />

      {/* Hero Section */}
      <section className="profile-hero">
        <h1>My Profile</h1>
        <p>Manage your account details and preferences.</p>
      </section>

      {/* Profile Info Section */}
      <section className="profile-section">
        <div className="profile-card">
          <div className="profile-avatar">
            {/* Show user's first initial in a colored circle */}
            <div
              className="avatar-placeholder"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#b09fce',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                boxShadow: '0 0 10px rgba(147, 51, 234, 0.3)',
              }}
            >
              {formattedName.charAt(0)}
            </div>
          </div>

          <div className="profile-info">
            <h2>{formattedName}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Member Since:</strong> {user.joined}</p>
          </div>
        </div>
      </section>

      

      <Footer />
      <WhatsAppLogo />
    </div>
  );
};

export default Profile;
