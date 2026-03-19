function generateBookTemplate (index, path) {
    return `<artice class = "Book_container books_inner_distance">
        <section class = "book_section_hero">
            <h2>${Books[index].name}</h1>
            <img class = "book_img" src = "${Books[index].picture}">
        </section>
        <section class = "book_section_info">
            <div class = "book_info_head">
                <p>${Books[index].price + " EURO"}</p>
                <div class = "book_info_likes">
                    <p>${Books[index].likes}</p>
                    <a class = "liked_Icon" onclick = "likeBook(${index})">
                        <img id = "Liked_icon${index}" src = "${path}">
                    </a>
                </div>
            </div>
            <div class = "book_info_content">
                <table>
                    <tr>
                        <td>Author</td>
                        <td>${Books[index].author}</td>
                    </tr>
                    <tr>
                        <td>Erscheinungsjahr</td>
                        <td>${Books[index].publishedYear}</td>
                    </tr>
                    <tr>
                        <td>Genre</td>
                        <td>${Books[index].genre}</td>
                    </tr>
                </table>
            </div>
        </section>
        <section class = "section_comment book_section_comment">
            <h3>Kommentare:</h3>
                <table id = "Comment_Table${index}">
                    
                </table>
            <div class = "comment_box">
                <input class = "input_field" id = "comment_input${index}">
                <button onclick = "addComment(${index})">Senden</button>
            </div>
        </section>
    </artice>`
};

function commentTemplate (i, j){
    return `<tr>
                <td>${Books[i].comments[j].name}</td>
                <td>${Books[i].comments[j].Comment}</td>
            </tr>`
};

function userCommentTemplate (comment){
    return {name : "You", Comment: comment}
};