import { Countries } from "entitiess/Country";
import { Currency } from "entitiess/Currency";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { ProfileSchema } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";

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

describe("profileSlice.test", () => {
  test("test set readonly", () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: true,
    };

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(false))
    ).toEqual({ readonly: false });
  });

  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { ...profileData, first: "John" },
      data: profileData,
      readonly: false,
      validateError: [],
    };

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({
      form: profileData,
      data: profileData,
      readonly: true,
      validateError: undefined,
    });
  });

  test("test update profile", () => {
    const state: DeepPartial<ProfileSchema> = {
      form: profileData,
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ first: "John" })
      )
    ).toEqual({ form: { ...profileData, first: "John" } });
  });

  test("test fetchProfileData pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      error: "",
      isLoading: false,
    };

    expect(
      profileReducer(state as ProfileSchema, fetchProfileData.pending)
    ).toEqual({ error: undefined, isLoading: true });
  });

  test("test fetchProfileData rejected", () => {
    const state: DeepPartial<ProfileSchema> = {
      error: "error",
      isLoading: true,
    };

    expect(
      profileReducer(state as ProfileSchema, fetchProfileData.rejected)
    ).toEqual({ error: undefined, isLoading: false });
  });

  test("test fetchProfileData fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      data: undefined,
      form: undefined,
      isLoading: true,
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        fetchProfileData.fulfilled(profileData, "")
      )
    ).toEqual({ data: profileData, form: profileData, isLoading: false });
  });

  test("test updateProfileData pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      validateError: [],
      isLoading: false,
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({ validateError: undefined, isLoading: true });
  });

  test("test updateProfileData rejected", () => {
    const state: DeepPartial<ProfileSchema> = {
      validateError: [],
      isLoading: true,
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.rejected)
    ).toEqual({ validateError: undefined, isLoading: false });
  });

  test("test updateProfileData fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      data: profileData,
      form: profileData,
      isLoading: true,
      readonly: false,
      validateError: undefined,
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled({ ...profileData, first: "John" }, "")
      )
    ).toEqual({
      data: { ...profileData, first: "John" },
      form: { ...profileData, first: "John" },
      isLoading: false,
      readonly: true,
      validateError: undefined,
    });
  });
});
