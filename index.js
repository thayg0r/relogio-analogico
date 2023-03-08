const hora = document.querySelector(".hora");
const minuto = document.querySelector(".minuto");
const segundo = document.querySelector(".segundo");

function definirData() {
  const agora = new Date();

  const obterSegundo = agora.getSeconds();
  const obterMinuto = agora.getMinutes();
  const obterHora = agora.getHours();

  const segundoGrau = (obterSegundo / 60) * 360;
  const minutoGrau = (obterMinuto / 60) * 360;
  const horaGrau = (obterHora / 12) * 360;

  segundo.style.transform = `rotate(${segundoGrau}deg)`;
  minuto.style.transform = `rotate(${minutoGrau}deg)`;
  hora.style.transform = `rotate(${horaGrau}deg)`;
}

setInterval(definirData, 1000);