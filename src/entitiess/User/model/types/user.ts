export interface User {
  id: string;
  username: string;
  avatar: string | undefined;
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;
}
