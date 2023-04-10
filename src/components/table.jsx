import { ScrollArea, Table } from "@mantine/core";
import { header, body } from "../utils";
import { useNavigate } from "react-router-dom";

function TableView() {
 const navigate = useNavigate();
 const columns = header.map((element) => (
  <th key={element.id}>{element.name}</th>
 ));

 const handleRoute = (id) => {
  navigate(`/records/${id}`);
 };

 const rows = body.map((element) => (
  <tr key={element.id} onClick={() => handleRoute(element.id)}>
   <td colSpan={1}>{element.name}</td>
   <td>{element.email}</td>
   <td>{element.phone_number}</td>
   {/* <td>{element.address}</td> */}
   {/* <td>{element.manufacturer}</td>
   <td>{element.model}</td>
   <td>{element.color}</td> */}
   {/* <td>{element.registration}</td> */}
   <td>{element.date_parked}</td>
  </tr>
 ));

 return (
  <ScrollArea>
   <Table
    highlightOnHover
    withBorder
    horizontalSpacing="xl"
    sx={{ minWidth: 1000 }}
   >
    <thead>
     <tr>{columns}</tr>
    </thead>
    <tbody>{rows}</tbody>
   </Table>
  </ScrollArea>
 );
}

export default TableView;
