import { Deserializable } from '../auxiliary/deserializer';
import { Hangar } from './hangar.model';

export class PaginableHangar implements Deserializable {

  public content: Array<Hangar>;
  public numberOfElements: number;

  deserialize(obj: any): this {

    const { content, numberOfElements } = obj;

    if (Array.isArray(content)) {
      this.content = content.map(o => new Hangar().deserialize(o));
    }

    this.numberOfElements = numberOfElements;

    return this;
  }


}
