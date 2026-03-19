function generateBookTemplate (index, path) {
    return `<artice class = "book_container books_inner_distance">
        <section class = "book_section_hero">
            <h1>${books[index].name}</h1>
            <img class = "book_img" src = "${books[index].picture}">
        </section>
        <section class = "book_section_info">
            <div class = "book_info_head">
                <p>${books[index].price + " EURO"}</p>
                <div class = "book_info_likes">
                    <p>${books[index].likes}</p>
                    <a class = "liked_Icon" onclick = "likeBook(${index})">
                        <img id = "Liked_icon${index}" src = "${path}">
                    </a>
                </div>
            </div>
            <div class = "book_info_content">
                <table>
                    <tr class = "info_data">
                        <td>Author: </td>
                        <td>${books[index].author}</td>
                    </tr>
                    <tr class = "info_data">
                        <td>Erscheinungsjahr: </td>
                        <td>${books[index].publishedYear}</td>
                    </tr>
                    <tr class = "info_data">
                        <td>Genre: </td>
                        <td>${books[index].genre}</td>
                    </tr>
                </table>
            </div>
        </section>
        <section class = "section_comment book_section_comment">
            <h2>Kommentare:</h2>
                <div class = "comment_wrapper">
                    <table id = "comment_Table${index}">
                    
                    </table>
                </div>
            <div class = "comment_box">
                <input class = "input_field" id = "comment_input${index}">
                <button onclick = "addComment(${index})">Senden</button>
            </div>
        </section>
    </artice>`
};

function commentTemplate (i, j){
    return `<tr class = "comment_data">
                <td class = "comment_username">${books[i].comments[j].name}:</td>
                <td>${books[i].comments[j].Comment}</td>
            </tr>`
};

function userCommentTemplate (comment){
    return {name : "You", Comment: comment}
};