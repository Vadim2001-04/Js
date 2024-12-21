export function play(players) {
  if (!players || players.length === 0) {
      throw new Error("The players array must be provided and contain at least one player.");
  }

  let current = 0;
  let currentPlayers = [...players];

  while (currentPlayers.length > 1) {
    const currentPlayer = currentPlayers[current];

    try {
      currentPlayer.turn(currentPlayers);
    } catch (error) {
      console.error(`Error during player ${currentPlayer.name || 'unknown'}'s turn:`, error);
      // Optionally handle the error more gracefully, e.g., remove the player or skip their turn.
    }

    currentPlayers = currentPlayers.filter((player) => !player.isDead());

      // Re-evaluate 'current' index after players are removed
      if (current >= currentPlayers.length) {
          current = 0;
      } else if (currentPlayers[current] !== currentPlayer) {
          // If the current player is no longer in the list at the current index, we don't advance the index
          // this is when a player before us has been removed
          current = current;
      } else {
          current++; //Move to the next player
      }

      if (current === currentPlayers.length) {
        current = 0; // Loop around to the first player
      }
  }

    if (currentPlayers.length === 1) {
        return currentPlayers[0];
    } else {
        return null; //If there's somehow no player left, return null
    }
}