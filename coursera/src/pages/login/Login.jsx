import "./Login.css";

function Login() {
  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Welcome Back</h1>

        <p className="subtitle">
          Login to continue your learning journey
        </p>

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>Login</button>

        

      </div>

    </div>
  );
}

export default Login;