export { getProfileIsLoading } from "./model/selectors/getProfileIsLoading/getProfileIsLoading";
export { getProfileError } from "./model/selectors/getProfileError/getProfileError";
export { getProfileReadonly } from "./model/selectors/getProfileReadonly/getProfileReadonly";
export { getProfileData } from "./model/selectors/getProfileData/getProfileData";
export { ProfileCard } from "./ui/ProfileCard/ProfileCard";
export { fetchProfileData } from "./model/services/fetchProfileData/fetchProfileData";
export { updateProfileData } from "./model/services/updateProfileData/updateProfileData";

export type { ProfileSchema, Profile } from "./model/types/profile";
export { profileReducer, profileActions } from "./model/slice/profileSlice";
