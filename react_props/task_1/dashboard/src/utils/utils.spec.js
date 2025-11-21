import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';

describe("Utils functions", () => {
  test("getCurrentYear returns the correct year", () => {
    const CurrentYear = new Date
    expect(getCurrentYear()).toBe(CurrentYear.getFullYear())
  });

  test("getFooterCopy returns the correct string when the argument is true", () => {
    expect(getFooterCopy(true)).toEqual("Holberton School");
  });

  test("getFooterCopy returns the correct string when the argument is false", () => {
    expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
  });

  test("getLatestNotification returns the expected string", () => {
    expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
  });
});
