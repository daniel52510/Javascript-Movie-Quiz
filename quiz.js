/*
Genres for Hash/Map include:
Horror
Fantasy
Action
Western
Comedy
Psychological
Drama
Sci-Fi
Anime
Documentary
 */
/*
Keys for Genres:
0---Action
1---Anime
2---Drama
3---Fantasy
4---Horror
5---Comedy
6---Psychological
7---Sci-Fi
8---Western
9---Documentary
*/
// Create New Map
//    Key--------Value
const pic_genre = new Map();
pic_genre.set(0,"quiz1.gif");
pic_genre.set(1,"quiz2.gif");
pic_genre.set(2,"quiz3.gif");
pic_genre.set(3,"quiz4.gif");
pic_genre.set(4,"quiz5.gif");
pic_genre.set(5,"quiz6.gif");
pic_genre.set(6,"quiz7.gif");
pic_genre.set(7,"quiz8.gif");
pic_genre.set(8,"quiz9.gif");
pic_genre.set(9,"quiz10.gif");
var questions = [
    "How much do you love action movies such as The Terminator?",
    "How much of a fan are you of anime like Gintama or Naruto?",
    "Rate your fondness of dramas such as Rocky!",
    "What do you think of Fantasy movies? (Game of Thrones, World of Warcraft, etc.)",
    "Do you get excited for jump scares when you watch horror movies?",
    "How much do you love laughing your butt off in comedy movies such as Elf?",
    "Do you love pondering the hidden meaning in psychological movies such as Pulp Fiction?",
    "How do you feel about space adventure movies such as the famous Star Wars movies?",
    "Do you love to watch a good old western such as The Good, the Bad, and the Ugly?",
    "Do you like to kick back and watch a good documentary about topics such as Nature or Crime?"];
//Randomized questions
var index = Math.floor(Math.random() * 10);
//Array for containing answered questions
var quest_answered = [];
var selected_level;
function hello() {
    //Created 5 radio buttons
    var rb1 = document.getElementById("radio1");
    var rb2 = document.getElementById("radio2");
    var rb3 = document.getElementById("radio3");
    var rb4 = document.getElementById("radio4");
    var rb5 = document.getElementById("radio5");

    //if statement for checking if the radio button is checked
    if (rb1.checked == true) {
        //Sets next button disabled to false for user.
        document.getElementById("next_butt").disabled = false;
        //Confirmation radio button is selected.
        //alert("You have selected the value " + rb1.value);
        selected_level = 1;
    }
    if (rb2.checked == true) {
        document.getElementById("next_butt").disabled = false;
        //alert("You have selected the value " + rb2.value);
        selected_level = 2;
    }
    if (rb3.checked == true) {
        document.getElementById("next_butt").disabled = false;
       // alert("You have selected the value " + rb3.value);
        selected_level = 3;
    }
    if (rb4.checked == true) {
        document.getElementById("next_butt").disabled = false;
        //alert("You have selected the value " + rb4.value);
        selected_level = 4;
    }
    if (rb5.checked == true) {
        document.getElementById("next_butt").disabled = false;
        //alert("You have selected the value " + rb5.value);
        selected_level = 5;
    }
}
function print_map (map) {
    let text = "";
    for (const x of map.entries()) {
        text += x + "<br>";
    }
    return text;
}
function set_progress(value) {
    var element = document.getElementById("alt");
    var element1 = document.getElementById("hi");
    element1.innerHTML = value.toString() + "%";
    element.style.setProperty('--width',value);
}
window.onload = function start_game() {
    document.getElementById("img1").src = pic_genre.get(index);
    document.getElementById("quest").innerHTML = questions[index];
}
function live_score() {
    var action = 0;
    var anime = 0;
    var drama = 0;
    var fantasy = 0;
    var horror = 0;
    var comedy = 0;
    var psychological = 0;
    var scifi = 0;
    var western = 0;
    var documentary = 0;
    if(index == 0)  {
        document.getElementById("action").innerHTML = "Action: " + ((selected_level += action / 20) * 10).toString() + "%";
        set_progress((selected_level += action / 20) * 10);
    }
    if(index == 1) {
        document.getElementById("anime").innerHTML = "Anime: " + ((selected_level += anime / 20) * 10).toString() + "%";
    }
    if(index == 2) {
        document.getElementById("drama").innerHTML = "Drama: " + ((selected_level += drama / 20) * 10).toString() + "%";
    }
    if(index == 3) {
        document.getElementById("fantasy").innerHTML = "Fantasy: " + ((selected_level += fantasy / 20) * 10).toString() + "%";
    }
    if(index == 4) {
        document.getElementById("horror").innerHTML = "Horror: " + ((selected_level += horror / 20) * 10).toString() + "%";
    }
    if(index == 5) {
        document.getElementById("comedy").innerHTML = "Comedy: " + ((selected_level += comedy / 20) * 10).toString() + "%";
    }
    if(index == 6) {
        document.getElementById("psychological").innerHTML = "Psychological: " + ((selected_level += psychological / 20) * 10).toString() + "%";
    }
    if(index == 7) {
        document.getElementById("scifi").innerHTML = "Sci-Fi: " + ((selected_level += scifi / 20) * 10).toString() + "%";
    }
    if(index == 8) {
        document.getElementById("western").innerHTML = "Western: " + ((selected_level += western / 20) * 10).toString() + "%";
    }
    if(index == 9) {
        document.getElementById("documentary").innerHTML = "Documentary: " + ((selected_level += documentary / 20) * 10).toString() + "%";
    }
}

window.onload = function start_game() {
    document.getElementById("img1").src = pic_genre.get(index);
    document.getElementById("quest").innerHTML = questions[index];
}
function next_question() {
        live_score();
    //    add_score(selected_level);
    //alert(print_map(genre_scores));
        quest_answered.push(index);
        while(quest_answered.includes(index) && quest_answered.length != 10) {
            index = Math.floor(Math.random() * 10);
        }
        selected_level = 0;
        document.getElementById("next_butt").disabled = true;
        document.getElementById("img1").src = pic_genre.get(index);
        document.getElementById("quest").innerHTML = questions[index];
        document.getElementById("radio1").checked = false;
        document.getElementById("radio2").checked = false;
        document.getElementById("radio3").checked = false;
        document.getElementById("radio4").checked = false;
        document.getElementById("radio5").checked = false;

    if(quest_answered.length == 10) {
        alert("You finished the game!");
        document.getElementById("end").disabled = false;
    }
}
function end_game() {
    document.getElementById("para").innerHTML = print_map(genre_scores);
}



