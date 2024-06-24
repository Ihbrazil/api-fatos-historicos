const fatos = require('../dados/fatos.js');

function servicoValidaAno (ano)
{
    if (isNaN(ano))
    {
        return false;
    }
    else
    {
        if (ano >= 1920 && ano <= 2020)
        {
            return true;
        }
        else
        {
            return false;
        }
    } 
}

function servicoBuscarFatoPorAno(ano)
{
    let fatoSelecionado = fatos.fatosHistoricos.find(fato => {
        return fato.Ano == ano;
    });

    return fatoSelecionado.Fato;
}

exports.servicoBuscarFatoPorAno = servicoBuscarFatoPorAno;
exports.servicoValidaAno = servicoValidaAno;