ModAPI.require("player"); //We need to add vertical velocity
var gamemode = 1
window.addEventListener("keydown", (event) => { //When a key is pressed
  if (event.key.toLowerCase() === "k") { //If the key is k
    ModAPI.player.sendChatMessage({message:"/gamemode "+gamemode})
    gamemode = gamemode -1;
  }
});
window.addEventListener("keydown", (event) => { //When a key is pressed
  if (event.key.toLowerCase() === "l") { //If the key is l
    ModAPI.player.sendChatMessage({message:"/gamemode "+gamemode})
    gamemode = gamemode +1;
  }
});
  ModAPI.player.reload(); //Push changes
});
