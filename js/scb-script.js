console.log("Ciao Cianuro... Oggi l'esercizio è VUE TO DO LIST");

//********************
// CREO ARRAY DI OGGETTI CON LE COSE DA FARE
//******************** */
let toDo = [
  {
    text: "Pubblicare e programmare su FB gli orari di Aprile",
    done: false,
  },
  {
    text: "Impaginare il Calendario 2024",
    done: false,
  },
  {
    text: "Impaginare il Bollettino di Pasqua",
    done: false,
  },
  {
    text: "Ritirare il quadro per la sala da pranzo",
    done: false,
  },
  {
    text: "Portare la macchina dal meccanico per il tagliando annuale",
    done: false,
  },
  {
    text: "Montare l'antenna Booster LTE",
    done: false,
  },
  {
    text: "Pagare Bollo auto",
    done: false,
  },
  {
    text: "Ritirare e pagare l'Assicurazione",
    done: false,
  },
  {
    text: "Rinnovare abbonamento Amazon Prime",
    done: false,
  },
  {
    text: "Aggiornare il mac e gli iDevice all'ultima relaise del SO",
    done: false,
  },
];
console.log(toDo);

//---------------------------------------------------------------------------
// ||||||||||||||||||||||||||| VUE ||||||||||||||||||||||||||||
//---------------------------------------------------------------------------
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "cianuro's to do list",
      toDo: toDo,
    };
  },
}).mount("#app");
//---------------------------------------------------------------------------
// |||||||||||||||||||||||||||| VUE ||||||||||||||||||||||||||||
//---------------------------------------------------------------------------
