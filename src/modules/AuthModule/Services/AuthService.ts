import { BehaviorSubject } from "rxjs";
import PersistStorage from "../../../lib/PersistStorage";
import { AUTH_STATE, REMEMBER_ME } from "../Types/CommonTypes";

class AuthService {
  queryKeys = {};
  initialAuthState: AUTH_STATE = {
    loggedIn: false,
    user: undefined,
    token: "",
    accountType: "GOOGLE",
    latitude: undefined,
    longitude: undefined,
    location: undefined,
    language: "en",
    isCompleteProfile: false,
  };
  initialRememberMe: REMEMBER_ME = {
    email: "",
    password: "",
    checkRemember: false,
  };

  authState$ = new BehaviorSubject<AUTH_STATE>(this.initialAuthState);
  rememberMe$ = new BehaviorSubject<REMEMBER_ME>(this.initialRememberMe);
  constructor() {
    new PersistStorage("authState", this.authState$);
    new PersistStorage("rememberMe", this.rememberMe$);
  }
  resetAuthValue = () => {
    this.authState$.next(this.initialAuthState);
  };

  resetRememberMe = () => {
    this.rememberMe$.next(this.initialRememberMe);
  };
}

export default new AuthService();
