import Comment from "../../entity/Comment/entity/Comment";
import CommentInfo from "../../entity/Comment/structure/CommentInfo";

export default interface ICommentRepository {

  create(commentInfo: CommentInfo): Promise<Comment | any>;
  
}
