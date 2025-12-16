import { useState, ChangeEvent } from "react";
//custom hook
//hook naming convention: "use" + Functionality
export const useRegisterFrom = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };
  const handleSubmit = () => {
    const registerData = {
      email,
      password,
      confirmPassword,
    };
    if (
      email.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      alert("All fields are required");
    } else if (password !== confirmPassword) {
      alert("Password and Confirm Password must be same");
    } else {
      alert("Registration Successfull");
    }
  };

  return {
    email,
    password,
    confirmPassword,
    handleEmail,
    handlePassword,
    handleConfirmPassword,
    handleSubmit,
  };
};
