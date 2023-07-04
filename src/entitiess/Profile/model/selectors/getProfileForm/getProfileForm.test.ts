import { StateSchema } from "app/providers/StoreProvider";
import { Countries } from "entitiess/Country";
import { Currency } from "entitiess/Currency";

import { getProfileForm } from "./getProfileForm";

describe("getProfileForm.test", () => {
  test("should return data", () => {
    const form = {
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
        form,
      },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
