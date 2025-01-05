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

function createAlienFleet(count) {
	const fleet = [];
	for (let i = 0; i < count; i++) {
	  fleet.push(new AlienShip(i + 1));
	}
	return fleet;
  }

// Instance USS Assembly and a *single* Alien Ship
const humanShip = new HumanShip("USS Assembly");
const alienShip = new AlienShip(1);

// Display initial stats
console.log("\nHuman Ship Stats:", humanShip);
console.log("Alien Ship Stats:", alienShip);

// Attack the target
humanShip.attackTarget(alienShip);

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