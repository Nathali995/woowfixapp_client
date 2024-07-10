import AuthUser from "../../entity/AuthUser/entity/AuthUser";
import LoginInfo from "../../entity/AuthUser/structure/LoginInfo";

export default interface IAuthUserRepository {

  login(loginInfo: LoginInfo): Promise<AuthUser | any>;
  
}
