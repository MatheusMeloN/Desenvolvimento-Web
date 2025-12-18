 //função para calcular o IMC
        function calcularIMC() {
            const peso = parseFloat(document.getElementById("peso").value);
            const altura = parseFloat(document.getElementById("altura").value);
            var container = document.querySelector(".resultado-group");
            container.style.display = "block";
            if (isNaN(peso) || isNaN(altura)|| (altura) <= 0) {
                
                document.getElementById("resultado").innerText = "Por favor, insira valores válidos para peso e altura.";
                document.getElementById("classificacao").innerText = "";
                return;
            }else{
                const imc = peso / (altura * altura);
                document.getElementById("resultado").innerText = `IMC: ${imc.toFixed(2)}`;
                const classificacao = classificarIMC(imc);
                document.getElementById("classificacao").innerText = `Classificação: ${classificacao}`;
            }
            

        }

        //Comparaçao do IMC com as categorias
        function classificarIMC(imc) {
            if (imc < 18.5) {
                return "Abaixo do peso";
            } else if (imc >= 18.5 && imc < 24.9) {
                return "Peso normal";
            } else if (imc >= 25 && imc < 29.9) {
                return "Sobrepeso";
            } else if (imc >= 30 && imc < 34.9) {
                return "Obesidade Classe I";
            } else if (imc >= 35 && imc < 39.9) {
                return "Obesidade Classe II";
            } else {
                return "Obesidade Classe III";
            }
        }
        
