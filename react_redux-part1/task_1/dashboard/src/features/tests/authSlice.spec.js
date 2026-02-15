import authReducer, { login, logout } from "../auth/authSlice";

describe("authSlice", () => {
  const initialState = authReducer(undefined, { type: undefined });

  test("should return the initial state", () => {
    expect(initialState).toEqual({
      user: {
        email: "",
        password: "",
      },
      isLoggedIn: false,
    });
  });

  test("should handle login", () => {
    const action = login({
      email: "alexis.billemont@holbertonschool.com",
      password: "alexisbillemont",
    });

    const newState = authReducer(initialState, action);

    expect(newState.user.email).toBe("alexis.billemont@holbertonschool.com");
    expect(newState.user.password).toBe("alexisbillemont");
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
