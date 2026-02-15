//import mockAxios from "jest-mock-axios";
import authReducer, { login, logout } from "../auth/authSlice";

describe("authSlice", () => {
  afterEach(() => {
    mockAxios.reset();
  });
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

    mockAxios.post("/login", payload);

    const expectedState = {
      user: {
        email: "alexis.billemont@holbertonschool.com",
        password: "alexisbillemont",
      },
      isLoggedIn: true,
    };

    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  test("should handle logout", () => {
    mockAxios.post("/logout");

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
