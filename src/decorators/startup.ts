export const startupDecorator = () => {
  console.log('startupDecorator');
};

export class People {
  private _height: number;
  private _weight: number;

  get height() {
    return this._height;
  }

  set height(h: number) {
    this._height = h;
  }

  get weight() {
    return this._weight;
  }

  set weight(h: number) {
    this._weight = h;
  }

  constructor(h: number, w: number) {
    this._height = h;
    this._weight = w;
  }

  work() {
    console.log('people work!');
  }

  sayHeight() {
    console.log('People say height: ' + this.height);
  }

  sayWeight() {
    console.log('People say weight: ' + this.weight);
  }
}
