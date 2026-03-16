let Books = [{
    "name": "Die Karte der Stimmen",
    "author": "Rafael Soto",
    "price": "17.20",
    "publishedYear": "2019",
    "genre": "Science-Fiction",
    "likes": "342",
    "liked": false,
    "comments" : [
        {
            "name": "SciFiFan",
            "Comment": "Packende Welt und originelle Ideen zur Zukunft der Kommunikation."
        },
        {
            "name": "Jule",
            "Comment": "Protagonist sehr gut gezeichnet, Plot mit vielen Wendungen."
        },
        {
            "name": "Nico_P",
            "Comment": "Das Tempo ist hoch — perfekt für Leser, die Action mögen."
        },
    ]
    },
    {
    "name": "Nachts am Leuchtturm",
    "author": "Kai Lorenzen",
    "price": "12.75",
    "publishedYear": "2016",
    "genre": "Kurzgeschichten",
    "likes": "54",
    "liked": false,
    "comments" : [
        {
            "name": "MarkusD",
            "Comment": "Einige Geschichten blieben mir lange im Gedächtnis."
        },
        {
            "name": "Nina",
            "Comment": "Wunderbare Sprache, aber nicht alle Geschichten haben mir gefallen."
        },
        {
            "name": "Elena",
            "Comment": "Tolles Geschenk für Literaturfans."
        },
    ]
    },
    {
    "name": "Algorithmen des Alltags",
    "author": "Dr. Eva Neumann",
    "price": "22.00",
    "publishedYear": "2020",
    "genre": "Sachbuch",
    "likes": "210",
    "liked": false,
    "comments" : [
        {
            "name": "CoderMax",
            "Comment": "Klare Beispiele, gut für Einsteiger in Informatik."
        },
        {
            "name": "LeaS",
            "Comment": "Erklärt komplexe Themen verständlich und praxisnah."
        },
        {
            "name": "Studenta",
            "Comment": "Manche Kapitel sind sehr technisch, aber lehrreich."
        },
    ]
    },
    {
    "name": "Sommer über der Allee",
    "author": "Jonas Krüger",
    "price": "9.50",
    "publishedYear": "2021",
    "genre": "Roman",
    "likes": "76",
    "liked": false,
    "comments" : [
        {
            "name": "Miriam",
            "Comment": "Sehr warmherziger Schreibstil und sympathische Figuren."
        },
        {
            "name": "PhilippR",
            "Comment": "Perfekt für einen entspannten Nachmittag am Strand."
        },
        {
            "name": "Susi77",
            "Comment": "Die Liebesgeschichte wirkte etwas vorhersehbar."
        },
        {
            "name": "OpaKarl",
            "Comment": "Hat Erinnerungen an meine Jugend geweckt."
        },
    ]
    },
    {
    "name": "Die verlorene Bibliothek",
    "author": "Maja Harten",
    "price": "14.99",
    "publishedYear": "2018",
    "genre": "Mystery",
    "likes": "128",
    "liked": false,
    "comments" : [
        {
            "name": "LenaK",
            "Comment": "Spannender Einstieg, konnte das Buch kaum aus der Hand legen."
        },
        {
            "name": "Tobias94",
            "Comment": "Gut beschriebene Atmosphäre, das Ende war überraschend."
        },
        {
            "name": "Anna.B",
            "Comment": "Manche Passagen zogen sich, insgesamt aber empfehlenswert."
        },
    ]
    },
];
function init(){
    generateBookList();
    generateComments();
};

function generateBookList() {
    let Books_Container_ref = document.getElementById("Books_Container");
    Books_Container_ref.innerHTML += "";
    for (let i = 0; i < Books.length; i++){
        Books_Container_ref.innerHTML += generateBookTemplate(i);
    };
};

function generateComments(){
    for (let i = 0; i < Books.length; i++){
        let Comment_Table_ref = document.getElementById(`Comment_Table${i}`);
        for (let j = 0; j < Books[i].comments.length; j++){
            Comment_Table_ref.innerHTML += commentTemplate(i, j);
        };
    };
    
};

//Comment_Table_ref.innerHTML += "";