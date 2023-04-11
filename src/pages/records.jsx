import { Text, Space } from '@mantine/core';
import TableView from "../components/table";
import AddButton from "../components/button";
import Modal from '../components/modal'
import { useDisclosure } from '@mantine/hooks';

function Records() {
    const [opened, { open, close }] = useDisclosure(false);
 return (
  <>
   <p>Records</p>
   <AddButton open={open} />
   <Space h="md" />
   <TableView />


   <Modal opened={opened}  close={close}/>
  </>
 );
}

export default Records;
