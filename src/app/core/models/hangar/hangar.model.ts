import { HangarMinified } from './hangar-minified.model';

export class Hangar extends HangarMinified {

  constructor(
    public location?: string,
    public email?: string,
    public owner?: string,
    public phone?: string
  ){
    super();
  }

}
