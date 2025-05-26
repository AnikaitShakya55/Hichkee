import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ToggleForm.css";
import { useDispatch } from "react-redux";
import { showSnackbar } from "../../redux/snackbarSlice";
import { setActiveUser } from "../../redux/activeUserSlice";

const BACKEND_PORT = `http://localhost:5000`;

const ToggleForm = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsLogin((prev) => !prev);
    setFormData({ name: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin ? "/auth/login" : "/auth/register";

    try {
      const res = await fetch(`${BACKEND_PORT}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed");

      if (isLogin) {
        // Save in localStorage
        localStorage.setItem("token", data.token);

        // Save in Redux store
        dispatch(setActiveUser({ user: data.user, token: data.token }));

        navigate("/home");
      } else {
        alert("Registration successful! Please login.");
        toggleMode();
      }
    } catch (err) {
      dispatch(showSnackbar({ message: err.message, severity: "error" }));
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>{isLogin ? "Login" : "Register"} to Hichkee</h2>

        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">{isLogin ? "Login" : "Register"}</button>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={toggleMode}>{isLogin ? " Register" : " Login"}</span>
        </p>
      </form>
    </div>
  );
};

export default ToggleForm;
