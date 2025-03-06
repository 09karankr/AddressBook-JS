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
        if (!/^[a-zA-Z]{4,}$/.test(state)) {
            throw new Error("Invalid State: Should have at least 4 characters.");
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
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    listContacts() {
        return this.contacts.map(contact => contact.toString()).join("\n");
    }
}

module.exports = { Contact, AddressBook };
