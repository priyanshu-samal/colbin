import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register');
  };

  const handleLearnMore = () => {
    navigate('/login');
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: 'white',
      color: 'black',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      margin: 0,
      padding: 0
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e5e5',
        width: '100%',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '70px',
          width: '100%'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'black'
            }}>RecruitHub</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <a href="#features" style={{
              color: 'black',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '0.95rem'
            }}>Features</a>
            <a href="#pricing" style={{
              color: 'black',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '0.95rem'
            }}>Pricing</a>
            <a href="#about" style={{
              color: 'black',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '0.95rem'
            }}>About</a>
            <button onClick={() => navigate('/login')} style={{
              background: 'white',
              border: '1px solid black',
              color: 'black',
              padding: '0.5rem 1.5rem',
              borderRadius: '5px',
              fontWeight: '500',
              cursor: 'pointer',
              fontSize: '0.95rem'
            }}>Sign In</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 2rem',
        paddingTop: '70px',
        width: '100%',
        backgroundColor: 'white'
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '1000px',
          width: '100%',
          margin: '0 auto',
          padding: '2rem 0'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            lineHeight: '1.1',
            marginBottom: '2rem',
            color: 'black',
            letterSpacing: '-0.02em'
          }}>
            Find Your Dream Job
            <br />
            <span style={{ color: '#3b82f6' }}>Connect with Top Companies</span>
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '3rem',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontWeight: '400'
          }}>
            Join thousands of professionals who found their perfect career match. 
            Browse jobs, connect with recruiters, and advance your career today.
          </p>

          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            marginBottom: '4rem',
            flexWrap: 'wrap'
          }}>
            <button onClick={handleGetStarted} style={{
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '6px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              minWidth: '200px',
              justifyContent: 'center'
            }}>
              Get Started For Free
              <span>→</span>
            </button>
            <button onClick={handleLearnMore} style={{
              background: 'white',
              color: '#3b82f6',
              border: '2px solid #3b82f6',
              padding: '1rem 2rem',
              borderRadius: '6px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              minWidth: '200px',
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center'
            }}>
              See How It Works
            </button>
          </div>

          {/* Quick Action Buttons */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <button style={{
              background: '#f8f9fa',
              border: '1px solid #e9ecef',
              color: 'black',
              padding: '1.25rem',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontWeight: '500',
              fontSize: '0.95rem',
              justifyContent: 'center'
            }}>
              <span style={{ fontSize: '1.2rem' }}>💼</span>
              Job Search
            </button>
            <button style={{
              background: '#f8f9fa',
              border: '1px solid #e9ecef',
              color: 'black',
              padding: '1.25rem',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontWeight: '500',
              fontSize: '0.95rem',
              justifyContent: 'center'
            }}>
              <span style={{ fontSize: '1.2rem' }}>👥</span>
              Networking
            </button>
            <button style={{
              background: '#f8f9fa',
              border: '1px solid #e9ecef',
              color: 'black',
              padding: '1.25rem',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontWeight: '500',
              fontSize: '0.95rem',
              justifyContent: 'center'
            }}>
              <span style={{ fontSize: '1.2rem' }}>📝</span>
              Resume Builder
            </button>
            <button style={{
              background: '#f8f9fa',
              border: '1px solid #e9ecef',
              color: 'black',
              padding: '1.25rem',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontWeight: '500',
              fontSize: '0.95rem',
              justifyContent: 'center'
            }}>
              <span style={{ fontSize: '1.2rem' }}>📈</span>
              Career Growth
            </button>
          </div>
        </div>
      </main>

      {/* Trust Section */}
      <section style={{
        textAlign: 'center',
        padding: '4rem 2rem',
        background: '#f8f9fa',
        borderTop: '1px solid #e5e5e5',
        width: '100%'
      }}>
        <p style={{
          color: '#666',
          fontSize: '0.9rem',
          fontWeight: '600',
          letterSpacing: '1px',
          marginBottom: '2rem',
          textTransform: 'uppercase'
        }}>TRUSTED BY 100+ COMPANIES</p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{
            color: '#666',
            fontWeight: '500',
            fontSize: '1.1rem',
            opacity: '0.8'
          }}>TechCorp</div>
          <div style={{
            color: '#666',
            fontWeight: '500',
            fontSize: '1.1rem',
            opacity: '0.8'
          }}>InnovateLab</div>
          <div style={{
            color: '#666',
            fontWeight: '500',
            fontSize: '1.1rem',
            opacity: '0.8'
          }}>FutureSoft</div>
          <div style={{
            color: '#666',
            fontWeight: '500',
            fontSize: '1.1rem',
            opacity: '0.8'
          }}>DataFlow</div>
        </div>
      </section>

      {/* Features Preview */}
      <section id="features" style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        background: 'white',
        width: '100%'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            background: 'white',
            border: '1px solid #e5e5e5',
            padding: '2.5rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1.5rem'
            }}>💼</div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'black'
            }}>Job Matching</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '1rem'
            }}>Find jobs that match your skills and experience. Our platform connects you with relevant opportunities from top companies.</p>
          </div>
          <div style={{
            background: 'white',
            border: '1px solid #e5e5e5',
            padding: '2.5rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1.5rem'
            }}>👥</div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'black'
            }}>Professional Network</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '1rem'
            }}>Connect with industry professionals, recruiters, and potential employers. Build meaningful relationships that advance your career.</p>
          </div>
          <div style={{
            background: 'white',
            border: '1px solid #e5e5e5',
            padding: '2.5rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1.5rem'
            }}>📝</div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'black'
            }}>Career Tools</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '1rem'
            }}>Access professional resume templates, interview tips, and career guidance to help you land your dream job.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;