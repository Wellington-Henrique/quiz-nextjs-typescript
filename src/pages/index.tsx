
import { useEffect, useState } from 'react'

import QuestaoModel from '../../model/questao'
import RespostaModel from '../../model/resposta'

import Questionario from '../components/Questionario'

const questaoMock = new QuestaoModel(1, "Melhor cor?", [
  RespostaModel.errada("Verde"),
  RespostaModel.errada("Vermelha"),
  RespostaModel.errada("Azul"),
  RespostaModel.certa("Preta"),
])

const BASE_URL = 'http://localhost:3000/api/'

export default function Home() {
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>(null);

  useEffect(() => {
    carregarIdsQuestoes()
  }, [])


  useEffect(() => {
    idsDasQuestoes?.length && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])

  async function carregarIdsQuestoes() {
    const resp = await fetch(`${BASE_URL}questionario`);
    const idsDasQuestoes = await resp.json();
    setIdsDasQuestoes(idsDasQuestoes);
  }

  async function carregarQuestao(id: number) {
    const resp = await fetch(`${BASE_URL}questoes/${id}`);
    const json = await resp.json();
    const questaoEntity = QuestaoModel.fromObject(json)
    setQuestao(questaoEntity);
  }

  function questaoRespondida(questao: QuestaoModel) {

  }

  function irPraProximoPasso() {

  }

  return (
    <Questionario
      questao={questao}
      ultima={true}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />
  )
}
