import React from "react";
import { Anchor, Box, Heading, Paragraph, Text } from "grommet";

export const project = {
  slug: "project-3",
  title: "Accessible SelectMultiple",
  summary:
    "Built and validated one of the few truly accessible multi-select component experiences in modern UI libraries.",
  status: "Completed",
  featured: true,
  tags: ["React", "Grommet", "Accessibility", "Design Systems"],
  coverImage: {
    src: "/DS_graphic_1.png",
    alt: "Accessible SelectMultiple component visual",
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
          I built SelectMultiple for Grommet as a production-ready, accessible
          way to support multi-selection workflows without excluding keyboard or
          screen reader users. This work is rare in the ecosystem and required
          balancing API ergonomics, interaction design, and rigorous
          accessibility validation.
        </Paragraph>
      </Box>

      <Box gap="small">
        <Heading level={3} margin="none" size="small">
          Accessibility Validation
        </Heading>
        <Box as="ul" margin="none" pad={{ left: "medium" }}>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              Conducted user testing with a blind teammate to validate real
              assistive technology behavior and discover friction points early.
            </Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              Performed manual screen reader testing throughout implementation,
              not only at the end of development.
            </Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              Executed comprehensive keyboard interaction checks to ensure
              predictable, efficient navigation and selection.
            </Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              Used accessibility testing tools to verify semantic structure,
              focus management, and announcement behavior.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box gap="small">
        <Heading level={3} margin="none" size="small">
          Design Collaboration
        </Heading>
        <Paragraph margin="none">
          I was an active participant in the design process from early concepts
          through interaction refinements. Partnering closely with design helped
          ensure accessibility was a first-order requirement instead of a
          post-launch patch.
        </Paragraph>
      </Box>

      <Box gap="small">
        <Heading level={3} margin="none" size="small">
          Outcomes and Recognition
        </Heading>
        <Box as="ul" margin="none" pad={{ left: "medium" }}>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              Delivered one of the few accessible multi-select component
              experiences available in mainstream UI ecosystems.
            </Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              This work has two associated patents: one granted patent
              (US12353694B2) and one patent-pending filing.
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
            <Anchor
              href="https://github.com/grommet/grommet"
              label="Grommet GitHub repository"
              target="_blank"
              rel="noreferrer"
            />
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Anchor
              href="https://v2.grommet.io/"
              label="Grommet documentation"
              target="_blank"
              rel="noreferrer"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  ),
};
