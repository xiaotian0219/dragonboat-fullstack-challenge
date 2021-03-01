import React from "react";

import styled from "styled-components";
import { withTheme } from "@material-ui/core/styles";

import ProjectsList from "./app/features/ProjectsList";

const App = (props) => {
  return (
    <Wrapper>
      <Content>
        <ProjectsList />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &&&& {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
`;

const Content = withTheme(styled.div`
  min-width: 1024px;
  max-width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.background.grey};
`);

export default withTheme(App);
