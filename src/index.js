import './css/style.css';
import { play } from './js/game';
import log, { clearLog } from './js/log';
import { Archer } from './js/characters/Archer';
import { Crossbowman } from './js/characters/Crossbowman';
import { Demourge } from './js/characters/Demourge';
import { Dwart } from './js/characters/Dwart';
import { Mage } from './js/characters/Mage';
import { Warrior } from './js/characters/Warrior';

function makePlayers() {
  return [
    new Archer(1, 'Амазонка', log),
    new Crossbowman(8, 'Странник', log),
    new Demourge(5, 'Владыка', log),
    new Dwart(12, 'Палица', log),
    new Mage(3, 'Чародей', log),
    new Warrior(7, 'Гервальт', log)
  ];
}

document.getElementById('clearLog').addEventListener('click', clearLog);

document.getElementById('startBattle').addEventListener('click', () => {
  clearLog();
  const players = makePlayers();
  log('Игроки созданы');
  players.forEach(player => player.logSelf());
  const winner = play(players, log);
  log(`ПОБЕДИЛ: ${winner.shortInfo}`);
});
