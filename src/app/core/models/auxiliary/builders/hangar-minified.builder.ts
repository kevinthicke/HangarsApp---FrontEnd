import { Hangar } from '../../hangar/hangar.model';

export class HangarBuilder<T> {

  private hangar: Hangar;

  constructor() {
    this.hangar = new Hangar();
  }

  build(obj: T): Hangar {

    Object.keys(this.hangar).forEach((key: string) => {
      this.hangar[key] = obj[key];
    });

    return this.hangar;
  }


}
