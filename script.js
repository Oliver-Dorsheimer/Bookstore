let Books = [{
    "name" : "name",
    "author" : "author",
    "price" : "price",
    "publishedYear" : "publishedYear",
    "genre" : "genre",
    "likes" : "likes",
    "liked" : false,
    "comments" : {
        "name" : "Commentator_1",
        "Comment" : "Random_Comment",
        },
    },  
];

//Generate Books Function

function generateBookList() {
    let Books_Container_ref = document.getElementById("Books_Container");
    Books_Container_ref.innerHTML += "";
    for (let i = 0; i < Books.length; i++){
        Books_Container_ref.innerHTML += generateBookTemplate(i);
    };
};