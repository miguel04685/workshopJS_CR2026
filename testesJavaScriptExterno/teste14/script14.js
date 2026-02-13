function tabuadaMultiplicacao() { // Função para mostrar a tabuada de multiplicação de um número
            var numero = Number.parseInt(window.prompt("Digite um número:")); // Pede pro usuário digitar um número
            var resultado = ""; // Inicializa uma string vazia para armazenar os resultados da tabuada
            for (var i = 1; i <= 10; i++) { // Loop para gerar os resultados da tabuada até 10
                resultado += numero + " x " + i + " = " + (numero * i) + "<br>"; // Adiciona cada resultado à string resultado
            }
            document.write(resultado); // Exibe a tabuada completa na página do site
        }