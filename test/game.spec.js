const assert = require('chai').assert;
const Game = require('../src/game');

describe('Game', function () {
    // it.skip('a chaque frame je sauvgarde ' +
    //     'le nombre de boule lancé et ' +
    //     'le nombre de quille tombé', function () {
    //     // let partie = new Game();
    //     // partie.roll(10);
    //     // assert.equals(1, partie.pinsByframe[0]);
    //     // assert.equals(1, partie.shots[0])
    // });
    it('10 strikes doit remplir le tableau pinsByframe', function () {
        let partie = new Game();
        for (let i = 0; i < 10; i++) {
            partie.roll(10);
        }
        assert.equal(partie.pinsByframe.length, 10);
    });
    it('20 spares doit remplir le tableau pinsByframe', function () {
        let partie = new Game();
        for (let i = 0; i < 20; i++) {
            if (i % 2 === 0) {
                partie.roll(10);
                assert.equal(partie.currentShot ,2);
                console.log(i)
            }
        }
        assert.equal(partie.pinsByframe.length, 20);
    })
});