import { Deserializable } from '../auxiliary/deserializable.model';

export class User implements Deserializable {

  public username: string;
  public password: string;
  public token?: string;

  constructor(username?: string, password?: string, token?: string) {
    this.username = username;
    this.password = password;
    this.token = token;
  }

  deserialize(obj: any): this {

    const { username, password, token } = obj;

    this.username = username;
    this.password = password;
    this.token = token;

    return this;
    
  }

}