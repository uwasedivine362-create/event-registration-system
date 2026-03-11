import { useNavigate } from 'react-router-dom';
import './ReviewPage.css';

function ReviewPage({ formData }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h1>Review Your Registration</h1>
        <p>Please verify your information before confirming.</p>

        <div className="review-section">
          <div className="review-item">
            <strong>Full Name:</strong>
            <span>{formData.fullName}</span>
          </div>
          <div className="review-item">
            <strong>Email:</strong>
            <span>{formData.email}</span>
          </div>
          <div className="review-item">
            <strong>Phone:</strong>
            <span>{formData.phone}</span>
          </div>
          <div className="review-item">
            <strong>Organization:</strong>
            <span>{formData.organization || 'N/A'}</span>
          </div>
          <div className="review-item">
            <strong>Ticket Type:</strong>
            <span>{formData.ticketType}</span>
          </div>
          <div className="review-item">
            <strong>Dietary Requirements:</strong>
            <span>{formData.dietary || 'None'}</span>
          </div>
          <div className="review-item">
            <strong>Additional Notes:</strong>
            <span>{formData.notes || 'None'}</span>
          </div>
        </div>

        <div className="button-group">
          <button className="btn-secondary" onClick={() => navigate('/register')}>
            Edit Information
          </button>
          <button className="btn-primary" onClick={() => navigate('/confirmation')}>
            Confirm Registration
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;
