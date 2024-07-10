import Comment from '../../../domain/entity/Comment/entity/Comment';
import CommentInfo from '../../../domain/entity/Comment/structure/CommentInfo';
import ICommentRepository from '../../../domain/repository/Comment/ICommentRepository';
import { API_URL} from '../../config/constants';
import { HttpImpl, Data} from '../../http';

export default class CommentRepository implements ICommentRepository {

  async create(commentInfo: CommentInfo): Promise<Comment | any> {
    const {rating, comment} = commentInfo;
    return new Promise(async (resolve, reject) => {
      const requestOptions: Data = {
        url: API_URL + 'comment/create',
        body: {
          rating: rating,
          comment: comment,
        }
      };
      try {
        //const response = await HttpImpl.post(requestOptions.url, requestOptions.body);
        //resolve(response);
        resolve({data: 200})
        return;
      } catch (error: any) {
        const {response} = error;
        if (response.status === 401) {
          reject({
            statusCode: response.status,
            msg: 'Ocurrió un error',
            errorType: 'transactional',
          });
          return;
        }
        reject(error);
      }
    });
  }

}
