class Game {

    constructor() {
        this._pinsByFrame;
        this._shots;
        this._currentFrame;
        this._currentShot;
    }


    get currentShot() {
        return this._currentShot;
    }

    set currentShot(value) {
        this._currentShot = value;
    }

    get currentFrame() {
        return this._currentFrame;
    }

    set currentFrame(value) {
        this._currentFrame = value;
    }

    get shots() {
        return this._shots;
    }

    set shots(value) {
        this._shots = value;
    }

    get pinsByframe() {
        return this._pinsByFrame;
    }

    set pinsByframe(value) {
        this._pinsByFrame = value;
    }



    startNewGame() {
        this.shots = [];
        this.pinsByframe = [];
        this.shots[0] = 0;
        this.pinsByframe[0] = 0;
        this.currentShot = 0;
        this.currentFrame = 0;
    }

    roll(int) {
        if (this.shots === undefined &&
            this.pinsByframe === undefined &&
            this.currentShot === undefined &&
            this.currentFrame === undefined) {
            this.startNewGame();
        }
        if (this.pinsByframe.length >= 10) {
            throw "The game is already finished!";
        }
        this.currentShot = this.currentShot + 1;
        this.pinsByframe[this.currentFrame] = 10;
        this.currentFrame = this.currentFrame + 1;
    //                partie.currentShot = partie.currentShot + 2;
    }

    score() {
    }

}

module.exports = Game;