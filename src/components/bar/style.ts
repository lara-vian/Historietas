import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const FundoBarra = styled.View`
      justify-content: space-evenly;
      align-items: center;
      flex-direction: row;
      background-color: ${({theme})=>theme.COLORS.primarias[400]};
      width: 100%;
      height: ${RFPercentage(4)};
`;