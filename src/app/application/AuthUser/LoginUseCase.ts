import AuthUser from "../../domain/entity/AuthUser/entity/AuthUser";
import LoginInfo from "../../domain/entity/AuthUser/structure/LoginInfo";
import IAuthUserRepository from "../../domain/repository/AuthUser/IAuthUserRepository";

export default class LoginUseCase {

  private _repository: IAuthUserRepository;

  constructor(repository: IAuthUserRepository) {
    this._repository = repository;
  }

  async login(loginInfo: LoginInfo): Promise<AuthUser | any> {
    return this._repository.login(loginInfo);
  }
  
}
