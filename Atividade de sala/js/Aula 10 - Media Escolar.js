function calcularMedia() {
            const nota1 = parseFloat(document.getElementById('nota1').value);
            const nota2 = parseFloat(document.getElementById('nota2').value);
            const media = (nota1 + nota2) / 2;

            const status = aprovadoReprovado(media);
            // Exibir o resultado na tela
            var tela = document.querySelector("#resultado");
            tela.style.display = "block";
            if (!isNaN(media)) {
                document.getElementById('resultado').innerText = `Média: ${media.toFixed(2)} - ${status}`;
                // Exibir se o aluno está aprovado ou reprovado com cores
                if (status === 'Aprovado') {
                    document.getElementById('resultado').style.color = 'green';
                } else {
                    document.getElementById('resultado').style.color = 'red';
                }
            } else {
                document.getElementById('resultado').innerText = 'Por favor, insira notas válidas.';
            }
        }
         // Lógica para determinar se o aluno está aprovado ou reprovado
        function aprovadoReprovado(media) {
            if (media >= 7) {
                return 'Aprovado';
            } else {
                return 'Reprovado';
            }
        }