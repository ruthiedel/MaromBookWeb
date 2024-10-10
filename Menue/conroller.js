


function onLoad() {
    Gbooks = JSON.parse(localStorage.getItem('books'));
    if (!Gbooks) {
        Gbooks = Dbooks;
        localStorage.setItem('books', JSON.stringify(Gbooks));
    }
    renderBooks(Gbooks.slice(CurrentBook, CurrentBook + 5));
    renderNavigateButtons(Math.ceil(Gbooks.length / 5), 1);
}




onLoad()



function onLoadData() {

    let bookDetails = document.getElementById("book-details");
    bookDetails.innerHTML = '<h1>Book Details</h1><p>No book selected yet.</p>';
    Gbooks = Dbooks;
    localStorage.setItem('books', JSON.stringify(Gbooks));
    CurrentBook = 0;
    renderBooks(Gbooks.slice(CurrentBook, CurrentBook + 5));
    renderNavigateButtons(Math.ceil(Gbooks.length / 5), 1);
}

function onNavBtnClick(i) {

    CurrentBook = (i - 1) * 5;
    renderBooks(Gbooks.slice(CurrentBook, CurrentBook + 5 < Gbooks.length ? CurrentBook + 5 : Gbooks.length));
    renderNavigateButtons(Math.ceil(Gbooks.length / 5), i);
}


function onBookClick(id) {
    const book = Gbooks.find(b => b.id === id);
    renderBookDetails(book);
}


function onRangeReduce(id) {
    const book = Gbooks.find(b => b.id === id);
    book.rate = book.rate - 1;
    localStorage.setItem('books', JSON.stringify(Gbooks));
    document.getElementById(`book-rate`).innerText = book.rate;
}


function onRangeIncrease(id) {
    const book = Gbooks.find(b => b.id === id);
    book.rate = book.rate + 1;
    localStorage.setItem('books', JSON.stringify(Gbooks));
    document.getElementById(`book-rate`).innerText = book.rate;
}


function onBookDelete(id) {
    Gbooks = Gbooks.filter(b => b.id !== id);
    localStorage.setItem('books', JSON.stringify(Gbooks));
    renderBooks(Gbooks.slice(CurrentBook, CurrentBook + 5 < Gbooks.length ? CurrentBook + 5 : Gbooks.length));
    renderNavigateButtons(Math.ceil(Gbooks.length / 5), 1);
}

function onNextClick() {
    if (CurrentBook + 5 < Gbooks.length) {

        CurrentBook = CurrentBook + 5;
        renderBooks(Gbooks.slice(CurrentBook, CurrentBook + 5 < Gbooks.length ? CurrentBook + 5 : Gbooks.length));
        renderNavigateButtons(Math.ceil(Gbooks.length / 5), Math.floor((CurrentBook + 5) / 5));

    }

}

function onPrevClick() {
    if (CurrentBook >= 5) {

        CurrentBook = CurrentBook - 5;
        renderBooks(Gbooks.slice(CurrentBook, CurrentBook + 5 < Gbooks.length ? CurrentBook + 5 : Gbooks.length));
        renderNavigateButtons(Math.ceil(Gbooks.length / 5), Math.floor((CurrentBook + 5) / 5));

    }

}


function onNewBookClick() {
   openAddSideBar('add');
}


function onBookUpdateClick(id) {
    const book = Gbooks.find(b => b.id === id);
    openAddSideBar('update', book);

}