class SpaceShip {
	constructor(name, firepower, hull, accuracy) {
	  this.name = name;
	  this.firepower = firepower;
	  this.hull = hull;
	  this.accuracy = accuracy; 
	}
}

// Subclass  HUMAN SHIP
  class HumanShip extends SpaceShip {
	constructor(name) {
	  super(name, 20, 5, 0.7);
	}
	
	attackTarget(target) {
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
	  }
	}
	
  
  // Subclass  ALIEN SHIP
  class AlienShip extends SpaceShip {
	constructor(id) {
	  const hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3; 
	  const firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2; 
	  const accuracy = Math.random() * (0.8 - 0.6) + 0.6; 
	  super(`Alien Ship ${id}`, hull, firepower, accuracy);
	}
}

  class Game {
	constructor() {
	  this.humanShip = new HumanShip("USS Assembly");
	  this.alienFleet = this.createAlienFleet(5);
	  this.currentAlienIndex = 0;
	}
  
	createAlienFleet(count) {
	  const fleet = [];
	  for (let i = 0; i < count; i++) {
		fleet.push(new AlienShip(i + 1));
	  }
	  return fleet;
	}

	checkWin() {
		// Check if Human Ship is destroyed
		if (this.humanShip.hull <= 0) {
		  console.log(`${this.humanShip.name} went destroyed! The aliens have won!`);
		  return true; // Game over
		}
	
		// Check if all alien ships destroyed
		const remainingAliens = this.alienFleet.filter(alien => alien.hull > 0);
		if (remainingAliens.length === 0) {
		  console.log(`All alien ships went annihilated! ${this.humanShip.name} has won!`);
		  return true; // Game over
		}
	
		// No winner yet
		return false;
	  }
  
	start() {
	  console.log("Welcome to the Space Battle Game!");
	  console.log("\nYour ship:", this.humanShip);
	  console.log("Alien Fleet:");
	  this.alienFleet.forEach((alienShip) => console.log(alienShip));
  
	  console.log("\nThe battle begins!");
	  while (this.humanShip.hull > 0 && this.currentAlienIndex < this.alienFleet.length) {
		const currentAlien = this.alienFleet[this.currentAlienIndex];
		console.log(`\n${this.humanShip.name} is facing ${currentAlien.name}`);
  
		// battle the current alien
		this.battle(currentAlien);
  
		// If the human ship is destroyed, end the game
		if (this.humanShip.hull <= 0) {
		  console.log("\nGame Over! The aliens have won.");
		  return;
		}
		
		// Check win conditions
		if (this.checkWin()) return;

		// If the alien ship is destroyed, move to the next one
		if (currentAlien.hull <= 0) {
		  console.log(`${currentAlien.name} has been destroyed!`);
		  this.currentAlienIndex++;
		}
  
		// Allow the player to retreat if more aliens remain
		if (this.currentAlienIndex < this.alienFleet.length) {
		  const retreat = prompt("Do you want to retreat? (yes/no)").toLowerCase();
		  if (retreat === "yes") {
			console.log(`${this.humanShip.name} retreats. Game over.`);
			return;
		  }
		}
	  }
  
	  // If all alien ships are destroyed, the human wins
	  if (this.humanShip.hull > 0) {
		console.log("\nCongratulations! You defeated all the alien ships!");
	  }
	}
  
	
	battle(alienShip) {
	  while (this.humanShip.hull > 0 && alienShip.hull > 0) {
		this.humanShip.attackTarget(alienShip); // Human ship attacks
		if (alienShip.hull > 0) {
		  alienShip.attack(this.humanShip); // Alien ship counterattacks
		}
	  }
	}
  }
  
  // and again Start the game
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