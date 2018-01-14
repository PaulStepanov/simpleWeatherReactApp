export default class Wind {
  constructor(speed, direction) {

    this._speed = speed;
    this._direction = direction;
  }


  get speed() {
    return this._speed;
  }

  set speed(value) {
    this._speed = value;
  }

  get direction() {
    return this._direction;
  }

  set direction(value) {
    this._direction = value;
  }
}
