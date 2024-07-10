import User from 'src/app/domain/entity/User/entity/User';

export default interface IUserRepository {

  getUser(accessToken: string): Promise<User>;
  
}
