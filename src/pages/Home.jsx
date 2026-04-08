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
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Add, Next } from "grommet-icons";

const ProjectCard = ({ title, description, imageSrc, link }) => (
  <Card
    background="white"
    elevation="xsmall"
    width={{ min: "small", max: "medium" }}
  >
    {/* <Link to={link}> */}
    {/* <Image src={imageSrc} alt={title} fit="cover" /> */}
      <Box alignSelf="center" height="20px" width="100%" background="rust">
        {/* <Add color="rust" /> */}
      </Box>
    <Box pad="medium" gap="medium">
      <Box>
        <Heading margin="none" level={3} size="small" textAlign="center">
          {title}
        </Heading>
        <Paragraph size="small" textAlign="center">
          {description}
        </Paragraph>
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
    skills: [
      "GitHub",
      "Jest",
      "Figma",
      "Storybook",
      "CircleCI",
      "ESLint",
      "JAWS",
    ],
  },
  {
    title: "Additional",
    skills: [
      "Open Source Software",
      "Design Thinking",
      "C++",
      "Java",
      "Design Systems",
      "Technical Writing",
    ],
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      fill="horizontal"
      width="100%"
      direction="row-responsive"
      gap="xlarge"
      pad={{ bottom: "large" }}
    >
      <Box basis="3/4">
        <Box gap="small" pad={{ vertical: "medium" }}>
          <Heading level={2} margin="none">
            Hi, I&apos;m Jessica
          </Heading>
          <Text margin="none">
            I&apos;m a Lead Frontend Developer at Hewlett Packard Enterprise
            with 7 years of experience. I specialize in open source software,
            building community, and I work to make the web more accessible to
            people with disabilities. I believe inclusive design is a baseline
            quality requirement, not an afterthought.
          </Text>
          {/* <Box direction="row" wrap gap="small">
            <Button
              primary
              label="View Projects"
              onClick={() => navigate("/projects")}
            />
            <Button label="Contact Me" onClick={() => navigate("/contact")} />
          </Box> */}
        </Box>
        <Heading level={2}>Featured Projects</Heading>
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
                imageSrc="/RayTracer_0.png"
                link="/projects/raytracer"
              />
              <ProjectCard
                title="Grommet"
                description="An open-source React UI component library focused on accessible, responsive, and production-ready experiences."
                imageSrc="/Grommet_graphic_1.png"
                link="/projects/grommet"
              />
              <ProjectCard
                title="Accessible SelectMultiple"
                description="Built and validated one of the few truly accessible multi-select component experiences in modern UI libraries."
                imageSrc="/DS_graphic_1.png"
                link="/projects/project-3"
              />
              <ProjectCard
                title="HPE Design System Accessibility Audit"
                description="Led an end-to-end accessibility evaluation and remediation of 46 design system components to WCAG AA compliance."
                imageSrc="/DS_WCAG_compliance.png"
                link="/projects/hpe-accessibility-audit"
              />
            </Grid>
          )}
        </ResponsiveContext.Consumer>
        <Box gap="small">
          <Heading level={2} margin={{ top: "large", bottom: "none" }}>
            Get To Know Me
          </Heading>
          <Text>
            Learn more about me, the work I do in my local and tech communities,
            and my accessibility-first philosophy.
          </Text>
          <Box align="start">
            <Button
              label="Visit About Page"
              primary
              reverse
              onClick={() => navigate("/about")}
            />
          </Box>
        </Box>
      </Box>
      <Box basis="1/4" gap="small">
        <Heading level={2}>Skills</Heading>
        <Text size="small">
          Technologies and practices I use to build accessible, user-focused
          products.
        </Text>
        {skillGroups.map((group) => (
          <Box key={group.title} gap="xsmall" margin={{ top: "small" }}>
            <Heading level={3} margin="none" size="xsmall">
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
