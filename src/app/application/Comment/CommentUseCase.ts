import Comment from "../../domain/entity/Comment/entity/Comment";
import CommentInfo from '../../domain/entity/Comment/structure/CommentInfo';
import ICommentRepository from "../../domain/repository/Comment/ICommentRepository";

export default class CommentUseCase {

  private _repository: ICommentRepository;

  constructor(repository: ICommentRepository) {
    this._repository = repository;
  }

  async create(commentInfo: CommentInfo): Promise<Comment | any> {
    return this._repository.create(commentInfo);
  }
  
}
