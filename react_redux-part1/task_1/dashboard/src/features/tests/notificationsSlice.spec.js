import mockAxios from "jest-mock-axios";

import notificationsReducer, {
  fetchNotifications,
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
} from "../notifications/notificationsSlice";

describe("notificationsSlice", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test("should return the initial state", () => {
    const initialState = notificationsReducer(undefined, { type: undefined });

    expect(initialState.notifications).toEqual([]);
    expect(initialState.displayDrawer).toEqual(true);
  });

  test("should fetch notifications correctly", async () => {
    const fakeData = [
      { id: 1, value: "Holberton", type: "default" },
      { id: 2, value: "Alexis", type: "urgent" },
      { id: 3, value: "BILLEMONT", type: "urgent" },
    ];

    mockAxios.get.mockResolvedValueOnce({data: fakeData});

    const dispatch = jest.fn();
    const thunk = fetchNotifications();

    await thunk(dispatch, () => ({}));

    expect(dispatch).toHaveBeenCalled();
  });

  test("should remove notification when marked as read", () => {
    const initialState = {
      notifications: [
        { id: 1, value: "Holberton" },
        { id: 2, value: "Alexis BILLEMONT" },
      ],
      displayDrawer: true,
    };

    const newState = notificationsReducer(initialState, markNotificationAsRead(1));

    expect(newState.notifications).toHaveLength(1);
    expect(newState.notifications[0].id).toBe(2);
  });

  test("should show drawer", () => {
    const initialState = {
      notifications: [],
      displayDrawer: false,
    };

    const newState = notificationsReducer(initialState, showDrawer());

    expect(newState.displayDrawer).toBe(true);
  });

  test("should hide drawer", () => {
    const initialState = {
      notifications: [],
      displayDrawer: true,
    };

    const newState = notificationsReducer(initialState, hideDrawer());

    expect(newState.displayDrawer).toBe(false);
  });
});
