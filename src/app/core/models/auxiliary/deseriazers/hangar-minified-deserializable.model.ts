import { HangarMinified } from '../../hangar/hangar-minified.model';
import { Deserializer } from '../deserializer';

export class HangarMinifiedDeserializable implements Deserializer<HangarMinified> {

  private hangarMinified: HangarMinified;

  constructor() {
    this.hangarMinified = new HangarMinified();
  }

  deserialize(obj: any): HangarMinified {

    const {
      id,
      name,
    } = obj;

    this.hangarMinified.id = id;
    this.hangarMinified.name = name;

    return this.hangarMinified;

  }

}
