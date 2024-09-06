export class SubImageEvent {
  constructor(
    public readonly id: number,
    public readonly url: string
  ) {}

  toString() {
    return JSON.stringify({
      id: this.id,
      url: this.url
    });
  }
}
