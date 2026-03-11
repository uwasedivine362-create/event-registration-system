import { useNavigate } from "react-router-dom";
import "./SubmittedPage.css";

function SubmittedPage({ formData, setIsRegistered }) {
  const navigate = useNavigate();

  const handleReset = () => {
    localStorage.removeItem("registration");
    setIsRegistered(false);
    navigate("/");
  };

  return (
    <div>
      <h1>Registration Successful 🎉</h1>

      <p>Thank you {formData.fullName} for registering!</p>

      <button onClick={handleReset}>
        Register Another Person
      </button>
    </div>
  );
}

export default SubmittedPage;