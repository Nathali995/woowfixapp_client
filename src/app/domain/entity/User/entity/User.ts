export default class User {

    private _id: string
    private _identificationType: string
    private _identification: string
    private _name: string
    private _lastname: string
    private _email: string
    private _phone: string
    private _cellphone: string
    private _birthday: string
    private _token: string
    private _fullName: string
    private _gender: string
    private _address: string
  
    constructor() {
      this._id = ''
      this._identificationType = ''
      this._identification = ''
      this._name = ''
      this._lastname = ''
      this._email = ''
      this._phone = ''
      this._cellphone = ''
      this._birthday = ''
      this._token = ''
      this._fullName = ''
      this._gender = ''
      this._address = ''
    }
  
    set id(id: string) {
      this._id = id
    }
  
    get id(): string {
      return this._id
    }
  
    set identificationType(identificationType: string) {
      this._identificationType = identificationType
    }
  
    get identificationType(): string {
      return this._identificationType
    }
  
    set identification(identification: string) {
      this._identification = identification
    }
  
    get identification(): string {
      return this._identification
    }
  
    set name(name: string) {
      this._name = name
    }
  
    get name(): string {
      return this._name
    }
  
    set lastname(lastname: string) {
      this._lastname = lastname
    }
  
    get lastname(): string {
      return this._lastname
    }
  
    set email(email: string) {
      this._email = email
    }
  
    get email(): string {
      return this._email
    }
  
    set phone(phone: string) {
      this._phone = phone
    }
  
    get phone(): string {
      return this._phone
    }
  
    set cellphone(cellphone: string) {
      this._cellphone = cellphone
    }
  
    get cellphone(): string {
      return this._cellphone
    }
  
    set birthday(birthday: string) {
      this._birthday = birthday
    }
  
    get birthday(): string {
      return this._birthday
    }
  
    set token(token: string) {
      this._token = token
    }
  
    get token(): string {
      return this._token
    }
  
    set fullName(fullName: string) {
      this._fullName = fullName
    }
  
    get fullName(): string {
      return this._fullName
    }
  
    get gender(): string {
      return this._gender
    }
  
    set gender(gender: string) {
      this._gender = gender
    }
  
    get address(): string {
      return this._address
    }
  
    set address(gender: string) {
      this._address = gender
    }
  
  }
  