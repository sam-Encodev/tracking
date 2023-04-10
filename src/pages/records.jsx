import { Text, Space } from '@mantine/core';
import TableView from "../components/table";
import AddButton from "../components/button";

function Records() {
 return (
  <div>
   <p>Records</p>
   <AddButton />
   <Space h="md" />
   <TableView />
  </div>
 );
}

export default Records;
