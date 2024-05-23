class DogBreed {
  constructor(id, breed) {
    this.id = id;
    this.breed = breed;
  }
}

const breeds = [
  new DogBreed(1, "Golden"),
  new DogBreed(2, "Bulldog"),
  new DogBreed(3, "Lulu da Palmirinha"),
  new DogBreed(4, "Cheetos"),
  new DogBreed(5, "Pudu"),
];

function create(breed) {
  const id = breeds.length + 1;
  breeds.push(new DogBreed(id, breed));
  return findById(id);
}

function findAll() {
  return breeds;
}

function findById(id) {
  const breed = breeds.find(function(breed) {
    return id == breed.id;
  });
  return breed;
}

export default { findAll, findById, create }