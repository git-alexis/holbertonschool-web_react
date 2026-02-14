import mockAxios from "jest-mock-axios";
import authReducer, { login, logout } from "../auth/authSlice";

describe("authSlice", () => {
  afterEach(() => {
    mockAxios.reset();
  });

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
    const previousState = {
      user: {
        email: "",
        password: "",
      },
      isLoggedIn: false,
    };

    const payload = {
      email: "TEST@email.com",
      password: "TEST",
    };

    const newState = authReducer(previousState, login(payload));

    expect(newState.user.email).toBe(payload.email);
    expect(newState.user.password).toBe(payload.password);
    expect(newState.isLoggedIn).toBe(true);
  });

  test("should handle logout", () => {
    const previousState = {
      user: {
        email: "TEST@email.com",
        password: "TEST",
      },
      isLoggedIn: true,
    };

    const newState = authReducer(previousState, logout());

    expect(newState.user.email).toBe("");
    expect(newState.user.password).toBe("");
    expect(newState.isLoggedIn).toBe(false);
  });
});
