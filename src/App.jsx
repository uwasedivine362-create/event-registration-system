import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import EventInfo from "./pages/EventInfo";
import RegistrationForm from "./pages/RegistrationForm";
import ReviewPage from "./pages/ReviewPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import SubmittedPage from "./pages/SubmittedPage";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    ticketType: "Standard",
    dietary: "",
    notes: "",
  });

  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("registration");

    if (saved) {
      setFormData(JSON.parse(saved));
      setIsRegistered(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isRegistered ? <Navigate to="/submitted" /> : <EventInfo />}
        />

        <Route
          path="/register"
          element={
            <RegistrationForm formData={formData} setFormData={setFormData} />
          }
        />

        <Route path="/review" element={<ReviewPage formData={formData} />} />

        <Route
          path="/confirmation"
          element={
            <ConfirmationPage
              formData={formData}
              setIsRegistered={setIsRegistered}
            />
          }
        />

        <Route
          path="/submitted"
          element={
            <SubmittedPage
              formData={formData}
              setIsRegistered={setIsRegistered}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;