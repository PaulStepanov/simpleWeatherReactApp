export default class Rain {
  /**
   *
   * @param previousDuration :number; for what duration rain was
   * @param volume:number
   */
  constructor(previousDuration, volume){
    this._previousDuration = previousDuration;
    this._volume = volume;
  }

  get previousDuration() {
    return this._previousDuration;
  }

  set previousDuration(value) {
    this._previousDuration = value;
  }

  get volume() {
    return this._volume;
  }

  set volume(value) {
    this._volume = value;
  }
}
