export default class User {
  constructor(
    private id: string,
    private firstname: string,
    private lastname: string,
    private nickname: string,
    private email: string,
    private password: string,
    // new Date('1999, 1, 30').toISOString().slice(0, 19).replace('T', ' ');
    private birthday: number,
    private picture?: string,
  ) {}

  public getId():string {
    return this.id;
  }

  public setId(id: string){
    this.id = id;
  }

  public getFirstname():string {
    return this.firstname;
  }

  public setFirstname(firstname: string){
    this.firstname = firstname;
  }

  public getLastname():string {
    return this.lastname;
  }

  public setLastname(lastname: string){
    this.lastname = lastname
  }

  public getNickname():string {
    return this.nickname
  }

  public setNickname(nickname: string){
    this.nickname = nickname
  }

  public getEmail():string {
    return this.email
  }

  public setEmail(email: string){
    this.email = email
  }

  public getPassword():string {
    return this.password
  }

  public setPassword(password: string){
    this.password = password
  }

  public getBirthday():number {
    return this.birthday
  }

  public setBirthday(birthday: number){
    this.birthday = birthday
  }

  public getPicture():string | undefined {
    return this.picture
  }

  public setPicture(picture: string){
    this.picture = picture
  }
}
