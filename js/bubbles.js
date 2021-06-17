const TEMPO_MINIMO = 1000;    // 1s em milissegundos
const TEMPO_VARIAVEL = 3000;  // 3s
const DURACAO = 5000;         // 5s
const bolhaEl = carregaUmaImagem('images/bolha.png');

function carregaUmaImagem(path) {
  const img = new Image();
  img.src = path;
  return img;
}

function getLarguraJanela() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}


function criaUmaBolha() {
  const novaBolhaEl = bolhaEl.cloneNode();
  const posicaoX = Math.random() * getLarguraJanela() + 'px';
  // Math.random() retorna um número aleatório de 0 até 1
  // ... daí multiplicamos esse número pela largura da janela

  novaBolhaEl.style.position = 'fixed';
  novaBolhaEl.style.transition = `all ${DURACAO}ms linear`;
  novaBolhaEl.style.bottom = '-50px';
  novaBolhaEl.style.left = posicaoX;
  novaBolhaEl.style.opacity = 1;
  novaBolhaEl.style.transform = 'scale(' + (Math.random() / 2 + 0.5) + ')';

  document.body.appendChild(novaBolhaEl);

  setTimeout(function () {
    novaBolhaEl.style.opacity = .5;
    novaBolhaEl.style.bottom = window.innerHeight + 'px';
  }, 0);

  setTimeout(function () {
    novaBolhaEl.remove();
  }, DURACAO);


  // pelo menos, vai esperar por TEMPO_MINIMO. Mas pode, adicionalmente,
  // esperar por mais [0%....100%] x TEMPO_VARIAVEL
  const proximaBolhaDaqui = TEMPO_MINIMO + Math.random() * TEMPO_VARIAVEL;
  setTimeout(criaUmaBolha, proximaBolhaDaqui);
}




criaUmaBolha();




criaUmaBolha();
