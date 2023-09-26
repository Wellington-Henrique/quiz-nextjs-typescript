import questoes from '../bancoDeQuestoes'

export default function questoesPorId(req, res) {
  const id = +req.query.id;

  const questao = questoes.find(questao => questao.id === id);

  if (!!questao) {
    const questaoSelecionada = questao.embaralharRespostas();
    res.status(200).json(questaoSelecionada.toEntity());
  }
  else
    res.status(204).send("Questão não encontrada!")
}
  