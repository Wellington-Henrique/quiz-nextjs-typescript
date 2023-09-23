import questoes from '../bancoDeQuestoes'

export default function handler(req, res) {
  const id = +req.query.id;

  const questao = questoes.find(questao => questao.id === id);

  if (!!questao)
    res.status(200).json(questao.toEntity())
  else
    res.status(204).send("Questão não encontrada!")
}
  