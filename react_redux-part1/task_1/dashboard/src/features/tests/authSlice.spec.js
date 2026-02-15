import authReducer, { login, logout } from "../auth/authSlice";

describe("authSlice", () => {
  test("should return the initial state", () => {
    const initialState = authReducer(undefined, { type: undefined });

    expect(initialState).toEqual({
      user: {
        email: "",
        password: "",
      },
      isLoggedIn: false,
    });
  });

  test("should handle login", () => {
    const payload = {
      email: "alexis.billemont@holbertonschool.com",
      password: "alexisbillemont",
    };

    const newState = authReducer(undefined, login(payload));

    expect(newState.user.email).toBe(payload.email);
    expect(newState.user.password).toBe(payload.password);
    expect(newState.isLoggedIn).toBe(true);
  });

  test("should handle logout", () => {
    const loggedInState = {
      user: {
        email: "alexis.billemont@holbertonschool.com",
        password: "alexisbillemont",
      },
      isLoggedIn: true,
    };

    const newState = authReducer(loggedInState, logout());

    expect(newState.user.email).toBe("");
    expect(newState.user.password).toBe("");
    expect(newState.isLoggedIn).toBe(false);
  });
});
