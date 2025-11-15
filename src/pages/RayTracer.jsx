import React, { useEffect } from "react";
import {
  Accordion,
  AccordionPanel,
  Anchor,
  Box,
  Card,
  CardHeader,
  CardBody,
  Header,
  Heading,
  Image,
  Markdown,
  Paragraph,
  Page,
  PageContent,
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableCell as GrommetTableCell,
  Tag,
  Text,
} from "grommet";
import { useOutletContext } from "react-router-dom";

const colors = {
  tan: "#D8CBC7",
  blue: "#4F6367",
  pink: "#A2666F",
  brown: "#330F0A",
};

const TableHeaderCell = ({ children }) => (
  <GrommetTableCell
    background="#ffffff15"
    border={{
      side: "bottom",
      size: "small",
    }}
  >
    {children}
  </GrommetTableCell>
);

const TableCell = ({ children }) => (
  <GrommetTableCell border="bottom">
    <Markdown>{children}</Markdown>
  </GrommetTableCell>
);

const RayTracer = () => {
  // set the layout title when this page mounts
  // useOutletContext comes from react-router-dom
  const outlet = useOutletContext?.() || {};
  const { setTitle, setSubtitle } = outlet;

  useEffect(() => {
    if (setTitle) setTitle("Ray Tracer");
    if (setSubtitle) setSubtitle("subtitle");
    return () => {
      if (setTitle) setTitle("Jessica Rosenquist");
      if (setSubtitle) setSubtitle("Frontend UI/UX Developer & Accessibility Advocate");
    };
  }, [setTitle, setSubtitle]);
  return (
    <>
      <Paragraph>
        I created a ray tracing program that uses the Phong illumination model.
        It is written in C++ and uses the Eigen library for vector and matrix
        operations. The wavefront object model format is used to read in object
        files.
      </Paragraph>

      <Paragraph>
        Based on input from driver files the program will output an image.
      </Paragraph>

      <Paragraph>
        The following images were generated using the ray tracer.
      </Paragraph>

      <Box
        direction="row-responsive"
        justify="stretch"
        alignSelf="center"
        alignContent="center"
        wrap
        gap="medium"
      >
        <Box
          round="large"
          pad="medium"
          background="#ffffff15"
          height={{ max: "medium", min: "xsmall" }}
          width={{ max: "medium", min: "xsmall" }}
        >
          <Box round="medium" fill overflow="hidden">
            <Image width="100%" fit="cover" src="/RayTracer_0.png" />
          </Box>
        </Box>
        <Box
          round="large"
          pad="medium"
          background="#ffffff15"
          height={{ max: "medium", min: "xsmall" }}
          width={{ max: "medium", min: "xsmall" }}
        >
          <Box round="medium" fill overflow="hidden">
            <Image width="100%" fit="cover" src="/RayTracer_3.png" />
          </Box>
        </Box>
        <Box
          round="large"
          pad="medium"
          background="#ffffff15"
          height={{ max: "medium", min: "xsmall" }}
          width={{ max: "medium", min: "xsmall" }}
        >
          <Box round="medium" fill overflow="hidden">
            <Image width="100%" fit="cover" src="/RayTracer_4.png" />
          </Box>
        </Box>
      </Box>

      <Paragraph>
        Below is an example of a simple driver file and the resulting image.
      </Paragraph>

      <Box direction="row-responsive" gap="medium">
        <Box
          alignSelf="center"
          round="large"
          pad="medium"
          background="#ffffff15"
            // height="medium"
            // width="medium"
          height={{ max: "medium", min: "small" }}
          width={{ max: "medium", min: "small" }}
        >
          <Box round="medium" fill overflow="hidden">
            <Image width="100%" fit="cover" src="/RayTracer_2.png" />
          </Box>
        </Box>
        <Box
          round="large"
          pad="medium"
          background="#ffffff15"
          height="medium"
          fill="horizontal"
          flex
          width={{ min: "medium" }}
        >
          <Box fill overflow="auto">
            <code
              style={{
                display: "block",
                "white-space": "pre-wrap",
                "font-size": "14px",
              }}
            >
              {`camera 0 0 0 0 0 5 0 1 0 -5
bounds -4.6 4.6 -4.6 4.6
res 500 500
recursionlevel 3
ambient 0.4 0.4 0.4
light 30 0 20 1 0.5 0.5 0.5
light -30 0 20 1 0.5 0.5 0.5
light 0 -10 20 1 0.5 0.5 0.5
light 0 10 20 1 0.5 0.5 0.5

sphere 0 0 20 6 0.1 0.1 0.1 0.0 0.0 0.0 0.9 0.9 0.9 0.9 0.9 0.9 0
#top
sphere 0 5 5 3 0.1 0.1 0.1 0.5 0 0 0.5 0.5 0.5 0.5 0.5 0.5 0
#left
sphere 5 0 5 3 0.1 0.1 0.1 0.5 0 0 0.5 0.5 0.5 0.5 0.5 0.5 0
#right
sphere -5 0 5 3 0.1 0.1 0.1 0.5 0 0 0.5 0.5 0.5 0.5 0.5 0.5 0
#bottom
sphere 0 -5 5 3 0.1 0.1 0.1 0.5 0 0 0.5 0.5 0.5 0.5 0.5 0.5 0
#center
sphere 0 0 10 0.5 0.1 0.1 0.1 0.5 0 0 0.5 0.5 0.5 0.5 0.5 0.5 0`}
            </code>
          </Box>
        </Box>
      </Box>

      <Paragraph>
        Within the driver file you have control over the following:
      </Paragraph>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Command</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>recursionlevel `2`</TableCell>
            <TableCell>
              The maximum number of times a ray can be reflected or refracted.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              camera `ex` `ey` `ez` `lx` `ly` `lz` `ux` `uy` `uz` `a`
            </TableCell>
            <TableCell>
              `ex`, `ey`, and `ez` represent the location in coordinates of the
              focal point. `lx`, `ly`, and `lz` represent the location in
              coordinates of the look point. `ux`, `uy`, and `uz` is the
              direction of the up vector. The last argument, `a`, is the
              position on the near clipping plane in camera coordinates. `a`
              should always be a negative number.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>bounds `left` `right` `top` `bottom`</TableCell>
            <TableCell>The near clipping plane bounds.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>res `width` `height`</TableCell>
            <TableCell>The resolution of the image in pixels.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ambient `e_r` `e_g` `e_b`</TableCell>
            <TableCell>
              Ambient light with red `e_r`, green `e_g`, and blue `e_b` levels.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>light `x` `y` `z` `w` `e_r` `e_g` `e_b`</TableCell>
            <TableCell>
              This specifies the location of the light (`x`, `y`, `z`) and the
              emittance in red, green, and blue (`e_r`, `e_g`, `e_b`) of the
              light. The emittance values are between 0 and 1. The fourth value,
              `w`, is generally one, but a zero indicates a light source at
              infinity in the direction specified by `x`, `y`, and `z`.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              sphere `x` `y` `z` `r` `Ka_r` `Ka_g` `Ka_b` `Kd_r` `Kd_g` `Kd_b`
              `Ks_r` `Ks_g` `Ks_b` `Kr_r` `Kr_g` `Kr_b` `Ni`
            </TableCell>
            <TableCell>
              This specifies the location of the sphere (`x`, `y`, `z`) and its
              radius (`r`). The K values correspond to different kinds of
              reflectivity. `Ka` values are the amount that ambient light is
              reflected. `Kd` values are the amount that diffuse light is
              reflected. `Ks` values relate to specular lighting. `Kr` values
              relate to attenuation. `Ni` is the refractive index. A refractive
              index of 0 corresponds to no refraction, and in that case rays
              should not be passed through the sphere. In any other case, the
              transparency of the object (what proportion of the light passes
              through the object) should be 1 minus `Kr`.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>load `file.obj`</TableCell>
            <TableCell>Reads a .obj model file.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>trans move `tx` `ty` `tz`</TableCell>
            <TableCell>Translate (move) by the amounts indicated.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>trans rota `wx` `wy` `wz` `theta`</TableCell>
            <TableCell>
              Rotate as specified by the axis-angle rotation specification.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>trans scale `sx` `sy` `sz`</TableCell>
            <TableCell>Apply non-uniform scaling.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>trans clear</TableCell>
            <TableCell>
              Erase whatever transformation may have been defined before and
              resets the transformation matrix to the (4x4) identity matrix.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>cutoffAngle `45`</TableCell>
            <TableCell>
              The angle cutoff for smoothing. If this value is 45, the normal
              for a face's vertex will be calculated as the average of the
              adjoining faces with angle between their "true" normals and this
              face's "true" normal less than 45.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default RayTracer;
