const book = document.getElementById("book");
const wordSize = document.querySelectorAll(".font-size");

for (let i = 0; i < wordSize.length; i++) {
    wordSize[i].addEventListener("click", function() {
        event.preventDefault();
        for (let m = 0; m < wordSize.length; m++) {
            wordSize[m].classList.remove("font-size_active");
            if (book.classList.contains("book_fs-big")) {
                book.classList.remove("book_fs-big");
            }
            if (book.classList.contains("book_fs-small")) {
                book.classList.remove("book_fs-small");
            }
        }
        wordSize[i].classList.add("font-size_active");
        if (wordSize.item(0).classList.contains("font-size_active")) {
            book.classList.add("book_fs-small");
        }
        if (wordSize.item(2).classList.contains("font-size_active")) {
            book.classList.add("book_fs-big");
        }
    })
}