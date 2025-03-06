const { Contact, AddressBook } = require('./addressBook');

try {
    const addressBookManager = new AddressBook();

    // Create two new address books
    const book1 = addressBookManager.createNewAddressBook();
    const book2 = addressBookManager.createNewAddressBook();

    // Add contacts to the first address book
    const contact1 = new Contact("Amit", "Sharma", "123 MG Road", "Mumbai", "Maharashtra", "400001", "9876543210", "amit.sharma@example.com");
    const contact2 = new Contact("Priya", "Verma", "456 Park Street", "Kolkata", "West Bengal", "700001", "8765432109", "priya.verma@example.com");
    
    addressBookManager.addContactToBook(0, contact1);
    addressBookManager.addContactToBook(0, contact2);

    // Add a contact to the second address book
    const contact3 = new Contact("Rajesh", "Gupta", "789 Gandhi Nagar", "Delhi", "Delhi", "110001", "7654321098", "rajesh.gupta@example.com");
    addressBookManager.addContactToBook(1, contact3);

    console.log("Contacts in Address Book 1:");
    console.log(addressBookManager.listContacts(0));

    console.log("\nContacts in Address Book 2:");
    console.log(addressBookManager.listContacts(1));

} catch (error) {
    console.error("Error:", error.message);
}
