function createAnimal(name, type, food) {
  return {
    name: name,
    type: type,
    food: food,
    eat: function () {
      console.log(`${this.name} is a ${this.type} and eats ${food}`);
    },
  };
}

const myAnimal = createAnimal("Jasper", "dog", "dog food.");
myAnimal.eat();
