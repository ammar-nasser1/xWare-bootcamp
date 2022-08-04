//Challenge #1
let massMark= 95;
let massJon=85;
let heightMark=1.88;
let heightJON=1.76;
let bmiMark = massMark/(heightMark*heightMark);
let bmiJon=massJon/(heightJON*heightJON);
  let markHighr=bmiMark > bmiJon
// if (bmiMark>bmiJon )
console.log(markHighr);
//Challenge 2
if (bmiMark>bmiJon)
{

  console.log(" Mark's BMI is higher than John's!")
}
else{


console.log("John's BMI is higher than Mark's!")

}
if (bmiMark>bmiJon)
{

  console.log(`Mark's BMI${bmiMark} is higher than John's!`);
}
else{


console.log(`John's BMI ${bmiJon}is higher than Mark's!`);

}
/////////////////////////////////////////
//Challenge #3
// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


let  Dolphins1=96;
let  Dolphins2=108;
let  Dolphins3=89;
let Koalas1=88;
let Koalas2=91;
let Koalas3=110;
let averageletKoalas=(Koalas1+Koalas2+Koalas3)/3;
let averageDolphins=(Dolphins1+Dolphins2+Dolphins3)/3;
if(averageDolphins>averageletKoalas)
{
  console.log("The winner is  Dolphins")
}
else if(averageletKoalas>averageDolphins){
  console.log("The winner is Koalas1")

}
if(averageDolphins>averageletKoalas && averageDolphins>=100)
{
  console.log("The winner is  Dolphins")
}
else if(averageletKoalas>averageDolphins &&averageletKoalas>=100  ){
  console.log("The winner is Koalas1")

}
else if(averageletKoalas===averageDolphins &&averageletKoalas>=100&&averageDolphins>=100  )
{
  console.log("The case of draw")

}



