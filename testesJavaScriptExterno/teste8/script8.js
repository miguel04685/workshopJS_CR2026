 function calcularIdade() { // Função para calcular a idade do usuário
            var nome = window.prompt("Digite o seu nome:"); // Pede pro usuário digitar o nome
            var anoNascimento = window.prompt("Digite o seu ano de nascimento:"); // Pede pro usuário digitar o ano de nascimento
            var anoAtual = window.prompt("Digite o ano atual:"); // Pede pro usuário digitar o ano atual
            var idade = anoAtual - anoNascimento; // Calcula a idade do usuário
            window.alert(nome + ", neste ano você faz " + idade + " anos"); // Mostra a idade do usuário
        }