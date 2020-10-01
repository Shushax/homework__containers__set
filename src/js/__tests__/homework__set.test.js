import Team from '../homework__set';
import { Character } from '../homework__set';
test('create team', () => {
    let team = new Team();
    const received = new Team();
    const expected = team;

    expect(received).toEqual(expected);
});

test('add hero', () => {
    let team = new Team();
    let hero = new Character();
    const received = team.add(hero);
    let myTeam = {};
    myTeam.members = new Set();
    myTeam.members.add(hero);
    const expected = myTeam;
    expect(received).toEqual(expected);
});

test('add hero with error', () => {
    let team = new Team();
    let hero = new Character();
    team.add(hero);

    expect(() => {
        team.add(hero);
    }).toThrow();
});

test('addAll', () => {
    let archer = new Character();
    let warrior = new Character();
    let heal = new Character();
    let damageDealer = new Character();
    let team = new Team();
    const received = team.addAll(archer, warrior, heal, damageDealer);

    let myTeam = {};
    myTeam.members = new Set();
    myTeam.members.add(archer);
    myTeam.members.add(warrior);
    myTeam.members.add(heal);
    myTeam.members.add(damageDealer);
    const expected = myTeam;
    expect(received).toEqual(expected);
});

test('toArray', () => {
    let archer = new Character();
    let warrior = new Character();
    let heal = new Character();
    let damageDealer = new Character();
    let team = new Team();
    team.addAll(archer, warrior, heal, damageDealer);
    const received = team.toArray();
    const expected = [archer, warrior, heal, damageDealer];
    expect(received).toEqual(expected);


})

