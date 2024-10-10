

function renderBooks(books) {
    const tableBody = document.getElementById("book-list-body");
    tableBody.innerHTML = '';
    books.forEach(book => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="for-cursor" onclick="onBookClick(${book.id})">${book.id}</td>
            <td class="for-cursor" onclick="onBookClick(${book.id})">${book.title}</td>
            <td>$${book.price.toFixed(2)}</td>
            <td>
                <button class="button" onclick="onBookClick(${book.id})">Read</button>
                <button class="button" onclick="onBookUpdateClick(${book.id})">Update</button>
                <button class="delete" onclick="onBookDelete(${book.id})">🗑️</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}


function renderNavigateButtons(num, selectedPage) {
    const pageButtons = document.getElementById("nav-btns");
    pageButtons.innerHTML = '';
    const btns = document.createElement("div");
    btns.innerHTML = '';
    for (let i = 0; i < num; i++) {
        if (i + 1 == selectedPage) {
            btns.innerHTML += `<button class = "nav-btn active-btn" onclick="onNavBtnClick(${i + 1})">${i + 1}</button>`;
        }
        else {
            btns.innerHTML += `<button class = "nav-btn" onclick="onNavBtnClick(${i + 1})">${i + 1}</button>`;
        }
    }
    pageButtons.appendChild(btns);

}

function renderBookDetails(book) {
    let bookDetails = document.getElementById("book-details");
    bookDetails.innerHTML = '';
    bookDetails.innerHTML = `
        <h1>Book Details</h1>
        <h2>${book.title}</h2>
        <img src="${book.image}" alt="${book.title}">
        <p>Price: ${book.price.toFixed(2)}</p>
        <div class="rating">
                    <button onclick="onRangeReduce(${book.id})">-</button>
                    <span id="book-rate">${book.rate}</span>
                    <button  onclick="onRangeIncrease(${book.id})">+</button>
                </div>`
}



function openAddSideBar(action, book = null) {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("add-update-form").reset();
    document.getElementById("add-update-btn").innerText = action === "add" ? "Add Book" : "Update Book";
    document.getElementById("book-id-input").value = book ? book.id : "";
    document.getElementById("book-title-input").value = book ? book.title : "";
    document.getElementById("book-price-input").value = book ? book.price : "";
    document.getElementById("book-image-input").value = book ? book.image : "";
    if (book) {
        document.getElementById("add-update-btn").addEventListener("click", onUpdateBook)
    }
    else {

        document.getElementById("add-update-btn").addEventListener("click", onAddBook)
    }
    document.getElementById("task-name").innerHTML = action === "add" ? "Add Book" : "Update Book";

}

function onAddBook(event) {
    event.preventDefault();
    document.getElementById("sidebar").style.display = "none";

    let book = {
        id:parseInt(document.getElementById("book-id-input").value),
        title: document.getElementById("book-title-input").value,
        price: parseFloat(document.getElementById("book-price-input").value),
        image: document.getElementById("book-image-input").value
    };
    Gbooks.push(book);
    localStorage.setItem('books', JSON.stringify(Gbooks));
    if (CurrentBook >= Gbooks.length - 5) {
        renderBooks(Gbooks.slice(CurrentBook, CurrentBook + 5));
    }
    renderNavigateButtons(Math.ceil(Gbooks.length / 5), Math.floor((CurrentBook + 5) / 5));
}


function onUpdateBook(event) {
    event.preventDefault();

    document.getElementById("sidebar").style.display = "none";
    let bookId = parseInt(document.getElementById("book-id-input").value);
    let book = Gbooks.find(b => b.id === bookId);
    if (book) {
        book.title = document.getElementById("book-title-input").value;
        book.price = parseFloat(document.getElementById("book-price-input").value);
        book.image = document.getElementById("book-image-input").value;

        localStorage.setItem('books', JSON.stringify(Gbooks));

        renderBooks(Gbooks.slice(CurrentBook, CurrentBook + 5));
    } else {
        console.error("Book not found");
    }
}
function closeSidebar() {
    document.getElementById("sidebar").style.display = "none";
}