import { useDisclosure } from "@mantine/hooks";
import { Modal, useMantineTheme } from "@mantine/core";
import Form from "../components/form";

function Demo({ opened, close }) {
 const theme = useMantineTheme();

 return (
  <>
   <Modal
    opened={opened}
    onClose={close}
    title="Data Entry"
    overlayProps={{
     color:
      theme.colorScheme === "dark"
       ? theme.colors.dark[9]
       : theme.colors.gray[2],
     opacity: 0.55,
     blur: 3,
    }}
    centered
   >
    <Form onClose={close}/>
   </Modal>
  </>
 );
}
export default Demo;
