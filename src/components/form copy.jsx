import {
 useForm,
 isNotEmpty,
 isEmail,
 isInRange,
 hasLength,
 matches,
} from "@mantine/form";
import { Button, Group, TextInput, NumberInput, Box } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { notifications } from "@mantine/notifications";

function Demo() {
 const form = useForm({
  initialValues: {
   ref: "",
   date_in: "",
   date_out: "",
   customer: "",
   size: "",
   haulier: "",
   depot: "",
   cargo: "",
   sheet: "",
  },

  validate: {
   ref: (value) => (value.length < 2 ? "Our Ref is too short" : null),
   date_in: (value) => (value.length < 2 ? "Date in is too short" : null),
   date_out: (value) => (value.length < 2 ? "Date out is too short" : null),
   customer: (value) => (value.length < 2 ? "Customer is too short" : null),
   size: (value) => (value.length < 2 ? "Size is too short" : null),
   haulier: (value) => (value.length < 2 ? "Haulier is too short" : null),
   depot: (value) => (value.length < 2 ? "Depot is too short" : null),
   cargo: (value) => (value.length < 2 ? "Cargo name is too short" : null),
   sheet: (value) => (value.length < 2 ? "Sheet is too short" : null),
  },
 });

 return (
  <Box
   component="form"
   maw={400}
   mx="auto"
   onSubmit={form.onSubmit(() => {
    console.log({ form: form.values });
   })}
  >
   <TextInput
    label="Our Ref"
    placeholder="our ref"
    mt="md"
    {...form.getInputProps("ref")}
   />
   <DateInput
    label="Date in"
    placeholder="Date in"
    mt="md"
    {...form.getInputProps("date_in")}
    valueFormat="YYYY MMM DD"
   />
   <DateInput
    label="Date out"
    placeholder="Date out"
    mt="md"
    {...form.getInputProps("date_out")}
    valueFormat="YYYY MMM DD"
   />
   <TextInput
    label="Customer"
    placeholder="Customer"
    mt="md"
    {...form.getInputProps("customer")}
   />
   <TextInput
    label="Size"
    mt="md"
    {...form.getInputProps("size")}
    placeholder="size"
   />
   <TextInput
    label="Haulier"
    placeholder="Haulier"
    mt="md"
    {...form.getInputProps("haulier")}
   />
   <TextInput
    label="Box No/Depot"
    placeholder="Box No/Depot"
    mt="md"
    {...form.getInputProps("depot")}
   />
   <TextInput
    label="Cargo"
    placeholder="Cargo"
    mt="md"
    {...form.getInputProps("cargo")}
   />
   <TextInput
    label="Sheet"
    placeholder="Sheet"
    mt="md"
    {...form.getInputProps("sheet")}
   />
   <Group position="right" mt="md">
    <Button type="submit">Submit</Button>
   </Group>
  </Box>
 );
}

export default Demo;
