 function somarDoisNumeros() { // Função para somar dois números
            var numero1 = Number.parseFloat(window.prompt("Digite o primeiro número:")); // Pede pro usuário digitar o primeiro número
            var numero2 = Number.parseFloat(window.prompt("Digite o segundo número:")); // Pede pro usuário digitar o segundo número
            var soma = numero1 + numero2; // Calcula a soma dos números
            window.alert("A soma de " + numero1 + " e " + numero2 + " é igual a " + soma); // Informa a soma dos números
        }