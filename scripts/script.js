class Book {
    constructor(name, page_number) {
        this.name = name;
        this.page_number = page_number;
    }
    
    get_name() {
        return this.name;
    }
    
    get_page_number() {
        return this.page_number;
    }
}

class Codex {
    constructor(name, total_pages, old_testament_books, new_testament_books) {
        this.name = name;
        this.total_pages = total_pages;
        this.old_testament_books = old_testament_books;
        this.new_testament_books = new_testament_books;
    }
    
    get_name() {
        return this.name;
    }
    
    get_total_pages() {
        return this.total_pages;
    }
    
    get_old_testament_books() {
        return this.old_testament_books;
    }
    
    get_new_testament_books() {
        return this.new_testament_books;
    }
}

const codices = [
    new Codex("Vaticanus", 1555, [
        new Book("Genesis", 5),
        new Book("Exodus", 51),
        new Book("Leviticus", 103),
        new Book("Numbers", 142),
        new Book("Deuteronomy", 195),
        new Book("Joshua", 242),
        new Book("Judges", 275),
        new Book("Ruth", 308),
        new Book("1 Samuel", 313),
        new Book("2 Samuel", 358),
        new Book("1 Kings", 399),
        new Book("2 Kings", 446),
        new Book("1 Chronicles", 488),
        new Book("2 Chronicles", 526),
        new Book("Ezra", 576),
        new Book("Nehemiah", 598),
        new Book("Psalms", 629),
        new Book("Proverbs", 718),
        new Book("Ecclesiastes", 754),
        new Book("Song of Songs", 767),
        new Book("Job", 773),
        new Book("Wisdom of Solomon", 813),
        new Book("Ecclesiasticus", 836),
        new Book("Esther", 897),
        new Book("Judith", 912),
        new Book("Tobit", 934),
        new Book("Hosea", 949),
        new Book("Amos", 958),
        new Book("Micah", 966),
        new Book("Joel", 972),
        new Book("Obadiah", 976),
        new Book("Jonah", 977),
        new Book("Nahum", 980),
        new Book("Habakkuk", 982),
        new Book("Zephaniah", 985),
        new Book("Haggai", 988),
        new Book("Zechariah", 991),
        new Book("Malachi", 1003),
        new Book("Isaiah", 1006),
        new Book("Jeremiah", 1068),
        new Book("Baruch", 1131),
        new Book("Lamentations", 1137),
        new Book("Letter of Jeremiah", 1144),
        new Book("Ezekiel", 1147),
        new Book("Daniel", 1210)
    ],
    [
        new Book("Matthew", 1239),
        new Book("Mark", 1281),
        new Book("Luke", 1308),
        new Book("John", 1353),
        new Book("Acts", 1386),
        new Book("James", 1430),
        new Book("1 Peter", 1434),
        new Book("2 Peter", 1438),
        new Book("1 John", 1441),
        new Book("2 John", 1446),
        new Book("3 John", 1446),
        new Book("Jude", 1447),
        new Book("Romans", 1449),
        new Book("1 Corinthians", 1465),
        new Book("2 Corinthians", 1481),
        new Book("Galatians", 1492),
        new Book("Ephesians", 1497),
        new Book("Philippians", 1503),
        new Book("Colossians", 1506),
        new Book("1 Thessalonians", 1510),
        new Book("2 Thessalonians", 1514),
        new Book("Hebrews", 1516),
        new Book("Revelation", 1527)
    ]),
    new Codex("Sinaiticus", 823, [
        new Book("Genesis", 1),
        new Book("Leviticus", 5),
        new Book("Numbers", 7),
        new Book("Deuteronomy", 17),
        new Book("Joshua", 21),
        new Book("Judges", 23),
        new Book("1 Chronicles", 35),
        new Book("Nehemiah", 46),
        new Book("Esther", 63),
        new Book("Tobit", 75),
        new Book("Judith", 89),
        new Book("1 Maccabees", 107),
        new Book("4 Maccabees", 143),
        new Book("Isaiah", 159),
        new Book("Jeremiah", 211),
        new Book("Lamentations", 268),
        new Book("Joel", 271),
        new Book("Obadiah", 274),
        new Book("Jonah", 275),
        new Book("Nahum", 277),
        new Book("Habakkuk", 279),
        new Book("Zephaniah", 281),
        new Book("Haggai", 284),
        new Book("Zechariah", 286),
        new Book("Malachi", 295),
        new Book("Psalms", 299),
        new Book("Proverbs", 380),
        new Book("Ecclesiastes", 409),
        new Book("Song of Songs", 419),
        new Book("Wisdom of Solomon", 425),
        new Book("Ecclesiasticus", 444),
        new Book("Job", 494)
    ],
    [
        new Book("Matthew", 523),
        new Book("Mark", 558),
        new Book("Luke", 579),
        new Book("John", 617),
        new Book("Romans", 645),
        new Book("1 Corinthians", 658),
        new Book("2 Corinthians", 671),
        new Book("Galatians", 680),
        new Book("Ephesians", 684),
        new Book("Philippians", 689),
        new Book("Colossians", 692),
        new Book("1 Thessalonians", 696),
        new Book("2 Thessalonians", 699),
        new Book("Hebrews", 700),
        new Book("1 Timothy", 711),
        new Book("2 Timothy", 714),
        new Book("Titus", 717),
        new Book("Philemon", 718),
        new Book("Acts", 721),
        new Book("James", 758),
        new Book("1 Peter", 761),
        new Book("2 Peter", 765),
        new Book("1 John", 767),
        new Book("2 John", 771),
        new Book("3 John", 772),
        new Book("Jude", 772),
        new Book("Revelation", 774),
        new Book("Letter of Barnabas", 791),
        new Book("Shepherd of Hermas", 805)
    ]),
    new Codex("Alexandrinus", 1604, [
        new Book("Genesis", 24),
        new Book("Exodus", 90),
        new Book("Leviticus", 141),
        new Book("Numbers", 178),
        new Book("Deuteronomy", 228),
        new Book("Joshua", 272),
        new Book("Judges", 305),
        new Book("Ruth", 339),
        new Book("1 Samuel", 344),
        new Book("2 Samuel", 384),
        new Book("1 Kings", 418),
        new Book("2 Kings", 464),
        new Book("1 Chronicles", 502),
        new Book("2 Chronicles", 533),
        new Book("Hosea", 581),
        new Book("Amos", 590),
        new Book("Micah", 597),
        new Book("Joel", 602),
        new Book("Obadiah", 605),
        new Book("Jonah", 606),
        new Book("Nahum", 608),
        new Book("Habakkuk", 611),
        new Book("Zephaniah", 613),
        new Book("Haggai", 616),
        new Book("Zechariah", 618),
        new Book("Malachi", 628),
        new Book("Isaiah", 631),
        new Book("Jeremiah", 689),
        new Book("Baruch", 750),
        new Book("Lamentations", 756),
        new Book("Letter of Jeremiah", 763),
        new Book("Ezekiel", 767),
        new Book("Daniel", 833),
        new Book("Esther", 863),
        new Book("Tobit", 875),
        new Book("Judith", 885),
        new Book("Ezra", 903),
        new Book("Nehemiah", 922),
        new Book("1 Maccabees", 949),
        new Book("2 Maccabees", 992),
        new Book("3 Maccabees", 1022),
        new Book("4 Maccabees", 1035),
        new Book("Athanasius", 1062),
        new Book("Jerome", 1078),
        new Book("Psalms", 1079),
        new Book("Job", 1156),
        new Book("Proverbs", 1187),
        new Book("Ecclesiastes", 1214),
        new Book("Song of Solomon", 1224),
        new Book("Wisdom of Solomon", 1230),
        new Book("Ecclesiasticus", 1248)
    ],
    [
        new Book("Matthew", 1318),
        new Book("Mark", 1325),
        new Book("Luke", 1352),
        new Book("John", 1398),
        new Book("Acts", 1426),
        new Book("James", 1466),
        new Book("1 Peter", 1470),
        new Book("2 Peter", 1474),
        new Book("1 John", 1477),
        new Book("2 John", 1481),
        new Book("3 John", 1482),
        new Book("Jude", 1482),
        new Book("Letter to the Romans", 1484),
        new Book("1 Corinthians", 1499),
        new Book("2 Corinthians", 1513),
        new Book("Galatians", 1517),
        new Book("Ephesians", 1522),
        new Book("Philippians", 1528),
        new Book("Colossians", 1531),
        new Book("1 Thessalonians", 1535),
        new Book("2 Thessalonians", 1538),
        new Book("Hebrews", 1540),
        new Book("1 Timothy", 1552),
        new Book("2 Timothy", 1556),
        new Book("Titus", 1560),
        new Book("Philemon", 1562),
        new Book("Revelation", 1564),
        new Book("1 Clement", 1582),
        new Book("2 Clement", 1600)
    ]),
    new Codex("Ephraemi", 437, [
        new Book("TODO", 0)
    ],
    [
        new Book("TODO", 0)
    ]),
    new Codex("Bezae", 856, [
        new Book("None", 0)
    ],
    [
        new Book("Matthew", 7),
        new Book("John", 194),
        new Book("Luke", 345),
        new Book("Mark", 551),
        new Book("3 John", 678),
        new Book("Acts", 679)
    ])
];

