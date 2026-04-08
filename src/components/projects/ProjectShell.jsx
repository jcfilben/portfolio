import React from "react";
import { Anchor, Box, Heading, Paragraph, Tag } from "grommet";
import { Link } from "react-router-dom";

const ProjectShell = ({ project, children }) => {
  return (
    <Box gap="large" pad={{ bottom: "large" }}>
      <Box gap="small">
        <Anchor as={Link} to="/projects" label="Back to projects" />
        <Heading level={2} margin="none">
          {project.title}
        </Heading>
        <Paragraph margin="none">{project.summary}</Paragraph>
        <Box direction="row" wrap gap="xsmall">
          {project.status ? <Tag name={project.status} size="small" /> : null}
          {project.tags?.map((tag) => (
            <Tag key={`${project.slug}-${tag}`} name={tag} size="small" />
          ))}
        </Box>
      </Box>

      <Box as="article" gap="large">
        {children}
      </Box>
    </Box>
  );
};

export default ProjectShell;
