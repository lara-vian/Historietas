import React from "react"
import BarraCoins from "../../components/bar";
import Layout from "../../layout"
import { ListaBotoes } from "./style"
import Opcao from "../../components/opcoes"

interface botao{
  id: string;
  imagemBotao: object;
  textoBotao: string;
}

const listaDeBotoes =[ 
  {
    id:"001",
    imagemBotao:{
      src:"",
      alt:""
     },
    textoBotao:""
  },
  {
    id:"002",
    imagemBotao:{
      src:"",
      alt:""
     },
    textoBotao:""
  },
  {
    id:"003",
    imagemBotao:{
      src:"",
      alt:""
     },
    textoBotao:""
  }
]

const botaoOpcao = ({item}) =>(
  <Opcao imagem={item.imagemBotao.src}
         altImagem={item.imagemBotao.alt}
  />
)


const Home: React.FC = () => {
  return (
    <Layout>
      <BarraCoins/>
      
        <ListaBotoes
          data={listaDeBotoes}
          keyExtractor={(item: botao) => item.id}
          renderItem={botaoOpcao}
        />
      
    </Layout>
  );
}

export default Home;