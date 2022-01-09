import orderByProps from '../app.js';

let obj = {
    name: '������',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
};

test('Character Sorting function ', () => {
    let objEqual = {
        name: '������',
        level: 2,
        attack: 80,
        defence: 40,
        health: 10,
    };
    expect(orderByProps(obj, ['name', 'level'])).toEqual(objEqual);
});