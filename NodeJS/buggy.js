function returnPerson() {
	return 
	{
		firstName : "Amit",
		lastName  : "Krishna",
	}
}

function greetPerson() {
	var person = returnPerson();
	console.log(f'Hello {person.firstName}}');
}

greatPerson();
