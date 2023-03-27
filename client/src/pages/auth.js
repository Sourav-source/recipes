import { useState } from "react"

export const Auth = () => {
  return (
    <div className="auth">
      <Register />
      <Login />
    </div>
  )
}

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return <Form username={username} setUsername={setUsername} password={password} setPassword={setPassword} />
}

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return <Form username={username} setUsername={setUsername} password={password} setPassword={setPassword} />
}

const Form = ({ username, setUsername, password, setPassword }) => {
  <div className="auth-container">
    <form>
      <h2>Register</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" value={password} onChange={(event) => setPassword(event.target.ariaValueNow)} />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
}