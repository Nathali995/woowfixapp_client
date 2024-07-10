
import LoginUseCase from 'src/app/application/AuthUser/LoginUseCase';
import LoginInfo from 'src/app/domain/entity/AuthUser/structure/LoginInfo';
import AuthUserRepository from 'src/app/infrastructure/repositories/AuthUser/AuthUserRepository';

export default class LoginPresenter {

    private _repository: AuthUserRepository = new AuthUserRepository();
    private _useCaseAuthUser: LoginUseCase = new LoginUseCase(this._repository);
  
    async submitFormLogin(loginInfo: LoginInfo): Promise<any> {
      return this._useCaseAuthUser.login(loginInfo);
    }

  }