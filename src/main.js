const { Contact, AddressBook } = require("./addressBook");

const addressBook = new AddressBook();

try {
    const contact1 = new Contact("Amit", "Sharma", "MG Road", "Mumbai", "Maharashtra", "400001", "9876543210", "amit.sharma@example.com");
    const contact2 = new Contact("Priya", "Verma", "Brigade Road", "Bangalore", "Karnataka", "560001", "9876543211", "priya.verma@example.com");
    const contact3 = new Contact("Raj", "Kumar", "Park Street", "Kolkata", "West Bengal", "700001", "9876543212", "raj.kumar@example.com");

    addressBook.addContact(contact1);
    addressBook.addContact(contact2);
    addressBook.addContact(contact3);

    console.log("\nBefore Sorting:");
    console.log(addressBook.listContacts());

    addressBook.sortContactsByName();

    console.log("\nAfter Sorting:");
    console.log(addressBook.listContacts());

} catch (error) {
    console.error(error.message);
}
