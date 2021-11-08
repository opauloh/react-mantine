import {
  ColorSchemeProvider,
  GlobalStyles,
  MantineProvider,
} from "@mantine/styles";
import { ColorSchemeSwitcher } from "components";
import { useColorScheme } from "hooks/useColorScheme";

export function App() {
  const colorScheme = useColorScheme();
  return (
    <ColorSchemeProvider {...colorScheme}>
      <MantineProvider
        theme={{
          // Override any other properties from default theme
          fontFamily: "Open Sans, sans serif",
          spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
          colorScheme: colorScheme.colorScheme,
        }}
      >
        <GlobalStyles />
        <div>
          <ColorSchemeSwitcher />
          <header>
            <h1>
              Testing{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mantine.dev/"
              >
                Mantine!
              </a>
            </h1>
          </header>
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
