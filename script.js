const vardas = 'vardenis';
const pavarde = 'pavardenis';

console.log(`Aš esu ${vardas} ${pavarde}`);

const brutto = 1200;
const netto = brutto - brutto * 0.2 - brutto * 0.0698 - brutto * 0.1252;

console.log(`Mano brutto yra ${brutto}€. \nO mano netto yra ${netto}€.`);
console.log(`netto tipas: ${typeof(netto)}`);

const jonas = 'Jonas';
const petras = 'Petras';

let jonoMass = 85;
let jonoHeight = 1.95;

let petroMass = 75;
let petroHeight = 1.8;

const jonoBMI = jonoMass / jonoHeight ^ 2;
const petroBMI = petroMass / (petroHeight * petroHeight);
const higher = jonoBMI > petroBMI;

console.log(`ar Jono BMI didesnis uz Petro ${higher}`);
console.log(`Jono BMI: ${jonoBMI}`);
console.log(`Petro BMI ${petroBMI}`);

if(higher){
    console.log(`Jono BMI didesnis`)
} else {
    console.log(`Petro BMI didesnis`)
}



