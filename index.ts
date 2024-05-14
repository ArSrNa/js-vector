type Vector = number[];

function calcModule(v1: Vector, v2: Vector): number {
  let sum = 0;
  for (let i = 0; i < v1.length; i++) {
    sum += Math.pow(v2[i] - v1[i], 2);
  }
  return Math.sqrt(sum);
}

function generateVectors(number: number, dimension: number): Vector[] {
  let arr = new Array(number).fill(new Array(dimension));
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < dimension; j++) {
      arr[i][j] = Math.random();
    }
  }
  return arr;
}

let vectors = generateVectors(20, 2);

// console.log(generateVectors(5, 3));
console.log(calcModule([1, 1], [2, 2]));
