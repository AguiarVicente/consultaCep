let cep = document.querySelector("#cep");
let btnCEP = document.querySelector("#btnCEP");
let erro = document.querySelector(".bg-danger");
let dados = document.querySelector("#resultado");

const info = (campos) => {
  for (let campo in campos) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = campos[campo];
    }
  }
};

btnCEP.addEventListener("click", function (event) {
  event.preventDefault();

  campoVazio();
});

function campoVazio() {
  if (cep.value == "") {
    erro.classList.remove("visually-hidden");
    dados.classList.add("visually-hidden");
  } else {
    let valor = cep.value.replace("-", "");
    let options = {
      method: "GET",
      mode: "cors",
      cache: "default",
    };

    fetch(`https://viacep.com.br/ws/${valor}/json/`, options)
      .then((response) => response.json())
      .then((data) => info(data))
      .catch((erro) => `Erro: ${erro}`);

    dados.classList.remove("visually-hidden");
    erro.classList.add("visually-hidden");
  }
}
