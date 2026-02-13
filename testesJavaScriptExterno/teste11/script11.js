function tirarRaizQuadrada() { // Função para tirar a raíz quadrada de um número
            var numero = Number.parseFloat(window.prompt("Digite um número:")); // Pede pro usuário digitar um número
            var raiz = Math.sqrt(numero); // Calcula a raíz quadrada do número
            window.alert("A raíz quadrada de " + numero + " é " + raiz); // Informa a raíz quadrada do número
        }