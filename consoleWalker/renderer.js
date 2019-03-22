'use strict';
/**
 * Этот объект...
 * @type {{clear(): void, map: string, render(): void}}
 */
let renderer = {
    map: '',

    render() {
        for(let i = 0; i < config.countRows; i++) {
            for(let j = 0; j < config.countCols; j++) {
                if(player.x === j && player.y === i) {
                    this.map += 'o';
                }else this.map += 'x';
            }
            this.map += '\n';
        }
        if(player.x <  0 || player.y < 0 || player.x >= config.countCols || player.y >= config.countRows) {
            console.log('Вы заблудились и забрели в неизведанные земли!!!\nЧто бы вернуться вам нужно пройти' +
                ' в обратном направлении, если вы его запомнили) Удачи!');
        }
        console.log(this.map);
    },

    clear() {
        console.clear();
        this.map = '';
    }
};
