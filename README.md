# Address Book - JavaScript

This project is an **Address Book** application built using **JavaScript (Node.js)**. It provides various functionalities to manage contacts efficiently.

## Features Implemented

### 1. **Ability to Create an Address Book Contact**
- Each contact includes **First Name, Last Name, Address, City, State, Zip, Phone Number, and Email**.

### 2. **Validation for Contact Fields**
- First and Last Name must **start with a capital letter and have at least 3 characters**.
- Address, City, and State must **have at least 4 characters**.
- Zip must be **exactly 6 digits**.
- Phone Number must be **exactly 10 digits**.
- Email must be **in a valid format**.
- Throws an **error if any validation fails**.

### 3. **Ability to Create an Address Book Array & Add New Contacts**
- Contacts are stored in an array.
- New contacts can be added while ensuring they pass validation.

### 4. **Ability to Find an Existing Contact by Name & Edit It**
- Searches for a contact using the first and last name.
- Allows modification of existing contact details.

### 5. **Ability to Find a Person & Delete It from the Address Book**
- Searches for a contact by name.
- Removes the contact from the array if found.

### 6. **Ability to Count the Number of Contacts in the Address Book**
- Uses **array length property** to count the total contacts.

### 7. **Ability to Ensure No Duplicate Entries of the Same Person**
- Before adding a contact, it checks if the same person (same first & last name) exists.
- Uses **Array functions like `filter()`** to perform the duplicate check.

### 8. **Ability to Search for a Person by City or State**
- Uses **`filter()`** to find all contacts from a specific city or state.

### 9. **Ability to View Persons by City or State**
- Displays contacts grouped by **city** or **state**.

### 10. **Ability to Get the Number of Contacts by City or State**
- Uses **`reduce()`** to count the number of contacts in each city or state.

### 11. **Ability to Sort Entries in the Address Book Alphabetically by Name**
- Uses **`sort()`** to arrange contacts in alphabetical order.

### 12. **Ability to Sort Contacts by City, State, or Zip**
- Sorts contacts by **City, State, or Zip Code** using **`sort()`**.

## Installation & Running the Project

### **Prerequisites**
- Install **Node.js** (latest version)

### **Clone the Repository**
```sh
git clone https://github.com/yourusername/AddressBook-JS.git
cd AddressBook-JS/src
```

### **Run the Project**
```sh
node main.js
```

## Project Structure
```
AddressBook-JS/
│── src/
│   ├── addressBook.js  # Contact class & AddressBook logic
│   ├── main.js         # Executes all functionalities
│── README.md          # Project documentation
```

## Example Output
```
Before Sorting:
Amit Sharma, MG Road, Mumbai, Maharashtra, 400001, 9876543210, amit.sharma@example.com
Raj Kumar, Park Street, Kolkata, West Bengal, 700001, 9876543212, raj.kumar@example.com

Sorting by City:
Raj Kumar, Park Street, Kolkata, West Bengal, 700001, 9876543212, raj.kumar@example.com
Amit Sharma, MG Road, Mumbai, Maharashtra, 400001, 9876543210, amit.sharma@example.com
```



### **Author:**
Your Name - [GitHub Profile](https://github.com/09karankr)

---
This Address Book project demonstrates the use of JavaScript functions like **filter, map, reduce, and sort** to perform various operations on contacts. 🚀

