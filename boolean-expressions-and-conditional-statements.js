/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
let hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("\nYour adventure continues...\nYou safely navigate into the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("\nYou find your way to the village.\n");
} else {
  console.log("You get lost and wander aimlessly.") + process.exit(1);
}
if (choice === "village" && hasTorch) {
  console.log("In the village, you find a friendly shopkeeper who gives you a map. The shopkeeper asks,\n \"I need a brave hero to slay the local dragon, will you accept?\"\n");
  let hasMap = true;
  const acceptQuest = readline.question("Type 'yes' to accept the quest or 'no' to decline: ");
  if (acceptQuest === "yes") {
    console.log("You embark on a quest to slay the dragon and save the village!") + process.exit(1);
  } else {
    console.log("\nYou decide to stay in the village and live a peaceful life.") + process.exit(1);
  }
}
if (choice === "mountains" && hasTorch) {
  console.log("\nThere, you find a hidden cave.\n As you adventure inside, you discover a legendary sword that can grant you immense power.");
}
const takeSword = readline.question("Do you take the sword? (yes/no): ");
if (takeSword === "yes") {
  console.log("You take the sword and feel a surge of power coursing through your veins.");
} else if (takeSword === "no") {
  console.log("You decide to leave the sword and continue exploring the cave.");
} else {
  process.exit(1);
}
const continueIntoCave = readline.question("\nContinue further into the cave? (yes/no): ");
if (continueIntoCave === "no") {
console.log("You decide to leave the cave and return to the village.") + process.exit(1); 
}
 else if (continueIntoCave === "yes") 
  console.log("\nYou venture deeper into the cave and encounter a fierce dragon guarding a treasure chest.");
  const fightDragon = readline.question("Do you fight the dragon? (yes/no): ");
if (fightDragon === "yes"&& takeSword === "yes") {
  console.log("You bravely fight the dragon and emerge victorious, claiming the treasure as your reward!");
} else if (fightDragon === "yes" && takeSword === "no") {
  console.log("You run at the dragon with your bare hands, but unfortunately, you are no match for the beast.\n\nYou are eaten by the dragon.");
} else {
  console.log("You decide to avoid the dragon and sneak past it, finding a hidden passage that leads you out of the cave.");
}


/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/