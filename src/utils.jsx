import {
 IconList,
 IconDashboard,
 IconSettings,
 IconUsers,
 IconReceipt2,
} from "@tabler/icons-react";
import Dashboard from "./pages/dashboard";
import Records from "./pages/records";
import Billing from "./pages/billing";
import Users from "./pages/users";
import Settings from "./pages/settings";

export const header = [
 { id: 1, name: "Name" },
 { id: 2, name: "Email" },
 { id: 3, name: "Phone" },
 //  { id: 4, name: "Address" },
 //  { id: 5, name: "Manufacturer" },
 //  { id: 6, name: "Model" },
 //  { id: 7, name: "Color" },
 //  { id: 8, name: "Registration" },
 { id: 9, name: "Date Parked" },
];

export const body = [
 {
  id: 1,
  name: "John Doe",
  email: "johndoe@gmail.com",
  phone_number: "0244123456",
  address: "Tema",
  key_number: "q1w2e3r4t5",
  manufacturer: "Toyota",
  model: "Corolla",
  color: "White",
  registration: "GR-2022-01",
  date_parked: 1681141765,
 },
 {
  id: 2,
  name: "Janet Kenneth",
  email: "janetkenneth@gmail.com",
  phone_number: "0244234567",
  address: "Tema",
  key_number: "a1s2d3f4g5",
  manufacturer: "Honda",
  model: "Civic",
  color: "Blue",
  registration: "GR-2022-02",
  date_parked: 1681141765,
 },
 {
  id: 3,
  name: "David Lee",
  email: "davidlee@gmail.com",
  phone_number: "0244345678",
  address: "Tema",
  key_number: "h5j6k7l8p9",
  manufacturer: "Ford",
  model: "Mustang",
  color: "Red",
  registration: "GR-2022-03",
  date_parked: 1681141765,
 },
 {
  id: 4,
  name: "Sarah Johnson",
  email: "sarahjohnson@gmail.com",
  phone_number: "0244456789",
  address: "Tema",
  key_number: "z9x8c7v6b5",
  manufacturer: "Chevrolet",
  model: "Camaro",
  color: "Yellow",
  registration: "GR-2022-04",
  date_parked: 1681141765,
 },
 {
  id: 5,
  name: "Michael Brown",
  email: "michaelbrown@gmail.com",
  phone_number: "0244567890",
  address: "Tema",
  key_number: "p0o9i8u7y6",
  manufacturer: "BMW",
  model: "M3",
  color: "Black",
  registration: "GR-2022-05",
  date_parked: 1681141765,
 },
 {
  id: 6,
  name: "Emily Davis",
  email: "emilydavis@gmail.com",
  phone_number: "0244678901",
  address: "Tema",
  key_number: "t5r4e3w2q1",
  manufacturer: "Audi",
  model: "A4",
  color: "Gray",
  registration: "GR-2022-06",
  date_parked: 1681141765,
 },
 {
  id: 7,
  name: "William Wilson",
  email: "williamwilson@gmail.com",
  phone_number: "0244789012",
  address: "Tema",
  key_number: "b5v6c7x8z9",
  manufacturer: "Mercedes-Benz",
  model: "C-Class",
  color: "Silver",
  registration: "GR-2022-07",
  date_parked: 1681141765,
 },
 {
  id: 8,
  name: "Olivia Taylor",
  email: "oliviataylor@gmail.com",
  phone_number: "0244890123",
  address: "Tema",
  key_number: "y6t5r4e3w2",
  manufacturer: "Porsche",
  model: "911",
  color: "Gray",
  registration: "GR-2022-08",
  date_parked: 1681141765,
 },
 {
  id: 9,
  name: "Jordan Smithen",
  email: "jordam.smithen@example.com",
  phone_number: "555-1234",
  address: "Tema",
  key_number: "123456",
  manufacturer: "Toyota",
  model: "Camry",
  color: "Red",
  registration: "ABC-123",
  date_parked: 1649836800, // May 12, 2022
 },
 {
  id: 10,
  name: "Jane Doe",
  email: "jane.doe@example.com",
  phone_number: "555-5678",
  address: "Tema",
  key_number: "abcdef",
  manufacturer: "Ford",
  model: "F-150",
  color: "Blue",
  registration: "XYZ-789",
  date_parked: 1649788800, // May 11, 2022
 },
 {
  id: 11,
  name: "Bob Johnson",
  email: "bob.johnson@example.com",
  phone_number: "555-4321",
  address: "Tema",
  key_number: "1a2b3c",
  manufacturer: "Honda",
  model: "Civic",
  color: "Green",
  registration: "DEF-456",
  date_parked: 1649851200, // May 12, 2022
 },
 {
  id: 12,
  name: "Alice Brown",
  email: "alice.brown@example.com",
  phone_number: "555-8765",
  address: "Tema",
  key_number: "ghijkl",
  manufacturer: "Chevrolet",
  model: "Malibu",
  color: "Black",
  registration: "GHI-789",
  date_parked: 1649913600, // May 13, 2022
 },
 {
  id: 13,
  name: "Mike Wilson",
  email: "mike.wilson@example.com",
  phone_number: "555-2468",
  address: "Tema",
  key_number: "mnopqr",
  manufacturer: "Nissan",
  model: "Altima",
  color: "Silver",
  registration: "JKL-012",
  date_parked: 1649990400, // May 14, 2022
 },
 {
  id: 14,
  name: "Sara Lee",
  email: "sara.lee@example.com",
  phone_number: "555-1357",
  address: "Tema",
  key_number: "stuvwx",
  manufacturer: "Toyota",
  model: "Corolla",
  color: "White",
  registration: "MNO-345",
  date_parked: 1650067200, // May 15, 2022
 },
 {
  id: 15,
  name: "Tom Jones",
  email: "tom.jones@example.com",
  phone_number: "555-9753",
  address: "Tema",
  key_number: "yz0123",
  manufacturer: "Ford",
  model: "Mustang",
  color: "Yellow",
  registration: "PQR-678",
  date_parked: 1650144000, // May 16, 2022
 },
 {
  id: 16,
  name: "Karen Davis",
  email: "karen.davis@example.com",
  phone_number: "555-8642",
  address: "Tema",
  key_number: "456789",
  manufacturer: "Honda",
  model: "Accord",
  color: "Silver",
  registration: "STU-901",
  date_parked: 1650230400, // May 17,
 },
];

export const routes = [
 {
  id: 1,
  path: "/dashboard",
  label: "Dashboard",
  icon: IconDashboard,
  element: <Dashboard />,
 },
 {
  id: 2,
  path: "/records",
  label: "Records",
  icon: IconList,
  element: <Records />,
 },
 {
  id: 3,
  path: "/billing",
  label: "Billing",
  icon: IconReceipt2,
  element: <Billing />,
 },
 {
  id: 4,
  path: "/users",
  label: "Users",
  icon: IconUsers,
  element: <Users />,
 },
 {
  id: 5,
  path: "/settings",
  label: "Settings",
  icon: IconSettings,
  element: <Settings />,
 },
];
