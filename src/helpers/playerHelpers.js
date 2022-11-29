export const preparePlayerData = function(playerData) {
  return Object.values(playerData);
}

export const addWinsToPlayers = function(player, match) {
  return player.map(player => {
    const currentWin = match.reduce((accumulator, matches) => {
      if (matches.winner === player.gamerTag) {
        return accumulator += 1;
      } else {
        return accumulator;
      }
    }, 0);
    player.wins = currentWin;
    return player
  })
}
