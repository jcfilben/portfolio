import React from "react";
import { Anchor, Box, Heading, Paragraph, Text } from "grommet";

export const project = {
  slug: "grommet",
  title: "Grommet",
  summary: "React based UI component library.",
  status: "Ongoing",
  featured: true,
  tags: ["React", "Open Source", "Accessibility", "Design System"],
  coverImage: {
    src: "/Grommet_graphic_1.png",
    alt: "Grommet UI library visual",
  },
  links: {
    github: "https://github.com/grommet/grommet",
    demo: "https://v2.grommet.io/",
  },
  renderContent: () => (
    <Box as="section" gap="medium">
      <Box gap="small">
        <Heading level={3} margin="none" size="small">
          Overview
        </Heading>
        <Paragraph margin="none">
          Grommet is an open source React UI component library focused on
          accessible, responsive, and production-ready experiences. I lead core
          project execution by balancing day-to-day code quality with long-term
          maintainability and community health.
        </Paragraph>
      </Box>

      <Box gap="small">
        <Heading level={3} margin="none" size="small">
          Role and Responsibilities
        </Heading>
        <Box as="ul" margin="none" pad={{ left: "medium" }}>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>Manage and ship releases on a roughly monthly cadence.</Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>Review and approve incoming pull requests across the codebase.</Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>Prioritize backlog work and coordinate roadmap direction.</Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>Support and coach open source contributors from first issue to merged PR.</Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>Maintain a high bar for stable, reliable, and accessible releases.</Text>
          </Box>
        </Box>
      </Box>

      <Box gap="small">
        <Heading level={3} margin="none" size="small">
          Key Contributions
        </Heading>
        <Box as="ul" margin="none" pad={{ left: "medium" }}>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>Hands-on code contributions across components and platform improvements.</Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>Community support through issue triage, discussion, and implementation guidance.</Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>Code quality stewardship through detailed PR review and release readiness checks.</Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>Expanded testing expectations by adding unit tests to most pull requests.</Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>Contributor coaching to improve onboarding and increase long-term contribution quality.</Text>
          </Box>
        </Box>
      </Box>

      <Box gap="small">
        <Heading level={3} margin="none" size="small">
          Impact
        </Heading>
        <Box as="ul" margin="none" pad={{ left: "medium" }}>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>Consistent monthly release cadence that keeps the library healthy and current.</Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>Steady growth in automated unit test coverage across incoming changes.</Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              Widely adopted package footprint, including roughly 37,000 weekly
              npm downloads (snapshot from March 2026).
            </Text>
          </Box>
        </Box>
      </Box>

      <Box gap="small">
        <Heading level={3} margin="none" size="small">
          Links
        </Heading>
        <Box as="ul" margin="none" pad={{ left: "medium" }}>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Anchor href="https://github.com/grommet/grommet" label="GitHub repository" target="_blank" rel="noreferrer" />
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Anchor href="https://v2.grommet.io/" label="Documentation" target="_blank" rel="noreferrer" />
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Anchor href="https://www.npmjs.com/package/grommet" label="npm package" target="_blank" rel="noreferrer" />
          </Box>
        </Box>
      </Box>
    </Box>
  ),
};
