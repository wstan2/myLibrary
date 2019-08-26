const main = document.querySelector(".book-container");
const div2 = document.querySelector("card");

let index = 0;

let myLibrary = [];

function Book(title, numPages, author) {
	this.name = title;
	this.pages = numPages;
	this.author = author;
	this.index = index;
	index++;
}

function clearForm() {
	document.getElementById("title").value = "";
	document.getElementById("author").value = "";
	document.getElementById("pages").value = "";
}

function addBookToLibrary(obj) {
	myLibrary.push(obj);
}

function deleteBook(e) {
	const index = e.target.id;
	myLibrary.splice(index, 1);
	render();
}

function getBookDetails() {
	let title1 = document.getElementById("title").value;
	let pages1 = document.getElementById("pages").value;
	let author1 = document.getElementById("author").value;

	if (title1 != "" && pages1 != "" && author1 != "") {
		const el = new Book(title1, pages1, author1);
		addBookToLibrary(el);
		render();
	} else {
		alert("Please re-enter book information!");
	}
}

function openForm() {
	document.getElementById("myForm").style.display = "block";
}

function closeForm() {
	document.getElementById("myForm").style.display = "none";
}

function render() {
	let br = document.querySelectorAll(".bookCard");
	br.forEach(br => br.remove());

	myLibrary.forEach(book => {
		let card = document.createElement("div");
		card.className = "bookCard";
		let btn = document.createElement("span");
		btn.className = "delBook";
		btn.textContent = "x";
		btn.setAttribute("id", this.index);
		btn.addEventListener("click", deleteBook);
		main.appendChild(card);
		card.textContent =
			"title: " +
			book.name +
			" pages: " +
			book.pages +
			" author: " +
			book.author;
		card.appendChild(btn);
	});
}
