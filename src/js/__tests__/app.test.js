import orderByProps from '../app.js';

let obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
};

test('Character Sorting function ', () => {
    let objEqual = {
        name: 'мечник',
        level: 2,
        attack: 80,
        defence: 40,
        health: 10,
    };
    expect(orderByProps(obj, ['name', 'level'])).toEqual(objEqual);
});