import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';
import { HangarMinified } from '../../hangar/hangar-minified.model';
import { Hangar } from '../../hangar/hangar.model';
import { Deserializer } from '../deserializer';
import { HangarDto } from '../dto/hangar-dto.model';

@Injectable({
  providedIn: 'root'
})
export class HangarAdapter implements Adapter<Hangar, HangarDto>, Deserializer<Hangar> {

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

  adapt(obj: Hangar): HangarDto {

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
}
