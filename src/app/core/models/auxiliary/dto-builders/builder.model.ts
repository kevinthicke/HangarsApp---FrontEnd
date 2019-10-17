export interface Builder<T, K> {
  build(obj: T): K;
}