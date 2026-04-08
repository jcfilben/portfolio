import React, { useState, useEffect, useRef } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
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
  Main,
  Menu,
  Nav,
  Paragraph,
  Page,
  PageContent,
  ResponsiveContext,
  Tag,
  Text,
  Avatar,
} from "grommet";
import { theme } from "../theme";
import { HomeRounded, Menu as MenuIcon } from "grommet-icons";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pageTopRef = useRef(null);
  const [pageTitle, setPageTitle] = useState("Jessica Rosenquist");
  const [pageSubtitle, setPageSubtitle] = useState(
    "Software Engineer · Accessibility Advocate · Open Source Maintainer",
  );
  const [pageCTA, setPageCTA] = useState("Explore Projects");

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      const main = document.querySelector("main");
      if (main) {
        main.scrollTop = 0;
        if (typeof main.scrollTo === "function") {
          main.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
      }

      if (pageTopRef.current) {
        pageTopRef.current.scrollIntoView({ block: "start", behavior: "auto" });
      }
    });

    return () => window.cancelAnimationFrame(id);
  }, [location.pathname]);

  return (
    <Grommet
      options={{ box: { cssGap: true } }}
      background={theme.global.colors.cream}
      full
      theme={theme}
    >
      <div ref={pageTopRef} />
      <Page kind="wide">
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
                {location.pathname === "/" || size === "small" ? (
                  // <Button
                  //   icon={<HomeRounded color="cream" />}
                  //   plain
                  //   onClick={() => navigate("/")}
                  // />
                  <Avatar border onClick={() => navigate("/")}>
                    JR
                  </Avatar>
                ) : (
                  <Anchor
                    style={{
                      textTransform: "uppercase",
                    }}
                    label="Jessica Rosenquist"
                    href="/"
                  />
                )}

                {size === "small" ? (
                  <Menu
                    plain
                    dropAlign={{ top: "bottom", right: "right" }}
                    icon={<MenuIcon color="cream" />}
                    items={[
                      {
                        label: "Projects",
                        onClick: () => navigate("/projects"),
                      },
                      { label: "About", onClick: () => navigate("/about") },
                      { label: "Contact", onClick: () => navigate("/contact") },
                    ]}
                  />
                ) : (
                  <Nav
                    direction="row"
                    alignSelf="center"
                    alignContent="center"
                    justify="center"
                    gap="large"
                  >
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
                  <Heading
                    textAlign={size === "small" ? "center" : "start"}
                    margin="none"
                    style={{
                      textTransform: "uppercase",
                      fontWeight: "lighter",
                    }}
                  >
                    {pageTitle}
                  </Heading>
                  <Text textAlign={size === "small" ? "center" : "start"}>
                    {pageSubtitle}
                  </Text>
                  {pageCTA && (
                    <Box
                      alignSelf={size === "small" ? "center" : "start"}
                      width="small"
                      margin={{ top: "medium" }}
                    >
                      <Button
                        primary
                        label={pageCTA}
                        onClick={() => navigate("/projects")}
                      />
                    </Box>
                  )}
                </Box>
                {location.pathname !== "/contact" && (
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
                )}
              </Header>
            </PageContent>
          )}
        </ResponsiveContext.Consumer>
        <PageContent fill pad={{ horizontal: "xlarge" }}>
          <Main>
            <Outlet
              context={{
                setTitle: setPageTitle,
                setSubtitle: setPageSubtitle,
                setCTA: setPageCTA,
              }}
            />
          </Main>
        </PageContent>
      </Page>
    </Grommet>
  );
};

export default Home;
