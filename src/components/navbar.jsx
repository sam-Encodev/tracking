import {
 createStyles,
 Navbar,
 Group,
 getStylesRef,
 rem,
} from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { IconLogout } from "@tabler/icons-react";
import { routes } from "../utils";

const useStyles = createStyles((theme) => ({
 header: {
  paddingBottom: theme.spacing.md,
  marginBottom: `calc(${theme.spacing.md} * 1.5)`,
  borderBottom: `${rem(1)} solid ${
   theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
  }`,
 },

 footer: {
  paddingTop: theme.spacing.md,
  marginTop: theme.spacing.md,
  borderTop: `${rem(1)} solid ${
   theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
  }`,
 },

 link: {
  ...theme.fn.focusStyles(),
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  fontSize: theme.fontSizes.sm,
  color:
   theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
  padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
  borderRadius: theme.radius.sm,
  fontWeight: 500,

  "&:hover": {
   backgroundColor:
    theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
   color: theme.colorScheme === "dark" ? theme.white : theme.black,

   [`& .${getStylesRef("icon")}`]: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
   },
  },
 },

 linkIcon: {
  ref: getStylesRef("icon"),
  color:
   theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
  marginRight: theme.spacing.sm,
 },

 linkActive: {
  "&, &:hover": {
   backgroundColor: theme.fn.variant({
    variant: "light",
    color: theme.primaryColor,
   }).background,
   color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
    .color,
   [`& .${getStylesRef("icon")}`]: {
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
     .color,
   },
  },
 },
}));

function Navigation() {
 const { classes, cx } = useStyles();
 const { pathname } = useLocation();

 const setActive = (path) => {
  if (path === pathname) {
   return [classes.linkActive];
  }
 };

 const links = routes.map((item) => (
  <Link
   key={item.id}
   to={item.path}
   className={cx(classes.link, setActive(item.path))}
  >
   <item.icon className={classes.linkIcon} stroke={1.5} />
   <span>{item.label}</span>
  </Link>
 ));
 return (
  <Navbar height={850} width={{ sm: 300 }} p="md">
   <Navbar.Section grow>
    <Group className={classes.header} position="apart">
     Company Logo
    </Group>
    {links}
   </Navbar.Section>

   <Navbar.Section className={classes.footer}>
    <a
     href="#"
     className={classes.link}
     onClick={(event) => event.preventDefault()}
    >
     <IconLogout className={classes.linkIcon} stroke={1.5} />
     <span>Logout</span>
    </a>
   </Navbar.Section>
  </Navbar>
 );
}
export default Navigation;
