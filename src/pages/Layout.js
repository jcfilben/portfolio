import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Accordion,
  AccordionPanel,
  Anchor,
  Box,
  Card,
  CardHeader,
  CardBody,
  Grommet,
  Header,
  Heading,
  Image,
  Paragraph,
  Page,
  PageContent,
  Tag,
  Text,
} from "grommet";
import { css } from "styled-components";

const colors = {
  tan: "#D8CBC7",
  blue: "#4F6367",
  pink: "#A2666F",
  brown: "#330F0A",
};

const theme = {
  global: {
    colors: {
      tan: "#D8CBC7",
      blue: "#4F6367",
      pink: "#A2666F",
      brown: "#330F0A",
      // text: "#330F0A",
    },
    focus: {
      outline: {
        // color: "#34F6F2",
        // color: "#B1740F"
        color: "#4ECDC4",
      },
    },
    font: {
      // family: "'PT', serif",
      // face: `@font-face {
      //   font-family: 'PT', serif;
      //   src: url('https://fonts.googleapis.com/css?family=PT+Serif');
      // }`
      family: "'Josefin Slab', serif",
      face: `@font-face {
             font-family: 'Josefin Slab', serif;
             src: url('https://fonts.googleapis.com/css?family=Josefin+Slab');
           }`,
    },
  },
  heading: {
    weight: "lighter",
    extend: css`
      text-transform: uppercase;
    `,
    // font: {
    //   family: "'Montserrat Alternates', sans-serif",
    //   face: `@font-face {
    //     font-family: 'Montserrat Alternates', sans-serif;
    //     src: url('https://fonts.googleapis.com/css?family=Montserrat+Alternates');
    //   }`
    // }
    // font: {
    //   family: "'Raleway', sans-serif",
    //   face: `@font-face {
    //     font-family: 'Raleway', sans-serif;
    //     src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');
    //   }`
    // }
  },
  paragraph: {
    medium: {
      maxWidth: undefined,
    },
  },
  tag: {
    border: {
      color: "pink",
    },
  },
};

const Home = () => {
  return (
    <Grommet options={{ box: { cssGap: true } }} full theme={theme}>
      <Page
        background={colors.blue}
        // background="pink"
      >
        <Box className="border-img">
          <PageContent fill="vertical" pad={{ horizontal: "xlarge" }}>
            <Header alignSelf="center">
              <Heading>Jessica Filben</Heading>
            </Header>
            <hr />
            <Outlet />
          </PageContent>
        </Box>
      </Page>
    </Grommet>
  );
};

export default Home;
