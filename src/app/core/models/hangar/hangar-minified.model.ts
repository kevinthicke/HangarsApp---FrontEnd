
export class HangarMinified  {

  public id: number;
  public name: string;

  deserialize(obj: any): this {
    const { id, name } = obj;

    this.id = id;
    this.name = name;

    return this;
  }

}
