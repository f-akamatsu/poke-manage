export abstract class ValueObject<T> {
  protected constructor(readonly value: T) {
    this.validate(value);
  }

  protected abstract validate(value: T): void;
}
