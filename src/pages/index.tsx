
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import QuestaoModel from '../../model/questao'

import Questionario from '../components/Questionario'

const BASE_URL = 'https://quiz-nextjs-typescript.vercel.app/api/'

export default function Home() {
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>(null);
  const [respostasCertas, setRespostasCertas] = useState<number>(null);

  const router = useRouter();

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

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida)

    if (questaoRespondida.acertou)
      setRespostasCertas(respostasCertas + 1)
  }

  function idProximaPergunta() {
    const proximoIndice = idsDasQuestoes.indexOf(questao?.id) + 1
    return idsDasQuestoes[proximoIndice]
  }

  function irPraProximoPasso() {
    const proximoId = idProximaPergunta();
    console.log(proximoId)
    proximoId ? irPraProximaQuestao(proximoId) : finalizar();
  }

  function irPraProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId)
  }

  function finalizar() {
    router.push({
      pathname: '/resultado',
      query: {
        total: idsDasQuestoes.length,
        certas: respostasCertas
      }
    })
  }

  return (
    <Questionario
      questao={questao}
      ultima={!idProximaPergunta()}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />
  )
}
