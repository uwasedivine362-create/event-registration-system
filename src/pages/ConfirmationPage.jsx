import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmationPage.css';

function ConfirmationPage({ formData, setIsRegistered }) {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('registration', JSON.stringify(formData));
    setIsRegistered(true);
  }, [formData, setIsRegistered]);

  return (
    <div className="container">
      <div className="card confirmation-card">
        <div className="success-icon">✓</div>
        <h1>Registration Successful!</h1>
        <p>Thank you for registering for the Tech Innovation Conference 2024.</p>
        <p>Your seat has been reserved.</p>
        
        <div className="confirmation-details">
          <p><strong>Confirmation sent to:</strong> {formData.email}</p>
          <p><strong>Ticket Type:</strong> {formData.ticketType}</p>
        </div>

        <button className="btn-primary" onClick={() => navigate('/submitted')}>
          View Registration Details
        </button>
      </div>
    </div>
  );
}

export default ConfirmationPage;
