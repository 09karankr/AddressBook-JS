const { Contact, AddressBook } = require("./addressBook");

// Create an AddressBook instance
const addressBook = new AddressBook();

// Create a new Address Book
const myBook = addressBook.createNewAddressBook();

try {
    // Add contacts
    const contact1 = new Contact("Amit", "Sharma", "123 MG Road", "Mumbai", "Maharashtra", "400001", "9876543210", "amit.sharma@example.com");
    const contact2 = new Contact("Priya", "Verma", "456 Nehru Nagar", "Delhi", "Delhi", "110011", "8765432109", "priya.verma@example.com");
    const duplicateContact = new Contact("Amit", "Sharma", "789 Bandra West", "Mumbai", "Maharashtra", "400050", "9998887770", "amit.duplicate@example.com");

    addressBook.addContactToBook(0, contact1);
    addressBook.addContactToBook(0, contact2);

    console.log("Contacts after adding:");
    console.log(addressBook.listContacts(0));

    // Try adding a duplicate contact
    try {
        addressBook.addContactToBook(0, duplicateContact);
    } catch (error) {
        console.error("\nError:", error.message);
    }

    // Find number of contacts
    console.log("\nNumber of contacts in the address book:", addressBook.getContactCount(0));

    // Find a contact
    const foundContact = addressBook.findContact(0, "Amit", "Sharma");
    console.log("\nFound Contact:");
    console.log(foundContact ? foundContact.toString() : "Contact not found");

    // Edit a contact
    addressBook.editContact(0, "Amit", "Sharma", { city: "Pune", state: "Maharashtra", zip: "411001" });

    console.log("\nContacts after editing:");
    console.log(addressBook.listContacts(0));

    // Delete a contact
    addressBook.deleteContact(0, "Amit", "Sharma");
    console.log("\nContacts after deletion:");
    console.log(addressBook.listContacts(0));

    // Find number of contacts after deletion
    console.log("\nNumber of contacts in the address book:", addressBook.getContactCount(0));

} catch (error) {
    console.error(error.message);
}
