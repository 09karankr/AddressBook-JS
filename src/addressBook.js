class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName)) throw new Error("Invalid First Name: Should start with a capital letter and have at least 3 characters.");
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) throw new Error("Invalid Last Name: Should start with a capital letter and have at least 3 characters.");
        if (!/^[a-zA-Z0-9\s]{4,}$/.test(address)) throw new Error("Invalid Address: Should have at least 4 characters.");
        if (!/^[a-zA-Z\s]{4,}$/.test(city)) throw new Error("Invalid City: Should have at least 4 characters.");
        if (!/^[a-zA-Z\s]{4,}$/.test(state)) throw new Error("Invalid State: Should have at least 4 characters.");
        if (!/^\d{6}$/.test(zip)) throw new Error("Invalid Zip: Should be a 6-digit number.");
        if (!/^\d{10}$/.test(phoneNumber)) throw new Error("Invalid Phone Number: Should be a 10-digit number.");
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
        this.books = [];
    }

    createNewAddressBook() {
        this.books.push([]);
        return this.books.length - 1;
    }

    addContactToBook(bookIndex, contact) {
        if (this.books[bookIndex].some(c => c.firstName === contact.firstName && c.lastName === contact.lastName)) {
            throw new Error("Duplicate Entry: Contact with the same name already exists.");
        }
        this.books[bookIndex].push(contact);
    }

    listContacts(bookIndex) {
        return this.books[bookIndex].map(contact => contact.toString()).join("\n");
    }

    getContactCount(bookIndex) {
        return this.books[bookIndex].length;
    }

    searchByCityOrState(bookIndex, city, state) {
        return this.books[bookIndex].filter(contact => 
            (city && contact.city === city) || (state && contact.state === state)
        );
    }

    viewPersonsByCityOrState(bookIndex) {
        return this.books[bookIndex].reduce((acc, contact) => {
            acc[contact.city] = acc[contact.city] || [];
            acc[contact.city].push(contact.toString());

            acc[contact.state] = acc[contact.state] || [];
            acc[contact.state].push(contact.toString());

            return acc;
        }, {});
    }

    getCountByCityOrState(bookIndex, type) {
        return this.books[bookIndex].reduce((acc, contact) => {
            const key = type === "city" ? contact.city : contact.state;
            acc[key] = (acc[key] || 0) + 1;
            return acc;
        }, {});
    }
}

module.exports = { Contact, AddressBook };
