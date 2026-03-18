function generateBookTemplate (index) {
    return `<artice class = "Book">
        <h1>${Books[index].name}</h1>
        <img>
        <section>
            <div class = "book_info_head">
                <p>${Books[index].price + " EURO"}</p>
                <div>
                    <p>${Books[index].likes}</p>
                    <a></a>
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
        <section>
            <h2>Kommentare:</h2>
            <div id = "Comment_Container">
                <table id = "Comment_Table${index}">
                    
                </table>
            </div>
            <div>
                <input id = "comment_input${index}">
                <button onclick = "addComment(${index})">Scheiße Pfosten</button>
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