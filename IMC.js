const express = require('express');

const srv = express();

class CalculadorDeIMC {
    nome
    peso
    altura
    imc
    

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        
    }

     calcularIMC() {
        this.imc = this.peso / (this.altura*this.altura);

        if (this.imc > 0.0 && this.imc < 18.5)
		{
			this.statusResultado = "ATENÇÃO, você está com peso ideal ABAIXO.";
		}
		else if (this.imc >= 18.5 && this.imc < 24.9)
		{
			this.statusResultado = "PARABÉNS!! Você está no peso ideal.";
		}
		else if (this.imc >= 25 && this.imc < 29.9)
		{
			this.statusResultado = "Acima do peso ideal.";
		}
		else if (this.imc >= 30 && this.imc < 39.9)
		{
			this.statusResultado = "Obesidade, MUITO acima do peso ideal.";
		}
		else if (this.imc > 40)
		{
			this.statusResultado = "Obesidade mórbida.";
		}
    }
}

srv.get('/imc/:nome/:peso/:altura', (req, res)=> {
    const nome = req.params.nome;
    const peso = Number.parseFloat(req.params.peso);
    const altura = Number.parseFloat(req.params.altura);

    const calc = new CalculadorDeIMC(nome, peso, altura);

    calc.calcularIMC();
    res.send(calc);
});
        
srv.listen(3030);