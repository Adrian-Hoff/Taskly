//react
import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  SetStateAction,
} from "react";

//types
import { TypeReactNode } from "../../types/@contexts/TypeReactNode";
import { TypeAuthContext } from "../../types/@contexts/TypeAuthContext/TypeAuthContext";
import { TypeAuthContextUser } from "../../types/@contexts/TypeAuthContext/TypeAuthContextUser/TypeAuthContextUser";

export const AuthContext = createContext<TypeAuthContext>(
  {} as TypeAuthContext
);

function AuthContextProvider({ children }: TypeReactNode) {
  const [user, setUser] = useState<TypeAuthContextUser>(
    {} as TypeAuthContextUser
  );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
