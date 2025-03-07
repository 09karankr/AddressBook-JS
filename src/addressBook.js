class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName)) {
            throw new Error("Invalid First Name: Should start with a capital letter and have at least 3 characters.");
        }
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) {
            throw new Error("Invalid Last Name: Should start with a capital letter and have at least 3 characters.");
        }
        if (!/^[a-zA-Z0-9\s]{4,}$/.test(address)) {
            throw new Error("Invalid Address: Should have at least 4 characters.");
        }
        if (!/^[a-zA-Z]{4,}$/.test(city)) {
            throw new Error("Invalid City: Should have at least 4 characters.");
        }
        if (!/^[a-zA-Z\s]{3,}$/.test(state)) {
            throw new Error("Invalid State: Should have at least 3 characters.");
        }
        if (!/^\d{6}$/.test(zip)) {
            throw new Error("Invalid Zip: Should be a 6-digit number.");
        }
        if (!/^\d{10}$/.test(phone)) {
            throw new Error("Invalid Phone: Should be a 10-digit number.");
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            throw new Error("Invalid Email: Should follow standard email format.");
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName}, ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phone}, Email: ${this.email}`;
    }
}

class AddressBook {
    constructor() {
        this.addressBooks = [];
    }

    createNewAddressBook() {
        const newBook = [];
        this.addressBooks.push(newBook);
        return newBook;
    }

    addContactToBook(bookIndex, contact) {
        if (bookIndex >= 0 && bookIndex < this.addressBooks.length) {
            const book = this.addressBooks[bookIndex];
            
            // Check for duplicates
            const isDuplicate = book.some(existingContact => 
                existingContact.firstName === contact.firstName && existingContact.lastName === contact.lastName
            );
            
            if (isDuplicate) {
                throw new Error("Duplicate Entry: Contact with the same name already exists.");
            }
            
            book.push(contact);
        } else {
            throw new Error("Invalid Address Book Index");
        }
    }

    findContact(bookIndex, firstName, lastName) {
        if (bookIndex >= 0 && bookIndex < this.addressBooks.length) {
            return this.addressBooks[bookIndex].find(contact => contact.firstName === firstName && contact.lastName === lastName);
        } else {
            throw new Error("Invalid Address Book Index");
        }
    }

    editContact(bookIndex, firstName, lastName, newDetails) {
        const contact = this.findContact(bookIndex, firstName, lastName);
        if (contact) {
            Object.assign(contact, newDetails);
        } else {
            throw new Error("Contact not found");
        }
    }

    deleteContact(bookIndex, firstName, lastName) {
        if (bookIndex >= 0 && bookIndex < this.addressBooks.length) {
            const book = this.addressBooks[bookIndex];
            const contactIndex = book.findIndex(contact => contact.firstName === firstName && contact.lastName === lastName);
            if (contactIndex !== -1) {
                book.splice(contactIndex, 1);
            } else {
                throw new Error("Contact not found");
            }
        } else {
            throw new Error("Invalid Address Book Index");
        }
    }

    listContacts(bookIndex) {
        if (bookIndex >= 0 && bookIndex < this.addressBooks.length) {
            return this.addressBooks[bookIndex].map(contact => contact.toString()).join("\n");
        } else {
            throw new Error("Invalid Address Book Index");
        }
    }

    getContactCount(bookIndex) {
        if (bookIndex >= 0 && bookIndex < this.addressBooks.length) {
            return this.addressBooks[bookIndex].length;
        } else {
            throw new Error("Invalid Address Book Index");
        }
    }

    searchByCityOrState(bookIndex, city, state) {
        if (bookIndex >= 0 && bookIndex < this.addressBooks.length) {
            return this.addressBooks[bookIndex].filter(contact => contact.city === city || contact.state === state);
        } else {
            throw new Error("Invalid Address Book Index");
        }
    }
}

module.exports = { Contact, AddressBook };
