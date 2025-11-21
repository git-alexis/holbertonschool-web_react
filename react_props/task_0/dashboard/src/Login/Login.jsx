import "./Login.css";

function Login() {
  return (
    <>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input data-testid="email" name="email"></input>
        <label htmlFor="password">Password</label>
        <input data-testid="password" name="password"></input>
        <button data-testid="boutonLogin">OK</button>
      </div>
    </>
  );
}

export default Login;
