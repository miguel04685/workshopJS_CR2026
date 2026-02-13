 function verificarAlistamento() { // Função para verificar se o usuário precisa se alistar
            window.confirm("Isso só vale para quem é do sexo masculino!"); // Informa que a verificação sé apenas para homens
            var nome = window.prompt("Digite o seu nome:"); // Pede pro usuário digitar o nome
            var anoNascimento = window.prompt("Digite o seu ano de nascimento:"); // Pede pro usuário digitar o ano de nascimento
            var anoAtual = window.prompt("Digite o ano atual:"); // Pede pro usuário digitar o ano atual
            var idade = anoAtual - anoNascimento; // Calcula a idade do usuário
            if (idade >= 18) { // Se a idade for maior ou igual a 18 anos
                window.alert(nome + ", você precisa se alistar este ano!"); // Informa que precisa se alistar
            } else { // Se a idade for menor que 18 anos
                window.alert(nome + ", você ainda não precisa se alistar este ano!"); // Informa que ainda não precisa se alistar
            }
        }