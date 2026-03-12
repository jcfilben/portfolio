import React, { useEffect } from "react";
import {
  Accordion,
  AccordionPanel,
  Anchor,
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  Header,
  Heading,
  Image,
  Paragraph,
  Page,
  PageContent,
  ResponsiveContext,
  Tag,
  Text,
  Grid,
} from "grommet";
import { Link } from "react-router-dom";
import { Add } from "grommet-icons";

const ProjectCard = ({ title, description, imageSrc, link }) => (
  <Card
    background="white"
    elevation="xsmall"
    width={{ min: "small", max: "medium" }}
  >
    {/* <Link to={link}> */}
    {/* <Image src={imageSrc} alt={title} fit="cover" /> */}
    <Box pad="medium" gap="medium">
      <Box alignSelf="center">
        <Add color="rust" />
      </Box>
      <Box>
        <Heading margin="none" level={3} size="small" textAlign="center">
          {title}
        </Heading>
        <Paragraph textAlign="center">{description}</Paragraph>
      </Box>
    </Box>
    {/* </Link> */}
  </Card>
);

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Accessibility",
    skills: ["WCAG", "ARIA", "Screen Reader Testing", "Inclusive UX"],
  },
  {
    title: "Tools",
    skills: ["GitHub", "Jest", "Figma", "Storybook", "CircleCI", "ESLint", "JAWS"],
  },
  {
    title: "Additional",
    skills: ["Open Source Software", "Design Thinking", "C++", "Java", "Design Systems", "Technical Writing"],
  },
];

const Home = () => {
  return (
    <Box
      fill="horizontal"
      width="100%"
      direction="row-responsive"
      gap="medium"
      pad={{ bottom: "large" }}
    >
      <Box basis="3/4">
        <Heading level={2}>Portfolio</Heading>
        <ResponsiveContext.Consumer>
          {(size) => (
            <Grid
              columns={
                size === "small"
                  ? "small"
                  : [
                      ["small", "medium"],
                      ["small", "medium"],
                    ]
              }
              // columns={{ count: 2, size: "small" }}
              gap="medium"
            >
              <ProjectCard
                title="Ray Tracer"
                description="A C++ application that generates images based on customizable driver files."
                imageSrc="/RayTracer_1.png"
                link="/raytracer"
              />
              <ProjectCard
                title="Project 2"
                description="Description for Project 2."
                imageSrc="/Project2.png"
                link="/project2"
              />
              <ProjectCard
                title="Project 3"
                description="Description for Project 3."
                imageSrc="/Project3.png"
                link="/project3"
              />
              <ProjectCard
                title="Project 4"
                description="Description for Project 4."
                imageSrc="/Project4.png"
                link="/project4"
              />
            </Grid>
          )}
        </ResponsiveContext.Consumer>
      </Box>
      <Box basis="1/4" gap="small">
        <Heading level={2}>Skills</Heading>
        <Text size="small" color="dark-5">
          Technologies and practices I use to build accessible, user-focused
          products.
        </Text>
        {skillGroups.map((group) => (
          <Box key={group.title} gap="xsmall" margin={{ top: "small" }}>
            <Heading level={4} margin="none" size="small">
              {group.title}
            </Heading>
            <Box direction="row" wrap gap="xsmall">
              {group.skills.map((skill) => (
                <Tag key={skill} name={skill} />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      {/* <Heading level={3}>Development</Heading>
      <Tag name="React" />
      <Tag name="JavaScript" />
      <Tag name="TypeScript" />
      <Tag name="HTML" />
      <Tag name="CSS" />
      <Tag name="C++" />
      <Tag name="Java" />
      <Heading level={3}>Other</Heading>
      <Tag name="Accessibility" />
      <Tag name="GitHub" />
      <Tag name="JAWS" />
      <Tag name="Open Source" />
      <Tag name="TestCafe" />
      <Tag name="Jest" /> */}
      {/* <Heading level={2}>Projects</Heading> */}
      {/* <Box
        // direction="row-responsive"
        // justify="stretch"
        // alignSelf="center"
        // alignContent="center"
        // wrap
        fill="horizontal"
        width="100%"
        gap="medium"
      >
        <Box
          round="large"
          pad="medium"
          background="#ffffff15"
          //   height={{ max: "medium", min: "xsmall" }}
          //   width={{ max: "medium", min: "xsmall" }}
          //   width="100%"
          fill="horizontal"
          //   height="medium"
          direction="row-responsive"
          gap="medium"
        >
          <Box round="medium" width="medium" overflow="hidden">
            <Image width="100%" fit="cover" src="/RayTracer_0.png" />
          </Box>
          <Box fill="horizontal" flex>
            <Heading level={3} margin="none">
              Ray Tracer
            </Heading>
            <Paragraph>
              A C++ application that generates images based on customizable
              driver flies.
            </Paragraph>
            <Box>
              <Button color="pink" primary onClick={() => {}}>
                Learn more
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          round="large"
          pad="medium"
          background="#ffffff15"
          //   height={{ max: "medium", min: "xsmall" }}
          width={{ max: "medium", min: "xsmall" }}
          height="medium"
        >
          <Box round="medium" fill overflow="hidden">
            <Image width="100%" fit="cover" src="/Grommet_graphic_1.png" />
          </Box>
        </Box>
        <Box
          round="large"
          pad="medium"
          background="#ffffff15"
          //   height={{ max: "medium", min: "xsmall" }}
          width={{ max: "medium", min: "xsmall" }}
          height="medium"
          // width="m"
        >
          <Box round="medium" fill overflow="hidden">
            <Image width="100%" fit="cover" src="/DS_graphic_1.png" />
          </Box>
        </Box>
      </Box> */}

      {/* <Box gap="medium" justify="evenly" direction="row-responsive">
        <Card height="250px" width={{ min: "small", max: "medium" }}>
          <Link to="/raytracer">
            <CardHeader>Ray Tracer</CardHeader>
            <CardBody fill>
              <Image
                fit="cover"
                src="RayTracer_0.png"
                a11yTitle="An image generated by a RayTracer program showing a series of spheres in a helix pattern reflecting off of each other."
              />
            </CardBody>
          </Link>
        </Card>
        <Card height="250px" width={{ min: "small", max: "medium" }}>
          <CardHeader>Project 2</CardHeader>
          <CardBody>
            <Image
              fit="cover"
              src="DS_graphic_1.png"
              a11yTitle="An image generated by a RayTracer program showing a series of spheres in a helix pattern reflecting off of each other."
            />
          </CardBody>
        </Card>
        <Card height="250px" width={{ min: "small", max: "medium" }}>
          <CardHeader>Project 3</CardHeader>
          <CardBody>
            <Image
            //   width="100%"
              fit="cover"
              src="Grommet_graphic_1.png"
              a11yTitle="An image generated by a RayTracer program showing a series of spheres in a helix pattern reflecting off of each other."
            />
          </CardBody>
        </Card>
      </Box> */}
      {/* <Heading level={2}>Professional Experience</Heading>
      <Accordion>
        <AccordionPanel label="job 1">Text</AccordionPanel>
        <AccordionPanel label="job 2">Text</AccordionPanel>
      </Accordion> */}
      {/* <Heading level={2}>Contact</Heading>
      <Anchor href="#" label="linkedin" />
      <Anchor href="#" label="github" /> */}
    </Box>
  );
};

export default Home;
