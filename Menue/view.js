

function renderBooks(books) {
    const tableBody = document.getElementById("book-list-body");
    tableBody.innerHTML = '';
    books.forEach(book => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>$${book.price.toFixed(2)}</td>
            <td>
                <button>Read</button>
                <button>Update</button>
                <button class="delete">🗑️</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}


function renderNavigateButtons(num)
{
    const pageButtons = document.getElementById("nav-btns");
    pageButtons.innerHTML = '';
    
}

