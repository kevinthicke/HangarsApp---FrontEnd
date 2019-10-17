export interface Adapter<T, K> {
  adapt(obj: T): K;
}
