import User from '../../User/entity/User';

export default class AuthUser {

  private _userId: string;
  private _token: string;
  private _user: User;
  private _lastlogin: string;
  private _registered: boolean;
  private _first_name: string;
  private _username: string;

  constructor() {
    this._userId = '';
    this._token = '';
    this._user = new User();
    this._lastlogin = '';
    this._registered = false;
    this._first_name = '';
    this._username = '';
  }

  set userId(userId: string) {
    this._userId = userId;
  }

  get userId(): string {
    return this._userId;
  }

  set user(user: User) {
    this._user = user;
  }

  get user(): User {
    return this._user;
  }

  set token(token: string) {
    this._token = token;
  }

  get token(): string {
    return this._token;
  }

  set lastLogin(lastLogin: string) {
    this._lastlogin = lastLogin;
  }

  get lastLogin(): string {
    return this._lastlogin;
  }

  set registered(registered: boolean) {
    this._registered = registered;
  }

  get registered(): boolean {
    return this._registered;
  }

  set first_name(first_name: string) {
    this._first_name = first_name;
  }

  get first_name(): string {
    return this._first_name;
  }

  set username(username: string) {
    this._username = username;
  }

  get username(): string {
    return this._username;
  }
}
