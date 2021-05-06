
export class User {
  constructor(
    public username:string,
    public password:string
  ) {}
}

export class Sms {
  constructor(
  public source:string,
  public destination:string,
  public message:string,
  public reference:string,
  ) {}
}

export class BroadcastData {
  constructor(
  public source:string,
  public message:string,
  public msisdns:string[],
  ) {}
}
export class Email {
  constructor(
  public email:string,
  public subject:string,
  public recipients:string[],
  ) {}
}
