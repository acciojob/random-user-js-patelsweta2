//your code here

function getRandomUser() {
	fetch('https://randomuser.me/api/')
	.then(response => response.JSON())
	.then(data => {
		const user = data.results[0];
		document.getElementById('userImage').src = user.picture.large;
		document.getElementById('userName').innertext = `${user.name.first} ${user.name.last}`;
		hideAdditionalInfo();
	})
	.catch(error => console.log(error));
}

function showUserInfo(attribute) {
	const user = getUserDetails();
	const infoContent = getInfoContent(attribute, user);
	document.getElementById('infoContent').innerText = infoContent;
	document.getElementById('additionalInfo').style.display = 'block';
}

function getUserDetails() {
	const userNameElement = document.getElementById('userName');
	const [firstName,lastName] = userNameElement.innerText.split(' ');
	const userImage = document.getElementById('userImage').src;

	return {
		firstName,
		lastName,
		userImage
	};
}

function getInfoContent(attribute, user){
	switch (attribute) {
		case 'age':
			return `Age: <span>${calculateAge(user)}</span>`;
		case 'email':
			return `Email: <span>${generateRandomEmail(user)}</span>`;
		case 'phone':
			return `Phone: <span>${generateRandomPhone()}</span>`;
		default:
			return '';
	}
}

function calculateAge(user) {
	const birthDate = new Date(user.dob.date);
	const currntDate = new Date();
	const age = currentDate.getFullYear() - birthDate.getFullYear();
	return age;
}

function generateRandomEmail(user) {
	return `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@example.com`;
}

function generateRandomPhone() {
	const digits = Array.from({length:10}, () => Math.floor(Math.random()*10)).join('');
	return `+1-${digits.sustring(0,3)}-${digits.substring(3,6)}-${digits.substring(6)}`;
}

function hideAdditionalInfo() {
	document.getElementById('additionalInfo').style.display = 'none';
}

getRandomUser();









