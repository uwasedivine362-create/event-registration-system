import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

function RegistrationForm({ formData, setFormData }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/review');
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Event Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name *</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Organization</label>
            <input type="text" name="organization" value={formData.organization} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Ticket Type *</label>
            <select name="ticketType" value={formData.ticketType} onChange={handleChange} required>
              <option value="Standard">Standard</option>
              <option value="VIP">VIP</option>
              <option value="Student">Student</option>
            </select>
          </div>

          <div className="form-group">
            <label>Dietary Requirements</label>
            <input type="text" name="dietary" value={formData.dietary} onChange={handleChange} placeholder="e.g., Vegetarian, Vegan, Gluten-free" />
          </div>

          <div className="form-group">
            <label>Additional Notes</label>
            <textarea name="notes" value={formData.notes} onChange={handleChange} rows="4"></textarea>
          </div>

          <button type="submit" className="btn-primary">Continue to Review</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
