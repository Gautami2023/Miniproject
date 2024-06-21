function generate() {
    var quotes = {
        "― Oscar Wilde": '"Be yourself; everyone else is already taken."',
        "_ Mark Twain": '"The secret of getting ahead is getting started."',
        "_ Walter Savage Landor": '"We talk on principal, but act on motivation."',
        "_ Abraham Lincoln": '"The best way to predict the future is to create it."',
        "_ Joe Kennedy": '"When the going gets tough, the tough get going"'
    }
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;


}