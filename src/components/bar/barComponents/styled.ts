import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
export const FundoItem = styled.View`
      height: ${RFPercentage(3)};
      width:  ${RFPercentage(9)};
      background-color: ${({theme})=> theme.COLORS.primarias[600]};
`;