var codex_index = 0;
var image_index = 1;

function index_to_image_name() {
    let number = `${image_index}`;
    let image_index_length = image_index.toString().length;
    if (codices[codex_index].get_total_pages() < 1000) {
        if (image_index_length == 1) {
            number = `00${image_index}`;
        }
        else if (image_index_length == 2) {
            number = `0${image_index}`;
        }
    }
    else {
        if (image_index_length == 1) {
            number = `000${image_index}`;
        }
        else if (image_index_length == 2) {
            number = `00${image_index}`;
        }
        else if (image_index_length == 3) {
            number = `0${image_index}`;
        }
    }
    return number;
}

function load_image() {
    let image_number = index_to_image_name();
    let compressed_image_url = `https://raw.githubusercontent.com/0x53616D75656C/Codex-${codices[codex_index].get_name()}/main/images/compressed/${image_number}.webp`;
    document.getElementById("image-number").innerHTML = `Image ${image_index} of ${codices[codex_index].get_total_pages()}`;
    document.getElementById("image-container").innerHTML = `<img src="${compressed_image_url}" alt="Codex ${codices[codex_index].get_name()} image">`;
}

function load_codex() {
    let old_testament_books = ``;
    let new_testament_books = ``;
    for (let i = 0; i < codices[codex_index].get_old_testament_books().length; i++) {
        old_testament_books += `<li>${codices[codex_index].get_old_testament_books()[i].get_name()}</li>`;
    }
    for (let i = 0; i < codices[codex_index].get_new_testament_books().length; i++) {
        new_testament_books += `<li>${codices[codex_index].get_new_testament_books()[i].get_name()}</li>`;
    }
    document.getElementById("old-testament-books").innerHTML = `${old_testament_books}`;
    document.getElementById("new-testament-books").innerHTML = `${new_testament_books}`;
    load_image();
}

