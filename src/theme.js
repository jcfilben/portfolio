import { css } from "styled-components";

// const colors = {
//   tan: "#D8CBC7",
//   blue: "#4F6367",
//   pink: "#A2666F",
//   brown: "#330F0A",
// };

export const theme = {
  global: {
    colors: {
      tan: "#D8CBC7",
      blue: "#4F6367",
      pink: "#A2666F",
      brown: "#330F0A",
      // text: "#330F0A",
      //   forestGreen: "#1E3F2E",
      //   forestGreen: "#2a4433",
      forestGreen: "#37493b",
      //   forestGreen: "#394b3d",
      //   cream: "#FCF8F5",
      cream: "#f2ecde",
      white: "#f5f3ed",
      // white: "#f5f4f0",
      //   rust: "#C8573C",
      rust: "#b34f37",
      sage: "#B0C4A5",
      taupe: "#8A7969",
      black: "#444444",
      text: {
        dark: "white",
        light: "brown",
      },
    },
    focus: {
      border: undefined,
      outline: {
        color: "brown",
        size: "2px",
        offset: "2px",
      },
      shadow: {
        color: "white",
        size: "2px",
        blur: "0px",
      },
      twoColor: true,
      inset: {
        border: undefined,
        outline: {
          color: "brown",
          size: "2px",
          offset: "-2px",
        },
        shadow: {
          color: "cream",
          size: "4px",
          blur: "0px",
          inset: true,
        },
        twoColor: true,
      },
    },
    // focus: {
    //   outline: {
    //     // color: "#34F6F2",
    //     // color: "#B1740F"
    //     color: "#4ECDC4",
    //   },
    // },
    font: {
      //   family: "'Lora', serif",
      //   face: `@font-face {
      //       font-family: 'Lora', serif;
      //       src: url('https://fonts.googleapis.com/css?family=Lora');
      //     }`,
      //   // family: "'PT', serif",
      //   // face: `@font-face {
      //   //   font-family: 'PT', serif;
      //   //   src: url('https://fonts.googleapis.com/css?family=PT+Serif');
      //   // }`
      //   //   family: "'Josefin Slab', serif",
      //   //   face: `@font-face {
      //   //        font-family: 'Josefin Slab', serif;
      //   //        src: url('https://fonts.googleapis.com/css?family=Josefin+Slab');
      //   //      }`,
      //   family: "'Merriweather Sans', sans-serif",
      //   face: `@font-face {
      //        font-family: 'Merriweather Sans', sans-serif;
      //        src: url('https://fonts.googleapis.com/css?family=Merriweather+Sans');
      //      }`,
    },
  },
  anchor: {
    color: "cream",
  },
  button: {
    default: {},
    primary: {
      background: {
        color: "rust",
      },
    },
  },
  heading: {
    // weight: "lighter",
    // extend: css`
    //   text-transform: uppercase;
    // `,
    // font: {
    //   family: "'Montserrat Alternates', sans-serif",
    //   face: `@font-face {
    //     font-family: 'Montserrat Alternates', sans-serif;
    //     src: url('https://fonts.googleapis.com/css?family=Montserrat+Alternates');
    //   }`
    // }
    // font: {
    //   family: "'Raleway', sans-serif",
    //   face: `@font-face {
    //     font-family: 'Raleway', sans-serif;
    //     src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');
    //   }`
    // }
  },
  menu: {
    background: "cream",
    container: {
      pad: "small",
    },
    drop: {
      elevation: "none",
    },
  },
  //   tag: {
  //     border: {
  //       color: "pink",
  //     },
  //   },
};
