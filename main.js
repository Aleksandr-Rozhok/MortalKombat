const Scorpion = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Kunai', 'Foot', 'Fist'],
    attack: function () {
        console.log(`${Scorpion.name}${' Fight...'}`);
    }
}

const SubZero = {
    name: 'SubZero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Kunai', 'Foot', 'Fist'],
    attack: function () {
        console.log(`${SubZero.name}${' Fight...'}`);
    }
}

const createPlayer = (player, obj) => {
    const $player = document.createElement('div');
    $player.classList.add(player);

    const $progressBar = document.createElement('div');
    $progressBar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character')

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.textContent = obj.hp;
    $life.style.width = 100 + '%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.textContent = obj.name;

    const $img = document.createElement('img');
    $img.src = obj.img;

    const $arena = document.querySelector('.arenas');

    $arena.appendChild($player);
    $player.appendChild($progressBar);
    $player.appendChild($character);
    $progressBar.appendChild($life);
    $progressBar.appendChild($name);
    $character.appendChild($img);

}

createPlayer('player1', Scorpion);
createPlayer('player2', SubZero);