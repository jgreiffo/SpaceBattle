class Game {
	constructor() {
	  this.humanShip = this.createHumanShip("USS Assembly");
	  this.alienFleet = this.createAlienFleet(6); // Create a fleet of 6 alien ships with unique stats
	}
  
	// Method to create the human ship
	createHumanShip(name) {
	  return {
		name: name,
		hull: 20,
		firepower: 5,
		accuracy: 0.7,
		attackTarget: (target) => {
		  console.log(`${this.humanShip.name} is attacking ${target.name}!`);
  
		  if (Math.random() < this.humanShip.accuracy) {
			console.log(`Direct hit! ${target.name} takes ${this.humanShip.firepower} damage.`);
			target.hull -= this.humanShip.firepower;
  
			if (target.hull <= 0) {
			  console.log(`${target.name} has been destroyed!`);
			} else {
			  console.log(`${target.name}'s remaining hull: ${target.hull}`);
			}
		  } else {
			console.log(`${this.humanShip.name} missed the attack!`);
		  }
		},
	  };
	}
  
	// Method to create alien ships
	createAlienFleet(count) {
	  const fleet = [];
	  for (let i = 1; i <= count; i++) {
		const alienShip = {
		  name: `Alien Ship ${i}`,
		  hull: Math.floor(Math.random() * 4) + 3, // Hull between 3 and 6
		  firepower: Math.floor(Math.random() * 3) + 2, // Firepower between 2 and 4
		  accuracy: Math.random() * 0.2 + 0.6, // Accuracy between 0.6 and 0.8
		  attackTarget: (target) => {
			console.log(`${this.name} is attacking ${target.name}!`);
  
			if (Math.random() < this.accuracy) {
			  console.log(`Direct hit! ${target.name} takes ${this.firepower} damage.`);
			  target.hull -= this.firepower;
  
			  if (target.hull <= 0) {
				console.log(`${target.name} has been destroyed!`);
			  } else {
				console.log(`${target.name}'s remaining hull: ${target.hull}`);
			  }
			} else {
			  console.log(`${this.name} missed the attack!`);
			}
		  },
		};
		fleet.push(alienShip);
	  }
	  return fleet;
	}
  
	// Method to check if there is a winner
	checkWin() {
	  if (this.humanShip.hull <= 0) {
		console.log(`${this.humanShip.name} went destroyed! The aliens have won!`);
		return true;
	  }
	  const remainingAliens = this.alienFleet.filter(alien => alien.hull > 0);
	  if (remainingAliens.length === 0) {
		console.log(`All alien ships went annihilaaa-ted! ${this.humanShip.name} has won!`);
		return true;
	  }
	  return false;
	}
  
	// Method to start the battle
	start() {
	  console.log("Welcome to the Space Battle Game!");
	  console.log("\nYour ship:", this.humanShip);
	  console.log("Alien Fleet:");
	  this.alienFleet.forEach(alienShip => console.log(alienShip));
  
	  console.log("\nThe battle begins!");
  
	  // Loop all alien ships in the fleet
	  for (let i = 0; i < this.alienFleet.length; i++) {
		const currentAlien = this.alienFleet[i];
		console.log(`\nFighting ${currentAlien.name}...`);
		this.battle(currentAlien);
  
		if (this.checkWin()) {
		  break; // Stop the game if either the human ship or all aliens are defeated
		}
	  }
	}
  
	// Method -> battle between the human ship and an alien ship
	battle(alienShip) {
	  // Repeat until the human ship or the alien ships hull reaches 0 
	  while (this.humanShip.hull > 0 && alienShip.hull > 0) {
		// Human ship attacks
		this.humanShip.attackTarget(alienShip);
		if (alienShip.hull <= 0) break;
  
		// Alien ship contra-ataca
		alienShip.attackTarget(this.humanShip);
		if (this.humanShip.hull <= 0) break;
  
		// Console log at the end of the round
		console.log("\n-- End of Round Status --");
		console.log(`${this.humanShip.name} - Hull: ${this.humanShip.hull}`);
		console.log(`${alienShip.name} - Hull: ${alienShip.hull}`);
	  }
	}
  }
  document.getElementById('attack-btn').addEventListener('click', () => {
	game.humanAttack();
  });
  
  document.getElementById('retreat-btn').addEventListener('click', () => {
	console.log('Retreating from battle!');
	alert('Game Over! You retreated.');
  });
  
  
  // Instantiate and start the game
  const spaceBattleGame = new Game();
  spaceBattleGame.start();
  

  //   // Instantiate USS Assembly and a single Alien Ship
// const humanShip = new HumanShip("USS Assembly");
// const alienShip = new AlienShip(1);

// // Display initial stats
// console.log("\nHuman Ship Stats:", humanShip);
// console.log("Alien Ship Stats:", alienShip);

// // Call the attackTarget method and pass the alien ship
// humanShip.attackTarget(alienShip);

// // Display updated stats
// console.log("\nUpdated Stats After Attack:");
// console.log("Human Ship Stats:", humanShip);
// console.log("Alien Ship Stats:", alienShip);


// Instance USS Assembly and a *single* Alien Ship
// const humanShip = new HumanShip("USS Assembly");
// const alienShip = new AlienShip(1);

// // Display initial stats
// console.log("\nHuman Ship Stats:", humanShip);
// console.log("Alien Ship Stats:", alienShip);

// // Attack the target
// humanShip.attackTarget(alienShip);



//   // instances
//   const humanShip = new HumanShip("USS Assembly");
//   const alienFleet = createAlienFleet(6);
  
//   console.log("\nHuman Ship:", humanShip);
//   console.log("\nAlien Fleet:");
//   alienFleet.forEach((ship) => console.log(ship));



// // les's begin!
// // REMEMBER BIND YOUR METHODS IF YOU PLAN TO USE THEM AS EVENT Listeners !!!!!!!
// class Example {
// 	constructor(name){
// 		this.name = name
// 		this.method = this.method.bind(this)
// 	}

// 	methodFromExample(){
// 	 return this.name
// 	}
// }

// const btnEl = document.querySelector('button')

// btnEl.addEventListener('click', methodFromExample)

// // Example use of accuracy to determine a hit:
// if (Math.random() < alien[0].accuracy) {
// 	console.log('You have been hit!');
// }



// // Formula, use %c in the first argument to console log, and provide CSS to the second argument:

// console.log('%c spacebattle', 'font-size: 40px');

// // Use multiple CSS properties:

// console.log('%c You have done ' + player.firepower + ' damage ', 'font-style: italic; background: azure; border: 1px solid grey;');