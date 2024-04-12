

const form = document.getElementById('principal');

form.addEventListener('submit', function(e){
  e.preventDefault();

  let campo1A = document.getElementById('campoA');
  let campo2B = document.getElementById('campoB');

  const valorCampo1A = campo1A.value;
  const valorCampo2B = campo2B.value;

  const mensagemSucesso = `Formulário válido! Número B: ${valorCampo2B} é maior que o número A: ${valorCampo1A}`;

  if(parseFloat(valorCampo2B) > parseFloat(valorCampo1A)){
    alert(mensagemSucesso);

    campo1A.value = '';
    campo2B.value = '';

  } else {
    alert("Formulário Inválido");
  }
});

console.log(form);
