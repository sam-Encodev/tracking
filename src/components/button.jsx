import { Group, Button, rem } from "@mantine/core";
import { IconBrandTwitter, IconPlus } from "@tabler/icons-react";

function AddButton({ open }) {
 return (
  <Group position="right">
   <Button
    onClick={() => open()}
    leftIcon={<IconPlus size={rem(18)} />}
    styles={(theme) => ({
     root: {
      backgroundColor: "#00acee",
      border: 0,
      height: rem(42),
      paddingLeft: rem(20),
      paddingRight: rem(20),
      "&:not([data-disabled])": theme.fn.hover({
       backgroundColor: theme.fn.darken("#00acee", 0.05),
      }),
     },

     leftIcon: {
      marginRight: theme.spacing.md,
     },
    })}
   >
    Add Record
   </Button>
  </Group>
 );
}

export default AddButton;
