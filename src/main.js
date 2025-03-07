const { Contact, AddressBook } = require("./addressBook");

const addressBook = new AddressBook();
const bookIndex = addressBook.createNewAddressBook();

try {
    const contact1 = new Contact("Amit", "Sharma", "MG Road", "Mumbai", "Maharashtra", "400001", "9876543210", "amit.sharma@example.com");
    addressBook.addContactToBook(0, contact1);
    
    const contact2 = new Contact("Priya", "Verma", "Brigade Road", "Bangalore", "Karnataka", "560001", "9876543211", "priya.verma@example.com");
    addressBook.addContactToBook(0, contact2);

    console.log("All Contacts:");
    console.log(addressBook.listContacts(0));

    console.log("\nNumber of Contacts:");
    console.log(addressBook.getContactCount(0));

    console.log("\nSearching for contacts in Mumbai:");
    console.log(addressBook.searchByCityOrState(0, "Mumbai", "").map(c => c.toString()).join("\n"));

    console.log("\nViewing Persons by City or State:");
    console.log(addressBook.viewPersonsByCityOrState(0));
} catch (error) {
    console.error(error.message);
}
