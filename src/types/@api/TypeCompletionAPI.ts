import { TypeAuthContextUser } from "../@contexts/TypeAuthContext/TypeAuthContextUser/TypeAuthContextUser";

export type TypeCompletionAPI = {
  prompt: string;
  user: TypeAuthContextUser;
};
