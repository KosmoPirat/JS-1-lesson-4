'use strict';

let game = {

    run() {
        console.log('Игра началась!');
        while(true) {
            let direction = prompt('Введите направление (\n1: left + down\n2: down\n3: right + down\n4: left\n6:' +
                ' right\n7: left + up\n8: up\n9: right + up)');

            if(direction === null) {
                console.log('Игра закончилась');
                return;
            }

            let newPoint = mover.getNextPoint(direction);
            renderer.clear();
            player.move(newPoint);
            renderer.render();
        }
    },

    init() {
        console.log('Для начала игры введите команду game.run()');
        renderer.render();
    }
};

game.init();
