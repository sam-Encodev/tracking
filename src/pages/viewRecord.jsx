import { Text, Space, List, Title } from "@mantine/core";
import { body, convertTime } from "../utils";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
 const filteredData = body.filter(
  (item) => item.id === Number(params.recordID)
 );
 return { filteredData };
}


function ViewRecords() {
 const { filteredData } = useLoaderData();

 const data = filteredData.map((element) => (
  <div key={element.id}>
   <Title order={1}>{element.name}</Title>
   <Text>Email: {element.email}</Text>
   <Text>Mobile Number: {element.phone}</Text>
   <Text>Address: {element.address}</Text>
   <Text>Manufacturer: {element.manufacturer}</Text>
   <Text>Model: {element.model}</Text>
   <Text>Color: {element.color}</Text>
   <Text>Registration: {element.registration}</Text>
   <Text>Date Parked: {convertTime(element.date_parked)}</Text>
  </div>
 ));
 return (
  <div>
   <p>Records</p>

   {data}
  </div>
 );
}

export default ViewRecords;
