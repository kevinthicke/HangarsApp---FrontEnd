export interface Deserializer<T> {
  deserialize(obj: any): T;
}

