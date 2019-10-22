import { Hangar } from './hangar.model';
import { HangarMinified } from './hangar-minified.model';

export class HangarMinifiedPage {

  public content: Array<HangarMinified> = [];
  public numberOfElements: number = 0;
  public totalPages: number = 0;

  deserialize(obj: any): this {

    const { content, numberOfElements, totalPages } = obj;

    if (Array.isArray(content)) {
      this.content = content.map(o => new HangarMinified().deserialize(o));
    }

    this.numberOfElements = numberOfElements;
    this.totalPages = totalPages;

    return this;
  }


}
