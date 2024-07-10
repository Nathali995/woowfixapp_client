export default class Comment {

  private _id: string;
  private _rating: number;
  private _comment: string;

  constructor() {
    this._id = '';
    this._rating = 0;
    this._comment = '';
  }

  set id(id: string) {
    this._id = id;
  }

  get id(): string {
    return this._id;
  }

  set rating(rating: number) {
    this._rating = rating;
  }

  get rating(): number {
    return this._rating;
  }

  set comment(comment: string) {
    this._comment = comment;
  }

  get comment(): string {
    return this._comment;
  }

}
