import React, { useEffect } from "react";
import { Box, Grid, Heading, Paragraph, ResponsiveContext } from "grommet";
import { useOutletContext } from "react-router-dom";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../projects";

const Projects = () => {
  const outlet = useOutletContext?.() || {};
  const { setTitle, setSubtitle, setCTA } = outlet;

  useEffect(() => {
    if (setTitle) setTitle("Projects");
    if (setSubtitle)
      setSubtitle("Case studies, process, and accessibility decisions");
    if (setCTA) setCTA(undefined);

    return () => {
      if (setTitle) setTitle("Jessica Rosenquist");
      if (setSubtitle)
        setSubtitle("Frontend UI/UX Developer & Accessibility Advocate");
      if (setCTA) setCTA("Explore Projects");
    };
  }, [setTitle, setSubtitle, setCTA]);

  return (
    <Box gap="medium" pad={{ vertical: "large" }}>
      <Heading level={2} margin="none">
        Project Library
      </Heading>
      <Paragraph margin={{ top: "none", bottom: "small" }}>
        Browse each project page for implementation details, technical
        decisions, and accessibility notes.
      </Paragraph>

      <ResponsiveContext.Consumer>
        {(size) => (
          <Grid
            columns="320px"
            // columns={
            //   size === "small" || size === "medium"
            //     ? // ? "290px"
            //       { count: "fit"}
            //     : { count: 3, size: "small" }
            // }
            gap="medium"
          >
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Box>
  );
};

export default Projects;
