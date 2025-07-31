import React from "react";
import "./login.modules.scss";
import Button from "../../Button/Button";

export default function LoginTemplate() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo-wrapper">
          <img src="/svg/logo.svg" alt="Logo" className="login-logo" />
        </div>
        <div className="illustration-wrapper">
          <img src="/svg/login.svg" alt="Login illustration" />
        </div>
      </div>

      <div className="login-right">
        <div className="logo-wrapper mobile-logo-wrapper">
          <img src="/svg/logo.svg" alt="Logo" className="login-logo" />
        </div>
        <form className="login-form">
          <div>
            <h2>Welcome!</h2>
            <h5>Enter details to login.</h5>
          </div>

          <input
            type="email"
            placeholder="Email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-wrapper">
            <input
              className="password-input"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <a href="#">FORGOT PASSWORD?</a>

          <Button className="btn" disabled={!email || !password}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