function decrement_or_increment_image(value) {
    let new_image_index = image_index + value;
    if (new_image_index >= 1 && new_image_index <= codices[codex_index].get_total_pages()) {
        image_index += value;
        load_image();
    }
}

const codex_select = document.getElementById("codices");
const decrement_button = document.getElementById("decrement-image");
const increment_button = document.getElementById("increment-image");
const download_button = document.getElementById("download-images");
const old_testament_list = document.getElementById("old-testament-books");
const new_testament_list = document.getElementById("new-testament-books");

window.addEventListener("load", function() {
    load_codex();
});

codex_select.addEventListener("change", function() {
    codex_index = codex_select.selectedIndex;
    image_index = 1;
    load_codex();
});

decrement_button.addEventListener("click", function() {
    decrement_or_increment_image(-1);
});

increment_button.addEventListener("click", function() {
    decrement_or_increment_image(1);
});

download_button.addEventListener("click", function() {
    window.open(`https://github.com/0x53616D75656C/Codex-${codices[codex_index].get_name()}/archive/refs/heads/main.zip`);
});

old_testament_list.addEventListener("click", function(event) {
    let i = 0;
    for (; codices[codex_index].get_old_testament_books()[i].get_name() != event.target.textContent; i++) { }
    image_index = codices[codex_index].get_old_testament_books()[i].get_page_number();
    load_image();
});

new_testament_list.addEventListener("click", function(event) {
    let i = 0;
    for (; codices[codex_index].get_new_testament_books()[i].get_name() != event.target.textContent; i++) { }
    image_index = codices[codex_index].get_new_testament_books()[i].get_page_number();
    load_image();
});

/* SmtpJS.com - v3.0.0 */
let Email = {
    send: function(a) {
        return new Promise(function(n, e) {
            (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = "Send");
            let t = JSON.stringify(a);
            Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) {
                n(e);
            });
        });
    },
    
    ajaxPost: function(e, n, t) {
        let a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        (a.onload = function() {
            let e = a.responseText;
            null != t && t(e);
        }),
        a.send(n);
    },
    
    ajax: function(e, n) {
        let t = Email.createCORSRequest("GET", e);
        (t.onload = function() {
            let e = t.responseText;
            null != n && n(e);
        }),
        t.send();
    },
    
    createCORSRequest: function(e, n) {
        let t = new XMLHttpRequest();
        return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest()).open(e, n) : (t = null), t;
    },
};

/* SmtpJS.com - v3.0.0 */
function send_email(subject, body) {
    Email.send({
        SecureToken: "0725ead0-7767-4798-a47d-b88f0d9aefff",
        To: "grochowskisamuel@hotmail.com",
        From: "0x416E6F6E796D6F7573@proton.me",
        Subject: subject,
        Body: body
    }).then(message => alert(message));
}

const open_dialog = document.getElementById("open-dialog");
const contact_dialog = document.getElementById("contact-dialog");
const cancel_button = document.getElementById("cancel");
const confirm_button = document.getElementById("confirm");
const subject_input = document.getElementById("subject");
const body_textarea = document.getElementById("body");

open_dialog.addEventListener("click", function() {
    subject_input.value = "";
    body_textarea.value = "";
    contact_dialog.showModal();
});

cancel_button.addEventListener("click", function() {
    contact_dialog.close();
});

confirm_button.addEventListener("click", function(event) {
    event.preventDefault();
    if(subject_input.value === "" || body_textarea.value === "") {
        contact_dialog.close();
        
    }else {
        send_email(subject_input.value, body_textarea.value);
        contact_dialog.close();
    }
});
