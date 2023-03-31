import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

export const Auth = () => {
  return (
    <div className="auth">
      <Register />
      <Login />
    </div>
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      })
      alert(response?.data?.message)
      setUsername("")
      setPassword("")
    } catch (error) {
      alert(error?.response?.data?.message)
      console.error(error)
    }
  };

  return (
    <Form
      label="Register"
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      onSubmit={onSubmit}
    />
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(["access_token"])
  const navigate = useNavigate()
  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      })
      console.log(response)
      setCookies("access_token", response?.data?.token)
      window.localStorage.setItem("userID", response?.data?.userID)
      navigate("/")
    } catch (error) {
      alert(error?.response?.data?.message)
      console.error(error);
    }
  }

  return (
    <Form
      label="Login"
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      onSubmit={onSubmit}
    />
  );
};

const Form = ({ username, setUsername, password, setPassword, label, onSubmit }) => {
  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <h2>{label}</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">{label}</button>
      </form>
    </div>
  );
};
