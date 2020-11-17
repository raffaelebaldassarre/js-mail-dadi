//Gioco dei dadi
var user = [1,2,3,4,5,6];
var pc = [1,2,3,4,5,6];
var resultUser;
var resultPc;

//Generare un numero random da 1  a 6, sia per il giocatore sia per il computer

resultUser = Math.floor((Math.random() * user.length) + 1);
resultPc = Math.floor((Math.random() * pc.length) + 1);

console.log(resultUser, resultPc);

//Stabilire il vincitore, in base a chi fa il punteggio più alto.
if(resultUser > resultPc){
  console.log("Hai vinto!!!");
}else if (resultUser == resultPc) {
  console.log("Pareggio");
}
else {
  console.log("Hai perso. Ritenta sarai più fortunato!!!");
}
