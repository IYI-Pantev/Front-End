const _side = new WeakMap();

export class Square {
    constructor(side) {
        _side.set(this, side);
    }

    area() {
        console.log(_side.get(this) * _side.get(this));
    }
}