// EVENT LISTENERS
// EVENT LISTENERI ZA FORMU I SUBMIT BUTTONE
// krenucemo sa view3 ovde
view1.style.display = "none";
view2.style.display = "none";
view3.style.display = "flex";

document.addEventListener("readystatechange", (event) => {
	if(event.target.readyState === "complete"){
		console.log("readyState: complete");
		initApp();
	}
});


const initApp = () => {
	const view3 = document.querySelector("#view3");
	const myForm = view3.querySelector("#myForm");
	myForm.addEventListener("submit", (event) => {
		event.preventDefault();
		console.log("submit event");
	});
};

// kada hocemo da ubacimo text u formu i u text input
// po defaultu tekst se brise i refreshuje se stranica,
// zato nam reba event.preventDefault() metoda

// sada ce lepo izbaciti  u konzoli da je event submitovan