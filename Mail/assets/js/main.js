//Mail
//Chiedi all’utente la sua email,

var emailInput = prompt("Inserisci la tua e-mail per la verifica.");

var emailDatabase = ["luca@boolean.it", "marco@boolean.it", "paolo@boolean.it"];

//controlla che sia nella lista di chi può accedere,
var controlloEmail;

for(var i = 0; i < emailDatabase.length; i++ ){
  if(emailInput  == emailDatabase[i]){
    controlloEmail = true;
    break;
  }else {
    conrolloEmail = false;
  }
}
//stampa un messaggio appropriato sull’esito del controllo.
if(controlloEmail == true){
  //stampa un messaggio appropriato sull’esito del controllo.
  alert("Email verificata - Ammesso")
}else {
  //stampa un messaggio appropriato sull’esito del controllo.
  alert("Email non trovata - Non Ammesso")
}
