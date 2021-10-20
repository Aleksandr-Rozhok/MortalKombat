const $arena = document.querySelector('.arenas');
const $btn = document.querySelector('.button');
const $chat = document.querySelector('.chat');

const Scorpion = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Kunai', 'Foot', 'Fist'],
    attack: function () {
        console.log(`${Scorpion.name}${' Fight...'}`);
    }
}

const SubZero = {
    player: 2,
    name: 'SubZero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Kunai', 'Foot', 'Fist'],
    attack: function () {
        console.log(`${SubZero.name}${' Fight...'}`);
    }
}

const createElement = (tag, className) => {
    let $tag = document.createElement(tag);

    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}

const changeHP = (obj) => {



    const randomizer = () => {
        let $playerLife = obj.hp;
        const $playerLifeIndicator = document.querySelector('.player' + obj.player + ' .life');
        console.log($playerLifeIndicator);
        console.log($playerLife);
        min = 1;
        max = 20;
        let result = 0;
        result = Math.floor(Math.random() * (max - min) + min);
        $playerLifeIndicator.style.width = $playerLife + '%';
        if ($playerLife <= 0) {
            $playerLifeIndicator.style.width = 0 + '%';
            $btn.disabled = true;
            $btn.style.display = 'none';
            const $winnerTitle = createElement('div', 'winnerTitle');
            $chat.appendChild($winnerTitle);
            if (SubZero.hp <= 0) {
                $winnerTitle.innerHTML = 'Scorpion Win';
            } else {
                $winnerTitle.innerHTML = 'SubZero Win';
            }
        }
        return (obj.hp = obj.hp - result);
    }

    $btn.addEventListener('click', randomizer)
}

const createPlayer = (obj) => {
    const $player = createElement('div', 'player' + obj.player);
    const $progressBar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    $life.style.width = obj.hp + '%';

    const $name = createElement('div', 'name');
    $name.textContent = obj.name;

    const $img = createElement('img');
    $img.src = obj.img;

    $player.appendChild($progressBar);
    $player.appendChild($character);
    $progressBar.appendChild($life);
    $progressBar.appendChild($name);
    $character.appendChild($img);

    return $player;
}

$arena.appendChild(createPlayer(Scorpion));
$arena.appendChild(createPlayer(SubZero));

changeHP(SubZero);
changeHP(Scorpion);