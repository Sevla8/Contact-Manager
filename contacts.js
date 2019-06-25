class Contact {
	constructor(firstName, lastName, eMail, phoneNumber) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.eMail = eMail;
		this.phoneNumber = phoneNumber;
	}

	toString() {
		return `Prenom : ${this.firstName}, Prenom : ${this.lastName}, Email : ${this.eMail}, Tel : ${this.phoneNumber}`;
	}
}

let contacts = [new Contact("Carole", "Lévisse", "carole.levisse@openclassrooms.com", "0612894531"), 
				new Contact("Mélodie", "Nelsonne", "melodie.nelsonne@openclassrooms.com", "0798351403")];

function displayContacts() {
	console.log("Voici la liste de tous vos contacts :")
	for (const contact of contacts) {
		console.log(contact.toString());
	}
}

function addContact() {
	const firstName = prompt("Entrez le prénom du nouveau contact :");
	const lastName = prompt("Entrez le nom du nouveau contact :");
	const eMail = prompt("Entrez l'email du nouveau contact :");
	const phoneNumber = prompt("Entrez le numéro de téléphone du nouveau contact :");
	contacts.push(new Contact(firstName, lastName, eMail, phoneNumber));
	console.log("Le nouveau contact a été ajouté.");
}

function updateContact(Contact) {
	let position = prompt("Quel contact shouhaitez vous modifier ? (indiquez sa position)");
	while (position < 1 || position > contacts.length) { // on suppose que l'indice du premier contact est 1 pour l'utilisateur
		console.log("Veuillez inqiquer une position valide svp.");
		position = prompt("Quel contact shouhaitez vous modifier ? (indiquez sa position)");
	}
	let firstName = prompt("Entrez le nouveau prénom du contact (laissez vide si identique) :");
	let lastName = prompt("Entrez le nouveau nom du contact (laissez vide si identique) :");
	let eMail = prompt("Entrez le nouvelle email du contact (laissez vide si identique) :");
	let phoneNumber = prompt("Entrez le nouveau numéro de téléphone du contact (laissez vide si identique) :");
	if (firstName !== "")
		contacts[position-1].firstName = firstName; // on rétablie l'indexation originelle
	if (lastName !== "")
		contacts[position-1].lastName = lastName;
	if (eMail !== "")
		contacts[position-1].eMail = eMail;
	if (phoneNumber !== "")
		contacts[position-1].phoneNumber = phoneNumber;
	console.log("Le contact a bien été modifié.");
}

function removeContact(Contact) {
	let position = prompt("Quel contact shouhaitez vous supprimer ? (indiquez sa position)");
	while (position < 1 || position > contacts.length) { // on suppose que l'indice du premier contact est 1 pour l'utilisateur
		console.log("Veuillez inqiquer une position valide svp.");
		position = prompt("Quel contact shouhaitez vous supprimer ? (indiquez sa position)");
	}
	contacts.splice(position-1, 1); // on rétablie l'indexation originelle
	console.log("Le contact a bien été supprimé.");
}

let choice = "";
console.log("Bienvenue dans le gestionnaire des contacts !");
while (choice !== "5")  {
	console.log("1 : Lister les contacts");
	console.log("2 : Ajouter un contact");
	console.log("3 : Modifier un contact");
	console.log("4 : Supprimer un contact");
	console.log('5 : Quitter');

	choice = prompt("Choisissez une option :");

	switch(choice) {
		case "1":
			displayContacts();
			break;
		case "2":
			addContact();
			break;
		case "3":
			if (contacts.length !== 0)
				updateContact();
			break;
		case "4":
			if (contacts.length !== 0)
				removeContact();
			break;
		case "5":
			console.log("Au revoir !");
			break;
		default:
			console.log("Veuillez choisir une option valide svp.");
			break;
	}
	console.log("");
}
