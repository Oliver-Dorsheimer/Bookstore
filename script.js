
function init(){
    loadLocalStorage();
    generateBookList();
};

function generateBookList() {
    let books_Container_ref = document.getElementById("books_Container");
    books_Container_ref.innerHTML = "";
    for (let i = 0; i < books.length; i++){
        books_Container_ref.innerHTML += generateBookTemplate(i, checkIsLiked(i));
        for (let j = 0; j < books[i].comments.length; j++){
            let comment_Table_ref = document.getElementById(`comment_Table${i}`);
            comment_Table_ref.innerHTML += commentTemplate(i, j);
        };
    };
};

function regenerateLikeIcon(index){
    let path = checkIsLiked(index);
    let currentStatus = books[index].liked;
    document.getElementById(`Liked_icon${index}`).setAttribute('src', `${path}`);
    let current_likes = document.getElementById(`info_likes${index}`).innerText;
    
    if (currentStatus == false){
        document.getElementById(`info_likes${index}`).innerHTML = "";
        document.getElementById(`info_likes${index}`).innerHTML = `${parseInt(current_likes) - 1}`;
    }else if(currentStatus == true){
        document.getElementById(`info_likes${index}`).innerHTML = "";
        document.getElementById(`info_likes${index}`).innerHTML = `${parseInt(current_likes) + 1}`;
    };
};

function regenerateComment(index, comment) {
    document.getElementById(`comment_Table${index}`).innerHTML += userCommentTemplate(comment);
};

function addComment(index){
    input = document.getElementById(`comment_input${index}`).value;
    let user_comment = [];
    books[index].comments.push(userCommentData(input));
    saveLocalStorage();
    regenerateComment(index, input);
};

function checkIsLiked (index){
    let isLiked = books[index].liked;
    if (isLiked == false){
        return "./assets/icons/favourite_default.png"
    }else if(isLiked == true){
        return "./assets/icons/favourite_active.png"
    };
};

function likeBook(index){
    let currentStatus = books[index].liked;
    if (currentStatus == false){
        books[index].liked = true;
        books[index].likes = JSON.stringify(JSON.parse(books[index].likes) + 1);
        saveLocalStorage();
        regenerateLikeIcon(index);
    }else if(currentStatus == true){
        books[index].liked = false;
        books[index].likes = JSON.stringify(JSON.parse(books[index].likes) - 1);
        saveLocalStorage();
        regenerateLikeIcon(index);
    };
};

function saveLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
};

function loadLocalStorage() {
    if (localStorage.getItem("books") !== null){
        books = JSON.parse(localStorage.getItem("books"));
    };
};
