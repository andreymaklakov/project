import { StateSchema } from "app/providers/StoreProvider";
import { Countries } from "entitiess/Country";
import { Currency } from "entitiess/Currency";

import { getProfileData } from "./getProfileData";

describe("getProfileData.test", () => {
  test("should return data", () => {
    const data = {
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

    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
