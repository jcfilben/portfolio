import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Accordion,
  AccordionPanel,
  Anchor,
  Button,
  Box,
  Card,
  CardHeader,
  CardBody,
  Grommet,
  Header,
  Heading,
  Image,
  Menu,
  Nav,
  Paragraph,
  Page,
  PageContent,
  ResponsiveContext,
  Tag,
  Text,
} from "grommet";
import { theme } from "../theme";
import { HomeRounded, Menu as MenuIcon } from "grommet-icons";

const Home = () => {
  const [pageTitle, setPageTitle] = useState("Jessica Rosenquist");
  const [pageSubtitle, setPageSubtitle] = useState(
    "Frontend UI/UX Developer & Accessibility Advocate"
  );

  return (
    <Grommet options={{ box: { cssGap: true } }} full theme={theme}>
      <Page kind="wide" background={theme.global.colors.cream}>
        <ResponsiveContext.Consumer>
          {(size) => (
            <PageContent
              fill="horizontal"
              pad={{ horizontal: "xlarge" }}
              background="forestGreen"
              round={{ corner: "bottom", size: "medium" }}
            >
              <Box
                pad={{ top: "small" }}
                direction="row"
                justify="between"
                fill="horizontal"
              >
                <Button icon={<HomeRounded color="cream" />} plain />
                {size === "small" ? (
                  <Menu
                    // label="Click me"
                    plain
                    dropAlign={{ top: "bottom", right: "right" }}
                    icon={<MenuIcon color="cream" />}
                    items={[
                      { label: "Projects", onClick: () => {} },
                      { label: "About", onClick: () => {} },
                      { label: "Contact", onClick: () => {} },
                    ]}
                  />
                ) : (
                  <Nav direction="row" alignSelf="end" gap="large">
                    {/* <Button label="Projects" secondary /> */}
                    <Anchor href="/projects" label="Projects" />
                    <Anchor href="/about" label="About" />
                    <Anchor href="/contact" label="Contact" />
                  </Nav>
                )}
              </Box>
              <Header alignSelf="left" direction="row-responsive" gap="none">
                <Box
                  pad={{ top: "large", bottom: "medium" }}
                  direction="column"
                  gap="small"
                >
                  {/* pageTitle and pageSubtitle can be updated by child routes via Outlet context */}
                  <Heading
                    textAlign={size === "small" ? "center" : "start"}
                    margin="none"
                  >
                    {pageTitle}
                  </Heading>
                  <Text textAlign={size === "small" ? "center" : "start"}>
                    {pageSubtitle}
                  </Text>
                  <Box
                    alignSelf={size === "small" ? "center" : "start"}
                    width="small"
                    margin={{ top: "medium" }}
                  >
                    <Button primary label="Explore Projects" />
                  </Box>
                </Box>
                <Box
                  width={size === "small" ? "400px" : "600px"}
                  alignSelf={size === "small" ? "center" : "end"}
                >
                  <Image
                    style={{
                      maskImage:
                        "radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 85%)",
                      WebkitMaskImage:
                        "radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
                      // borderRadius: '50%', // Make the container a circle
                    }}
                    src="/fade_gemini.png"
                    // src="/AccessibilityImage.png"
                    alt="Accessibility Illustration"
                  />
                </Box>
              </Header>
            </PageContent>
          )}
        </ResponsiveContext.Consumer>
        <PageContent fill="vertical" pad={{ horizontal: "xlarge" }}>
          {/* <hr /> */}
          <Outlet
            context={{ setTitle: setPageTitle, setSubtitle: setPageSubtitle }}
          />
        </PageContent>
        {/* </Box> */}
      </Page>
    </Grommet>
  );
};

export default Home;
