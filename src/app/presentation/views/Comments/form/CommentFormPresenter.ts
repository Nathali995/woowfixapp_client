import CommentUseCase from 'src/app/application/Comment/CommentUseCase';
import CommentInfo from 'src/app/domain/entity/Comment/structure/CommentInfo';
import CommentRepository from 'src/app/infrastructure/repositories/Comment/CommentRepository';

export default class CommentFormPresenter {

    private _repository: CommentRepository = new CommentRepository();
    private _useCaseComment: CommentUseCase = new CommentUseCase(this._repository);
  
    async submitCommentForm(commentInfo: CommentInfo): Promise<any> {
      return this._useCaseComment.create(commentInfo);
    }

  }