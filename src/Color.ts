export default class Color {
  private _r: number;
  private _g: number;
  private _b: number;
  private _a: number;
  private _cssString: string | undefined;

  constructor(r = 255, g = 255, b = 255, a = 1) {
    this._r = r;
    this._g = g;
    this._b = b;
    this._a = a;

    this.makeCssString();
  }

  get r() {
    return this._r;
  }
  set r(value: number) {
    this._r = value;
    this.makeCssString();
  }
  get g() {
    return this._g;
  }
  set g(value: number) {
    this._g = value;
    this.makeCssString();
  }
  get b() {
    return this._b;
  }
  set b(value: number) {
    this._b = value;
    this.makeCssString();
  }
  get a() {
    return this._a;
  }
  set a(value: number) {
    this._a = value;
    this.makeCssString();
  }

  private makeCssString() {
    this._cssString = `rgba(${this._r}, ${this._g}, ${this._b}, ${this._a})`;
  }

  toCssString() {
    return this._cssString;
  }

  clone() {
    return new Color(this._r, this._g, this._b, this._a);
  }
}
