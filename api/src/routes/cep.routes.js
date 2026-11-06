const { Router } = require('express');

const router = Router();

router.get('/:cep', async (req, res) => {
  const cep = req.params.cep.replace(/\D/g, '');

  if (cep.length !== 8) {
    return res.status(400).json({ erro: 'CEP inválido. Informe 8 dígitos.' });
  }

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();

    if (dados.erro) {
      return res.status(404).json({ erro: 'CEP não encontrado' });
    }

    res.json({
      cep: dados.cep,
      cidade: dados.localidade,
      estado: dados.uf,
      bairro: dados.bairro,
      logradouro: dados.logradouro
    });
  } catch (error) {
    res.status(502).json({ erro: 'Não foi possível consultar o ViaCEP' });
  }
});

module.exports = router;
