export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(hero) {
        if (this.members.has(hero)) {
            throw new Error('Персонаж уже добавлен!');
        } else {
            this.members.add(hero);
        }

        return this;
    }

    addAll(...heroes) {
        for (let hero of heroes) {
            this.members.add(hero);
        }

        return this;

    }

    toArray() {
        let array = [];
        for (let hero of this.members) {
            array.push(hero);
        }
        return array;
    }
}

export class Character {
   
}