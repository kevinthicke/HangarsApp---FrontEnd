import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';
import { HangarMinified } from '../../hangar/hangar-minified.model';
import { Hangar } from '../../hangar/hangar.model';
import { Deserializable } from '../deseriazers/deserializable.model';

@Injectable({
  providedIn: 'root'
})
export class HangarAdapter implements Adapter<HangarMinified, Hangar>, Deserializable<Hangar> {

  deserialize(obj: any): Hangar {
    const { id, name, location, email, owner, phone } = obj;

    let hangar = new Hangar()
    hangar.id = id;
    hangar.name = name;
    hangar.location = location;
    hangar.email = email;
    hangar.owner = owner;
    hangar.phone = phone;

    return hangar;
  }

  adapt(obj: HangarMinified): Hangar {
    const { id, name } = obj;

    let hangar = new Hangar()
    hangar.id = id;
    hangar.name = name;

    return hangar;

  }
}
