


function onLoad() {
    let Gbooks = JSON.parse(localStorage.getItem('books'));
    if(!Gbooks)
        Gbooks = Dbooks;
    renderBooks(Dbooks.slice(CurrentBook, CurrentBook + 4));
}



onLoad()