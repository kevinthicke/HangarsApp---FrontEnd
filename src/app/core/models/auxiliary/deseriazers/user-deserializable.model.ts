import { Deserializable } from './deserializable.model';
import { User } from '../../authentication/user.model';

export class UserDeserializable implements Deserializable<User> {

  private user: User;

  deserialize(obj: any): User {
    console.log(obj);
    const { username, password, token } = obj;

    this.user.username = username;
    this.user.password = password;
    this.user.token = token;

    return this.user
    
  }
}