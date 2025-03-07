const { Contact, AddressBook } = require("./addressBook");

// Create an AddressBook instance
const addressBook = new AddressBook();

// Create a new Address Book
const myBook = addressBook.createNewAddressBook();

try {
    // Add contacts
    const contact1 = new Contact("Amit", "Sharma", "123 MG Road", "Mumbai", "Maharashtra", "400001", "9876543210", "amit.sharma@example.com");
    const contact2 = new Contact("Priya", "Verma", "456 Nehru Nagar", "Delhi", "Delhi", "110011", "8765432109", "priya.verma@example.com");
    const contact3 = new Contact("Rahul", "Patil", "789 Bandra West", "Mumbai", "Maharashtra", "400050", "9998887770", "rahul.patil@example.com");
    const contact4 = new Contact("Neha", "Gupta", "101 Green Park", "Bangalore", "Karnataka", "560001", "8887776665", "neha.gupta@example.com");

    addressBook.addContactToBook(0, contact1);
    addressBook.addContactToBook(0, contact2);
    addressBook.addContactToBook(0, contact3);
    addressBook.addContactToBook(0, contact4);

    console.log("Contacts after adding:");
    console.log(addressBook.listContacts(0));

    // Search for people in Mumbai
    console.log("\nSearching for people in Mumbai:");
    const peopleInMumbai = addressBook.searchByCityOrState(0, "Mumbai", "");
    console.log(peopleInMumbai.map(contact => contact.toString()).join("\n"));

    // Search for people in Maharashtra
    console.log("\nSearching for people in Maharashtra:");
    const peopleInMaharashtra = addressBook.searchByCityOrState(0, "", "Maharashtra");
    console.log(peopleInMaharashtra.map(contact => contact.toString()).join("\n"));

} catch (error) {
    console.error(error.message);
}
