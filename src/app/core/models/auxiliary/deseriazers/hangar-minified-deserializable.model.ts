import { Deserializable } from './deserializable.model';
import { HangarMinified } from '../../hangar/hangar-minified.model';

export class HangarMinifiedDeserializable implements Deserializable<HangarMinified> {
  
  private hangarMinified: HangarMinified;
  
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