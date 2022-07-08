import React from "react";
import Layout from "../../layout";
import { Titulo, BotaoLogin, TextoBotao } from "./style";

const Login: React.FC = () => {
   return (
      <Layout>
         <Titulo>Faça Login com o Google</Titulo>
         <BotaoLogin>
            <TextoBotao>Login</TextoBotao>
         </BotaoLogin>
      </Layout>
   );
};
export default Login;
