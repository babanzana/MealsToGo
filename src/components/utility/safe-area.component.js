import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

// && `margin-top: ${StatusBar.currentHeight}px`
