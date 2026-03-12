import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Paragraph,
  Anchor,
  ResponsiveContext,
  Text,
  Image,
} from "grommet";
import { Linkedin, Github, LinkNext } from "grommet-icons";
import { useOutletContext } from "react-router-dom";

const Contact = () => {
  // set the layout title when this page mounts
  // useOutletContext comes from react-router-dom
  const outlet = useOutletContext?.() || {};
  const { setTitle, setSubtitle, setCTA } = outlet;

  useEffect(() => {
    if (setTitle) setTitle("Let's Connect");
    if (setSubtitle) setSubtitle("I'd love to hear from you!");
    if (setCTA) setCTA(undefined);
  }, [setTitle, setSubtitle, setCTA]);

  return (
    <Box
      fill="horizontal"
      width="100%"
      direction="row-responsive"
      gap="xlarge"
      pad={{ vertical: "xlarge" }}
    >
      <Card
        as="a"
        aria-label="LinkedIn Profile for Jessica"
        href="https://www.linkedin.com/in/jessica-filben"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        elevation="large"
        direction="row-responsive"
        pad="large"
        gap="large"
      >
        <Box overflow="hidden" width="xsmall" alignSelf="center">
          {/* <Image
            src="/LinkedinPic.jpg"
            alt="LinkedIn Profile Picture for Jessica"
            fit="contain"
          /> */}
          <Linkedin color="#000" size="xxlarge" />
        </Box>
        <Box gap="medium">
          <Text color="brown" size="xlarge">Reach out on LinkedIn</Text>
          <LinkNext aria-hidden="true" color="brown" />
          {/* <Button primary label="Find me on LinkedIn" color="rust" /> */}
          <Box>
            {/* <Text size="xlarge">Jessica Rosenquist</Text>
            <Text>Lead Developer at</Text>
            <Text>Hewlett Packard Enterprise</Text> */}
          </Box>
        </Box>
        {/* <Linkedin size="xlarge" /> */}
      </Card>
      <Card
        as="a"
        aria-label="GitHub Profile for Jessica"
        href="https://github.com/jcfilben"
        target="_blank"
        rel="noopener noreferrer"
        elevation="large"
        direction="row-responsive"
        pad="large"
        gap="large"
        style={{ textDecoration: "none" }}
      >
        <Box round="full" overflow="hidden" width="xsmall" alignSelf="center">
          {/* <Image
            src="/GithubPic.jpg"
            alt="GitHub Profile Picture for Jessica"
            fit="contain"
          /> */}
          <Github color="brown" size="xxlarge" />
        </Box>
        <Box gap="medium">
          <Text color="brown" size="xlarge">
            Check out my GitHub
          </Text>
          <LinkNext aria-hidden="true" color="#000" />
          {/* <Button primary label="Find me on LinkedIn" color="rust" /> */}
          <Box>
            {/* <Text size="xlarge">jcfilben</Text> */}
            {/* <Text>Lead Developer at</Text>
            <Text>Hewlett Packard Enterprise</Text> */}
          </Box>
        </Box>
        {/* <Linkedin size="xlarge" /> */}
      </Card>
      {/* <Card direction="row-responsive" background="rust" pad="large" gap="large">
        <Box round="full" overflow="hidden" width="small" alignSelf="center">
          <Image
            src="/GithubPic.jpg"
            alt="GitHub Profile Picture for Jessica"
            fit="contain"
          />
        </Box>
        <Text size="xlarge">Check out my GitHub</Text>
        <Text>GitHub profile: jcfilben</Text>
        <Button primary label="Check out my GitHub" color="rust" />
      </Card> */}
      {/* <Box basis="3/4" gap="large">
        <Heading level={2}>Get in Touch</Heading>

        <Paragraph size="large">
          I'm always open to interesting projects and collaboration
          opportunities. Feel free to reach out through any of the channels
          below.
        </Paragraph>

        <ResponsiveContext.Consumer>
          {(size) => (
            <Box gap="medium" direction={size === "small" ? "column" : "row"}>
              <Card
                background="white"
                elevation="xsmall"
                width={{ min: "small", max: "medium" }}
              >
                <CardBody gap="medium" pad="medium">
                  <Box alignSelf="center" pad="medium">
                  </Box>
                  <Heading
                    margin="none"
                    level={3}
                    size="small"
                    textAlign="center"
                  >
                    LinkedIn
                  </Heading>
                  <Paragraph textAlign="center" size="small">
                    Connect with me on LinkedIn to see my professional
                    experience and projects.
                  </Paragraph>
                  <Box alignSelf="center" margin={{ top: "small" }}>
                    <Anchor
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      label="Visit LinkedIn"
                    />
                  </Box>
                </CardBody>
              </Card>
              <Card
                background="white"
                elevation="xsmall"
                width={{ min: "small", max: "medium" }}
              >
                <CardBody gap="medium" pad="medium">
                  <Box alignSelf="center" pad="medium">
                    <Github color="rust" size="large" />
                  </Box>
                  <Heading
                    margin="none"
                    level={3}
                    size="small"
                    textAlign="center"
                  >
                    GitHub
                  </Heading>
                  <Paragraph textAlign="center" size="small">
                    Check out my repositories and code projects on GitHub.
                  </Paragraph>
                  <Box alignSelf="center" margin={{ top: "small" }}>
                    <Anchor
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      label="Visit GitHub"
                    />
                  </Box>
                </CardBody>
              </Card>
            </Box>
          )}
        </ResponsiveContext.Consumer>

        <Box gap="medium" margin={{ top: "large" }}>
          <Heading level={3}>Or send me an email</Heading>
          <Paragraph>
            Prefer direct contact? Email me at{" "}
            <Anchor
              href="mailto:contact@example.com"
              label="contact@example.com"
            />
          </Paragraph>
        </Box>
      </Box> */}
    </Box>
  );
};

export default Contact;
