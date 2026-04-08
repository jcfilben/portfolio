import React from "react";
import { Anchor, Box, Card, Heading, Image, Paragraph, Tag } from "grommet";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Card
      as={Link}
      to={`/projects/${project.slug}`}
      aria-label={`Open ${project.title} project page`}
      background="white"
      elevation="xsmall"
      overflow="hidden"
      height="100%"
      style={{ textDecoration: "none" }}
      onClick={() => {}}
      hoverIndicator={{
        background: {
          // color: rgba(0, 0, 0, 0.1),
          // dark: "...",
          // image: "string",
          // position: "string",
          // opacity: "...",
          // repeat: "...",
          // size: "...",
          // light: "string"
        },
        elevation: "large",
      }}
      // width="250px"
    >
      {project.coverImage?.src ? (
        <Box
          height="medium"
          // width={{ min: "small", max: "medium" }}
          // width="medium"
          overflow="hidden"
          background="light-2"
        >
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt || `${project.title} preview`}
            fit="cover"
          />
        </Box>
      ) : null}
      <Box pad="medium" gap="small" fill="horizontal">
        <Heading level={3} size="small" margin="none">
          {project.title}
        </Heading>
        <Paragraph margin="none" size="small">
          {project.summary}
        </Paragraph>
        <Box direction="row" wrap gap="xsmall" margin={{ top: "xsmall" }}>
          {project.tags?.map((tag) => (
            <Tag key={`${project.slug}-${tag}`} name={tag} size="small" />
          ))}
        </Box>
        {/* <Box margin={{ top: "small" }}> */}
        {/* <Anchor
            as={Link}
            to={`/projects/${project.slug}`}
            label={`Open ${project.title} project page`}
          /> */}
        {/* </Box> */}
      </Box>
    </Card>
  );
};

export default ProjectCard;
