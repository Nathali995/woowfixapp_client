import AuthUser from '../../../domain/entity/AuthUser/entity/AuthUser';
import LoginInfo from '../../../domain/entity/AuthUser/structure/LoginInfo';
import IAuthUserRepository from '../../../domain/repository/AuthUser/IAuthUserRepository';
import { API_URL, CLIENT_ID, CLIENT_SECRET, GRANT_TYPE } from '../../config/constants';
import { HttpImpl, Data} from '../../http';

export default class AuthUserRepository implements IAuthUserRepository {

  async login(loginInfo: LoginInfo): Promise<AuthUser | any> {
    const {email, password} = loginInfo;
    return new Promise(async (resolve, reject) => {
      const requestOptions: Data = {
        url: API_URL + 'auth/realms/woofix-realm/protocol/openid-connect/token',
        body: {
          grant_type: GRANT_TYPE,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          
          username: email,
          password: password,
        }
      };
      try {
        const response = await HttpImpl.post(requestOptions.url, requestOptions.body);
        resolve(response);
        return;
      } catch (error: any) {
        const {response} = error;
        if (response.status === 401) {
          reject({
            statusCode: response.status,
            msg: 'Credenciales incorrectas',
            errorType: 'onboarding',
          });
          return;
        }
        reject(error);
      }
    });
  }

}
