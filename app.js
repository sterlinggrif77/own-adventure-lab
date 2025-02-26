const prompt = require('prompt-sync')();

console.log(`\nWelcome to the Resident Evil Adventure!\n`);
const username = prompt('What is your name? ');
console.log(`\nHello, ${username}. You find yourself standing in front of an old, abandoned mansion. The door creaks open...`);

console.log("\nYou step inside and the door slams shut behind you. The air is cold, and you hear whispers echoing in the darkness.");
console.log("Do you:");
console.log("1. Explore the living room");
console.log("2. Head upstairs");
console.log("3. Try to open the front door and escape");

let choice = prompt("Enter your choice (1/2/3): ");

if (choice === "1") {
    console.log("\nYou enter the living room. The fireplace is lit, but no one is there. A strange book lies open on the table.");
    console.log("Do you:");
    console.log("1. Read the book");
    console.log("2. Check behind the curtains");
    
    choice = prompt("Enter your choice (1/2): ");
    
    if (choice === "1") {
        console.log("\nThe book whispers incantations. The walls start bleeding. You try to run, but an unseen force drags you into the abyss. GAME OVER.");
    } else if (choice === "2") {
        console.log("\nYou find a hidden passage behind the curtains! You step inside...");
        console.log("\nThe passage leads to a hidden chamber with strange symbols on the walls. There's an old wooden chest in the center.");
        console.log("Do you:");
        console.log("1. Open the chest");
        console.log("2. Leave the room immediately");
        
        choice = prompt("Enter your choice (1/2): ");
        
        if (choice === "1") {
            console.log("\nYou open the chest and find an ancient key. Suddenly, the walls start shaking! You rush back and use the key to unlock the front door. YOU WIN.");
        } else if (choice === "2") {
            console.log("\nAs you turn to leave, the floor crumbles beneath you. You fall into darkness. GAME OVER.");
        } else {
            console.log("\nThe chamber's energy overwhelms you. You collapse. GAME OVER.");
        }
    } else {
        console.log("\nIndecision is deadly. The house claims you. GAME OVER.");
    }
} else if (choice === "2") {
    console.log("\nYou climb the stairs. A cold wind blows. There's a locked door at the end of the hall and an open room to your right.");
    console.log("Do you:");
    console.log("1. Try to open the locked door");
    console.log("2. Enter the open room");
    
    choice = prompt("Enter your choice (1/2): ");
    
    if (choice === "1") {
        console.log("\nThe door creaks open. Inside, a figure stands in the shadows. You blink, and suddenly it is right in front of you. GAME OVER.");
    } else if (choice === "2") {
        console.log("\nThe open room contains an old mirror. As you gaze into it, you see yourself... but your reflection moves on its own. It smiles and steps out. You take its place. GAME OVER.");
    } else {
        console.log("\nA hand reaches from the darkness and pulls you in. GAME OVER.");
    }
} else if (choice === "3") {
    console.log("\nYou try to open the front door, but it's locked. You hear footsteps approaching behind you.");
    console.log("Do you:");
    console.log("1. Turn around and face whatever is coming");
    console.log("2. Keep trying to open the door");
    
    choice = prompt("Enter your choice (1/2): ");
    
    if (choice === "1") {
        console.log("\nA shadowy figure lunges at you. The last thing you hear is your own scream. GAME OVER.");
    } else if (choice === "2") {
        console.log("\nThe door finally opens! You run outside, gasping for air. You have escaped... for now. YOU WIN.");
    } else {
        console.log("\nFrozen in fear, you are consumed by the darkness. GAME OVER.");
    }
} else {
    console.log("Invalid choice. The shadows consume you. GAME OVER.");
}

