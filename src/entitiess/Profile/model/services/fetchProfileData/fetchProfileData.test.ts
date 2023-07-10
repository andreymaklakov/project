import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

import { fetchProfileData } from "./fetchProfileData";

describe("fetchProfileData.test", () => {
  test("should return user data", async () => {
    const profileData = {
      first: "Andrejs",
      lastname: "Maklakovs",
      age: 28,
      currency: "EUR",
      country: "Latvia",
      city: "Liepāja",
      username: "admin",
      avatar:
        "https://media.istockphoto.com/id/1225549108/vector/run-sport-exercise-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=RKFqwoj4U4mw076yakzLoxFxz5MLm1gQI_mU4RVpzp4=",
    };

    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));

    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(profileData);
  });

  test("should return error", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual("error");
  });
});
