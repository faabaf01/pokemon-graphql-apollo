// theme.js
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/noto-mono";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Noto Mono, sans-serif",
        color: "black",
      },
      html: {
        fontFamily: "Noto Mono, sans-serif",
        color: "black",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "inherit",
        color: "black",
      },
    },
  },
});

export default theme;
