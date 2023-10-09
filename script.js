const contactList = document.getElementById("contactList");
const addContactButton = document.getElementById("addContact");
const searchInput = document.getElementById("search");
const contactDetails = document.getElementById("contactDetails");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const saveButton = document.getElementById("save");
const deleteButton = document.getElementById("delete");

let contacts = [];

addContactButton.addEventListener("click", () => {
    showContactDetails();
});

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    displayContacts(contacts.filter(contact => contact.name.toLowerCase().includes(searchTerm)));
});

saveButton.addEventListener("click", () => {
    const editedContact = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
    };

    contacts.push(editedContact);
    clearInputFields();
    displayContacts(contacts);
    hideContactDetails();
});

deleteButton.addEventListener("click", () => {
    contacts = contacts.filter(contact => contact.name !== nameInput.value);
    clearInputFields();
    displayContacts(contacts);
    hideContactDetails();
});

function showContactDetails() {
    contactDetails.style.display = "block";
}

function hideContactDetails() {
    contactDetails.style.display = "none";
}

function clearInputFields() {
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
}

function displayContacts(contactArray) {
    contactList.innerHTML = "";
    contactArray.forEach(contact => {
        const li = document.createElement("li");
        li.textContent = contact.name;
        li.addEventListener("click", () => {
            nameInput.value = contact.name;
            emailInput.value = contact.email;
            phoneInput.value = contact.phone;
            showContactDetails();
        });
        contactList.appendChild(li);
    });
}
