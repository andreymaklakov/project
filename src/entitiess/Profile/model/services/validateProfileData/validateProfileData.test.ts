import { Countries } from "entitiess/Country";
import { Currency } from "entitiess/Currency";

import { ValidateProfileError } from "../../types/profile";
import { validateProfileData } from "./validateProfileData";

const profileData = {
  first: "Andrejs",
  lastname: "Maklakovs",
  age: 28,
  currency: Currency.EUR,
  country: Countries.Latvia,
  city: "Liepāja",
  username: "admin",
  avatar:
    "https://media.istockphoto.com/id/1225549108/vector/run-sport-exercise-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=RKFqwoj4U4mw076yakzLoxFxz5MLm1gQI_mU4RVpzp4=",
};

describe("validateProfileData.test", () => {
  test("should return empty array", async () => {
    const result = validateProfileData(profileData);

    expect(result).toEqual([]);
  });

  test("should return incorrect user data error", async () => {
    const result = validateProfileData({ ...profileData, first: "" });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("should return incorrect age error", async () => {
    const result = validateProfileData({ ...profileData, age: NaN });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("should return two errors", async () => {
    const result = validateProfileData({ ...profileData, first: "", age: NaN });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test("should return no data error", async () => {
    const result = validateProfileData();

    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });
});
