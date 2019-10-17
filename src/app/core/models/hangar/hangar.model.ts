import { HangarMinified } from './hangar-minified.model';
import { Deserializable } from '../auxiliary/deserializer';

export class Hangar extends HangarMinified implements Deserializable {

  public location: string;
  public email: string;
  public owner: string;
  public phone: string;

  deserialize(obj: any): this {

    const { id, name, location, email, owner, phone } = obj;

    super.id = id;
    super.name = name;

    this.location = location;
    this.email = email;
    this.owner = owner;
    this.phone = phone;

    return this;

  }

}
