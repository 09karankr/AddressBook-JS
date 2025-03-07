class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName)) {
            throw new Error("Invalid First Name: Should start with capital and have at least 3 characters.");
        }
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) {
            throw new Error("Invalid Last Name: Should start with capital and have at least 3 characters.");
        }
        if (!/^[a-zA-Z0-9\s]{4,}$/.test(address)) {
            throw new Error("Invalid Address: Should have at least 4 characters.");
        }
        if (!/^[a-zA-Z\s]{4,}$/.test(city)) {
            throw new Error("Invalid City: Should have at least 4 characters.");
        }
        if (!/^[a-zA-Z\s]{4,}$/.test(state)) {
            throw new Error("Invalid State: Should have at least 4 characters.");
        }
        if (!/^\d{6}$/.test(zip)) {
            throw new Error("Invalid Zip Code: Should be 6 digits.");
        }
        if (!/^\d{10}$/.test(phoneNumber)) {
            throw new Error("Invalid Phone Number: Should be 10 digits.");
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            throw new Error("Invalid Email Format.");
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName}, ${this.address}, ${this.city}, ${this.state}, ${this.zip}, ${this.phoneNumber}, ${this.email}`;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (this.contacts.some(c => c.firstName === contact.firstName && c.lastName === contact.lastName)) {
            throw new Error("Duplicate Entry: Contact with the same name already exists.");
        }
        this.contacts.push(contact);
    }

    listContacts() {
        return this.contacts.map(contact => contact.toString()).join("\n");
    }

    sortContactsByName() {
        this.contacts.sort((a, b) => {
            let nameA = a.firstName.toLowerCase() + a.lastName.toLowerCase();
            let nameB = b.firstName.toLowerCase() + b.lastName.toLowerCase();
            return nameA.localeCompare(nameB);
        });
    }
}

module.exports = { Contact, AddressBook };
