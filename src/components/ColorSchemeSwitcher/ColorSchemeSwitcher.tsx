import { ActionIcon, useMantineColorScheme, createStyles } from "@mantine/core";
import { IconSun, IconMoon } from "components/icons";

const useStyles = createStyles((_theme, _params, _getRef) => {
  return {
    wrapper: {
      // subscribe to color scheme changes right in your styles
      position: "absolute",
      top: 30,
      right: 30,
    },
  };
});

export const ColorSchemeSwitcher = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  const { classes } = useStyles();

  return (
    <ActionIcon
      className={classes.wrapper}
      color={isDark ? "yellow" : "blue"}
      variant="outline"
      onClick={() => toggleColorScheme()}
    >
      {isDark ? <IconSun /> : <IconMoon />}
    </ActionIcon>
  );
};
