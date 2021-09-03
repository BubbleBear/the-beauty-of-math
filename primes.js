const WITHIN = 3000;

const primeTable = Array(WITHIN).fill(0);

// console.log(primeTable)

for (let i = 2; i < WITHIN; ++i) {
    if (primeTable[i] === 1) {
        continue;
    }

    for (let j = i + i; j < WITHIN; j += i) {
        primeTable[j] = 1;
    }
}

console.log(primeTable);

const primes = [];

for (let i = 1; i < WITHIN; ++i) {
    if (primeTable[i] === 0) {
        primes.push(i);
    }
}

console.log(primes);

function isPrime(value) {
    return primeTable[value] === 0;
}
