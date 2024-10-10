

function renderBooks(books) {
    const tableBody = document.getElementById("book-list-body");
    tableBody.innerHTML = '';
    books.forEach(book => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td onclick="onBookClick(${book.id})">${book.id}</td>
            <td onclick="onBookClick(${book.id})">${book.title}</td>
            <td>$${book.price.toFixed(2)}</td>
            <td>
                <button onclick="onBookClick(${book.id})">Read</button>
                <button>Update</button>
                <button class="delete" onclick="onBookDelete(${book.id})">🗑️</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}


function renderNavigateButtons(num,selectedPage)
{
    const pageButtons = document.getElementById("nav-btns");
    pageButtons.innerHTML = '';
    const btns = document.createElement("div");
    btns.innerHTML = '';
    for(let i=0;i<num;i++)
    {
        if(i+1 == selectedPage)
        {
            btns.innerHTML += `<button class = "nav-btn active-btn" onclick="onNavBtnClick(${i+1})">${i+1}</button>`;
        }
        else{
            btns.innerHTML += `<button class = "nav-btn" onclick="onNavBtnClick(${i+1})">${i+1}</button>`;
        }
    }
    pageButtons.appendChild(btns);
    
}

function renderBookDetails(book)
{
    let bookDetails = document.getElementById("book-details");
    bookDetails.innerHTML = '';
    bookDetails.innerHTML = `
        <h1>Book Details</h1>
        <h2>${book.title}</h2>
        <img src="${book.image}" alt="${book.title}">
        <p>Author: ${book.author}</p>
        <p>Price: $${book.price.toFixed(2)}</p>
        <div class="rating">
                    <button onclick="onRangeReduce(${book.id})">-</button>
                    <span id="book-rate">${book.rate}</span>
                    <button  onclick="onRangeIncrease(${book.id})">+</button>
                </div>`
}