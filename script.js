
function init(){
    loadLocalStorage();
    generateBookList();
};

function generateBookList() {
    let Books_Container_ref = document.getElementById("Books_Container");
    Books_Container_ref.innerHTML = "";
    for (let i = 0; i < Books.length; i++){
        Books_Container_ref.innerHTML += generateBookTemplate(i, checkIsLiked(i));
        for (let j = 0; j < Books[i].comments.length; j++){
            let Comment_Table_ref = document.getElementById(`Comment_Table${i}`);
            Comment_Table_ref.innerHTML += commentTemplate(i, j);
        };
    };
};

function addComment(index){
    input = document.getElementById(`comment_input${index}`).value;
    let user_comment = [];
    Books[index].comments.push(userCommentTemplate(input));
    saveLocalStorage();
    generateBookList();
};

function checkIsLiked (index){
    let isLiked = Books[index].liked;
    if (isLiked == false){
        return "./assets/icons/favourite_default.png"
    }else if(isLiked == true){
        return "./assets/icons/favourite_active.png"
    };
};

function likeBook(index){
    let currentStatus = Books[index].liked;
    if (currentStatus == false){
        Books[index].liked = true;
        Books[index].likes = JSON.stringify(JSON.parse(Books[index].likes) + 1);
        saveLocalStorage()
        generateBookList();
    }else if(currentStatus == true){
        Books[index].liked = false;
        Books[index].likes = JSON.stringify(JSON.parse(Books[index].likes) - 1);
        saveLocalStorage()
        generateBookList();
    };
};

function saveLocalStorage() {
    localStorage.setItem("Books", JSON.stringify(Books));
};

function loadLocalStorage() {
    if (localStorage.getItem("Books") !== null){
        Books = JSON.parse(localStorage.getItem("Books"));
    };
};
