function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel;

  if (vitorias <10) {
    nivel = "ferro";
  }
  else if (vitorias >=11 && vitorias <= 20) {
    nivel = "Bronze"
  }
  else if (vitorias >=21 && vitorias <= 50) {
    nivel = "Prata"
  }
  else if (vitorias >=51 && vitorias <=80) {
    nivel = "Ouro"
  }
  else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamente"
  }
  else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendario"
  }
  else {
    nivel = "Imortal"
  }

  return {saldoVitorias, nivel}

  
}

const vitorias = 100;
const derrotas = 20;

const resultado = calcularNivel  (vitorias, derrotas)

console.log (`O herói tem saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}` );