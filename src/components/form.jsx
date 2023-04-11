import {
 useForm,
 isNotEmpty,
 isEmail,
 isInRange,
 hasLength,
 matches,
} from "@mantine/form";
import {
 Button,
 Group,
 TextInput,
 NumberInput,
 Box,
 ColorPicker,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { body } from "../utils";

function Demo({ onClose }) {
 const form = useForm({
  initialValues: {
   id: body.length+1,
   name: "",
   email: "",
   phone_number: "",
   address: "",
   manufacturer: "",
   model: "",
   color: "",
   registration: "",
   date_parked: "",
  },

  validate: {
   name: (value) => (value.length < 2 ? "Name is too short" : null),
   email: (value) => (value.length < 2 ? "Email is too short" : null),
   phone_number: (value) =>
    value.length < 2 ? "Mobile Number is too short" : null,
   address: (value) => (value.length < 2 ? "Address is too short" : null),
   manufacturer: (value) =>
    value.length < 2 ? "Manufacturer is too short" : null,
   model: (value) => (value.length < 2 ? "Model is too short" : null),
   color: (value) => (value.length < 2 ? "Color is too short" : null),
   registration: (value) =>
    value.length < 2 ? "Registration is too short" : null,
   date_parked: (value) =>
    value.length < 2 ? "Date parked is too short" : null,
  },
 });

 return (
  <Box
   component="form"
   maw={400}
   mx="auto"
   onSubmit={form.onSubmit(() => {
    // console.log(form.values);

    body.push(form.values);
    onClose();
   })}
  >
   <TextInput
    data-autofocus
    label="Name"
    placeholder="name"
    mt="md"
    {...form.getInputProps("name")}
   />
   <TextInput
    label="Email"
    placeholder="Email"
    mt="md"
    {...form.getInputProps("email")}
   />
   <TextInput
    label="Mobile Number"
    placeholder="Mobile Number"
    mt="md"
    {...form.getInputProps("phone_number")}
   />

   <TextInput
    label="Address"
    placeholder="Adress"
    mt="md"
    {...form.getInputProps("address")}
   />

   <TextInput
    label="Manufacturer"
    placeholder="Manufacturer"
    mt="md"
    {...form.getInputProps("manufacturer")}
   />

   <TextInput
    label="Model"
    placeholder="Model"
    mt="md"
    {...form.getInputProps("model")}
   />

   <TextInput
    label="Color"
    placeholder="Color"
    mt="md"
    {...form.getInputProps("color")}
   />

   <TextInput
    label="Registration"
    placeholder="Registration"
    mt="md"
    {...form.getInputProps("registration")}
   />

   <DateInput
    label="Date parked"
    placeholder="Date parked"
    mt="md"
    {...form.getInputProps("date_parked")}
    valueFormat="YYYY MMM DD"
   />
   <Group position="right" mt="md">
    <Button type="submit">Submit</Button>
   </Group>
  </Box>
 );
}

export default Demo;
