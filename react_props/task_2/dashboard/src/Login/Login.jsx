import "./Login.css";

function Login() {
  return (
    <>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input id="email" data-testid="email"></input>
        <label htmlFor="password">Password</label>
        <input id="password" data-testid="password"></input>
        <button data-testid="boutonLogin">OK</button>
      </div>
    </>
  );
}

export default Login;
