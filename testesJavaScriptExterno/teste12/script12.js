 function elevandoAoCubo() { // Função para elevar um número ao cubo
            var numero = Number.parseFloat(window.prompt("Digite um número:")); // Pede pro usuário digitar um número
            var cubo = Math.pow(numero, 3); // Calcula o cubo do número
            window.alert(numero + " ao cubo é igual a " + cubo); // Informa o cubo do número
        }