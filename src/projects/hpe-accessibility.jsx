import React from "react";
import { Anchor, Box, Heading, Paragraph, Text } from "grommet";

export const project = {
  slug: "hpe-accessibility-audit",
  title: "HPE Design System Accessibility Audit",
  summary:
    "Led an end-to-end accessibility evaluation and remediation of 46 components on the HPE Design System, bringing every component to WCAG AA compliance.",
  status: "Completed",
  featured: true,
  tags: ["Accessibility", "WCAG", "Design System", "Leadership"],
  coverImage: {
    src: "/DS_WCAG_compliance.png",
    alt: "HPE Design System component page showing accessibility evaluation results",
  },
  links: {
    demo: "https://design-system.hpe.design/components",
  },
  renderContent: () => (
    <Box as="section" gap="medium">
      <Box gap="small">
        <Heading level={3} margin="none" size="small">
          Overview
        </Heading>
        <Paragraph margin="none">
          I led a comprehensive accessibility audit and remediation effort
          across the HPE Design System. Every component was evaluated against
          the WCAG 2.1 standard, assigned an overall accessibility score, and
          annotated with the specific WCAG success criteria applicable to it.
          Each rule was categorized as passed, failed, conditional, or AAA not
          achieved. Any component that failed to meet WCAG AA was subsequently
          remediated. The results of this work are published directly on each
          component page of the HPE Design System.
        </Paragraph>
      </Box>

      <Box gap="small">
        <Heading level={3} margin="none" size="small">
          Role and Responsibilities
        </Heading>
        <Box as="ul" margin="none" pad={{ left: "medium" }}>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              Led the project from kickoff through completion with full
              ownership of scope, sequencing, and delivery.
            </Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              Managed sprint planning and backlog prioritization, determining
              which components to evaluate and remediate in each cycle.
            </Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              Reviewed every contribution to ensure evaluations were consistent,
              accurate, and aligned with the WCAG 2.1 specification.
            </Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              Educated each team member on the evaluation workflow, testing
              methodology, and how to correctly interpret and apply WCAG success
              criteria.
            </Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              Drove remediation efforts to resolution, ensuring all 46
              components met a minimum of WCAG AA before the work was
              considered complete.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box gap="small">
        <Heading level={3} margin="none" size="small">
          Evaluation Methodology
        </Heading>
        <Box as="ul" margin="none" pad={{ left: "medium" }}>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              Combined automated testing tools with manual evaluation to catch
              both machine-detectable violations and nuanced assistive
              technology issues that automation cannot surface.
            </Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              Performed hands-on testing with screen readers to validate real
              assistive technology behavior for each component.
            </Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              Mapped each applicable WCAG 2.1 success criterion to the
              component and categorized its status as passed, failed,
              conditional, or AAA not achieved.
            </Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              Produced an overall accessibility score per component that gives
              consumers a clear, at-a-glance signal of conformance.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box gap="small">
        <Heading level={3} margin="none" size="small">
          Impact
        </Heading>
        <Box as="ul" margin="none" pad={{ left: "medium" }}>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              46 components fully evaluated and documented with per-criterion
              WCAG 2.1 results published on the HPE Design System.
            </Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              Every component that did not meet WCAG AA was remediated,
              bringing the entire component library to a minimum AA conformance
              level.
            </Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              Transparency provided to consuming teams through publicly visible
              accessibility scores and detailed rule coverage on each component
              page.
            </Text>
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Text>
              Team upskilled in accessibility testing practices, spreading
              evaluation expertise across the organization.
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
              href="https://design-system.hpe.design/components"
              label="HPE Design System — Components"
              target="_blank"
              rel="noreferrer"
            />
          </Box>
          <Box as="li" margin={{ bottom: "xsmall" }}>
            <Anchor
              href="https://design-system.hpe.design/components/button"
              label="Example: Button component accessibility evaluation"
              target="_blank"
              rel="noreferrer"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  ),
};
