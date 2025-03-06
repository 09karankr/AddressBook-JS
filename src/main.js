// Import AddressBook & Contact from addressBook.js
const { Contact, AddressBook } = require('./addressBook');

const addressBook = new AddressBook();
const contact1 = new Contact("Amit", "Sharma", "123 MG Road", "Mumbai", "Maharashtra", "400001", "9876543210", "amit.sharma@example.com");
const contact2 = new Contact("Priya", "Verma", "456 Park Street", "Kolkata", "West Bengal", "700001", "8765432109", "priya.verma@example.com");

addressBook.addContact(contact1);
addressBook.addContact(contact2);

console.log(addressBook.listContacts());
