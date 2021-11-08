import {
  useLocalStorageValue,
  useColorScheme as usePreferredColorScheme,
} from "@mantine/hooks";
import { ColorScheme } from "@mantine/styles";

export const useColorScheme = (initialColorScheme: ColorScheme = "dark") => {
  const preferredColorScheme = usePreferredColorScheme();

  const [colorScheme, setColorScheme] = useLocalStorageValue({
    key: "mantine-color-scheme",
    defaultValue: preferredColorScheme || initialColorScheme,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return {
    colorScheme,
    toggleColorScheme,
  };
};
