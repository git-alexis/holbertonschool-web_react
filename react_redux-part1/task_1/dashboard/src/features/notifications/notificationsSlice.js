import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getLatestNotification } from "../../utils/utils";

const initialState = {
  notifications: [],
  displayDrawer: true,
};

export const API_BASE_URL = "http://localhost:5173";
export const ENDPOINTS = {
  notifications: `${API_BASE_URL}/notifications.json`,
};

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async () => {
    const response = await axios.get(ENDPOINTS.notifications);

    const data = response.data;

    const notifications = [...data];

    const latestContent = getLatestNotification();

    const updatedList = notifications.map((notif) => {
      if (notif.id === 3) {
        return {
          ...notif,
          html: { __html: latestContent },
        };
      }
      return notif;
    });

    if (!updatedList.some((notif) => notif.id === 3)) {
      updatedList.push({
        id: 3,
        type: "urgent",
        html: { __html: latestContent },
      });
    }

    return updatedList;
  }
);

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    markNotificationAsRead: (state, action) => {
      const id = action.payload;

      console.log(id);

      state.notifications = state.notifications.filter(
        (notification) => notification.id !== id
      );
    },

    showDrawer: (state) => {
      state.displayDrawer = true;
    },

    hideDrawer: (state) => {
      state.displayDrawer = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.notifications = action.payload;
    });
  },
});

export const { markNotificationAsRead, showDrawer, hideDrawer } = notificationsSlice.actions;

export default notificationsSlice.reducer;
