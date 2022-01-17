import { ActionIcon, useMantineColorScheme, createStyles } from "@mantine/core";
import { IconSun, IconMoon } from "components/icons";

const useStyles = createStyles(
  (_theme, { isDark }: { isDark: boolean }, _getRef) => ({
    wrapper: {
      position: "absolute",
      top: isDark ? "auto" : "0",
      right: 30,
    },
  })
);

export const ColorSchemeSwitcher = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  const { classes } = useStyles({
    isDark,
  });

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
