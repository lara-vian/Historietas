import { Botao, ImagemBotao } from "./style";


export default function Opcao({imagem, altImagem}){
    return(
        <Botao
        >
            <ImagemBotao
                source={imagem}
                accessibilityLabel={altImagem}
            />
        </Botao>
    )
}