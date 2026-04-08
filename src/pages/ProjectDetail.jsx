import React, { useEffect } from "react";
import { Box, Button, Heading, Paragraph } from "grommet";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import ProjectShell from "../components/projects/ProjectShell";
import { getProjectBySlug } from "../projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const outlet = useOutletContext?.() || {};
  const { setTitle, setSubtitle, setCTA } = outlet;

  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (project) {
      if (setTitle) setTitle(project.title);
      if (setSubtitle) setSubtitle(project.summary);
      if (setCTA) setCTA(undefined);
    } else {
      if (setTitle) setTitle("Project Not Found");
      if (setSubtitle) setSubtitle("Choose another project from the list");
      if (setCTA) setCTA(undefined);
    }

    return () => {
      if (setTitle) setTitle("Jessica Rosenquist");
      if (setSubtitle) setSubtitle("Frontend UI/UX Developer & Accessibility Advocate");
      if (setCTA) setCTA("Explore Projects");
    };
  }, [project, setTitle, setSubtitle, setCTA]);

  if (!project) {
    return (
      <Box gap="medium" pad={{ bottom: "large" }}>
        <Heading level={2} margin="none">
          Project not found
        </Heading>
        <Paragraph margin="none">
          This project does not exist yet. Return to the projects page and pick
          one of the available case studies.
        </Paragraph>
        <Box direction="row" gap="small" wrap>
          <Button primary label="Back to Projects" onClick={() => navigate("/projects")} />
          <Button label="Back Home" onClick={() => navigate("/")} />
        </Box>
      </Box>
    );
  }

  return <ProjectShell project={project}>{project.renderContent()}</ProjectShell>;
};

export default ProjectDetail;
