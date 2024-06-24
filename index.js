const express = require('express');
const app = express();

const servico = require('./servico/servico.js');

app.get('/', (req,res) => {
      let anoFato = req.query.ano;
    
      if (servico.servicoValidaAno(anoFato))
      {
        var fato = servico.servicoBuscarFatoPorAno(anoFato);
        res.json({ano: fato});
      }
      else
      {
        res.status(400).json({'erro': 'ano inválido: o ano deve estar no intervalo entre 1920 e 2020'});
      }
  });

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});