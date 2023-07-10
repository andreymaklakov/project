import { Countries } from "entitiess/Country";
import { Currency } from "entitiess/Currency";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { ValidateProfileError } from "../../types/profile";

import { updateProfileData } from "./updateProfileData";

const profileData = {
  id: "1",
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

describe("updateProfileData.test", () => {
  test("should return form data", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(profileData);
  });

  test("should return error no data", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {},
    });

    const result = await thunk.callThunk();

    expect(thunk.api.put).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.NO_DATA]);
  });

  test("should return server error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test("should return validation error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...profileData, first: "" },
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
