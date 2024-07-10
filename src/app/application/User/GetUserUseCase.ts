import User from "src/app/domain/entity/User/entity/User";
import IUserRepository from "src/app/domain/repository/User/IUserRepository";

export default class GetUserUseCase {

  private _repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this._repository = repository;
  }

  async getUser(accessToken: string): Promise<User> {
    return await this._repository.getUser(accessToken);
  }
  
}
