import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brown: "#4e342e",
        "primary-green": "#4CAF50",
        "brown-200": "#424242",
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".clip-path": {
          clipPath: "ellipse(130% 100% at 50% 0%)",
        },
        ".header-before": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundImage:
            "url('https://ik.imagekit.io/145agqxu54x/starwar/star-wars_KDqPIeq-h.webp?updatedAt=1692680161673')",
          backgroundSize: "cover",
          clipPath: "ellipse(130% 100% at 50% 0%)",
          zIndex: "-1",
        },
      });
    }),
  ],
};
export default config;
