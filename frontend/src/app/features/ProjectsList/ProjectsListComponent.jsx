import React from "react";
import styled from "styled-components";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

const Component = ({ projects }) => {
  return (
    <>
      <Title variant="h4">Projects List</Title>
      <List>
        {projects.map((p) => (
          <ListItem key={p.id}>{p.title}</ListItem>
        ))}
      </List>
    </>
  );
};

const Title = styled(Typography)`
  padding: 20px 0 20px 13px;
`;

export default Component;
