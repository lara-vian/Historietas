import React from "react";
import EscolhaCoin from "./barComponents/escolhaCoin";
import HeartCoin from "./barComponents/heartCoin";
import Usuario from "./barComponents/usuario";
import { FundoBarra } from "./style";

export default function BarraCoins() {
   return (
      <FundoBarra>
         <Usuario />
         <EscolhaCoin />
         <HeartCoin />
      </FundoBarra>
   );
}

