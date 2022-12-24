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
    "Do you like to kick back and watch a good documentary about topics such as Nature or Crime?",
    "On a scale of 1-5 (1 being hate and 5 being adore), how much do you like Harry Potter?",
    "How much of a fan are you of Call of Duty?",
    "Do you consider yourself a dramatic person?",
    "Do you consider yourself to be analytical person?",
    "When you were a child, did you role-play a lot as a Cowboy?",
    "How much of a animal lover are you?",
    "How much of an interest in human behavior do you have?",
    "Do you consider yourself to be a funny person?",
    "Do you have an interest in manga or web comics?",
    "Do you enjoy the adrenaline rush when you do extreme sports?"];
var count = 1;
//Randomized questions
var index = Math.floor(Math.random() * 20);
//Array for containing answered questions
var quest_answered = [];
var selected_level = 0;
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
        selected_level = 1;
    }
    if (rb2.checked == true) {
        document.getElementById("next_butt").disabled = false;
        selected_level = 2;
    }
    if (rb3.checked == true) {
        document.getElementById("next_butt").disabled = false;
        selected_level = 3;
    }
    if (rb4.checked == true) {
        document.getElementById("next_butt").disabled = false;
        selected_level = 4;
    }
    if (rb5.checked == true) {
        document.getElementById("next_butt").disabled = false;
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
function set_progress(value, genre) {
    var element;
    var element1;
    if(genre == "action") {
        element = document.getElementById("alt");
        element1 = document.getElementById("hi");
    }
    if(genre == "anime") {
        var element = document.getElementById("alt1");
        var element1 = document.getElementById("hi1");
    }
    if(genre == "drama") {
        var element = document.getElementById("alt2");
        var element1 = document.getElementById("hi2");
    }
    if(genre == "fantasy") {
        var element = document.getElementById("alt3");
        var element1 = document.getElementById("hi3");
    }
    if(genre == "horror") {
        var element = document.getElementById("alt4");
        var element1 = document.getElementById("hi4");
    }
    if(genre == "comedy") {
        var element = document.getElementById("alt5");
        var element1 = document.getElementById("hi5");
    }
    if(genre == "psychological") {
        var element = document.getElementById("alt6");
        var element1 = document.getElementById("hi6");
    }
    if(genre == "scifi") {
        var element = document.getElementById("alt7");
        var element1 = document.getElementById("hi7");
    }
    if(genre == "western") {
        var element = document.getElementById("alt8");
        var element1 = document.getElementById("hi8");
    }
    if(genre == "documentary") {
        var element = document.getElementById("alt9");
        var element1 = document.getElementById("hi9");
    }
    element1.innerHTML = Math.round(value).toString() + "%";
    element.style.setProperty('--width',value);
}
window.onload = function start_game() {
    document.getElementById("img1").src = pic_genre.get(index);
    document.getElementById("quest").innerHTML = questions[index];
}
function live_score() {
    alert("selected_level: " + selected_level);
    if(index == 0 || index == 11)  {
        //document.getElementById("action").innerHTML = "Action: " + ((selected_level += action / 20) * 10).toString() + "%";
        set_progress(((action += selected_level / 10) * 100),"action");
    }
    if(index == 1 || index == 18)  {
        //document.getElementById("anime").innerHTML = "Anime: " + ((selected_level += anime / 20) * 10).toString() + "%";
        set_progress(((anime += selected_level / 10) * 100), "anime");
    }
    if(index == 2 || index == 12) {
       // document.getElementById("drama").innerHTML = "Drama: " + ((selected_level += drama / 20) * 10).toString() + "%";
        set_progress(((drama += selected_level / 10) * 100), "drama");
    }
    if(index == 3 || index == 10) {
        //document.getElementById("fantasy").innerHTML = "Fantasy: " + ((selected_level += fantasy / 20) * 10).toString() + "%";
        set_progress(((fantasy += selected_level / 10) * 100), "fantasy");
    }
    if(index == 4 || index == 19) {
        //document.getElementById("horror").innerHTML = "Horror: " + ((selected_level += horror / 20) * 10).toString() + "%";
        set_progress(((horror += selected_level / 10) * 100), "horror");
    }
    if(index == 5 || index == 17) {
        //document.getElementById("comedy").innerHTML = "Comedy: " + ((selected_level += comedy / 20) * 10).toString() + "%";
        set_progress(((comedy += selected_level / 10) * 100), "comedy");
    }
    if(index == 6 || index == 16) {
        //document.getElementById("psychological").innerHTML = "Psychological: " + ((selected_level += psychological / 20) * 10).toString() + "%";
        set_progress(((psychological += selected_level / 10) * 100), "psychological");
    }
    if(index == 7 || index == 13) {
        //document.getElementById("scifi").innerHTML = "Sci-Fi: " + ((selected_level += scifi / 20) * 10).toString() + "%";
        set_progress(((scifi += selected_level / 10) * 100), "scifi");
    }
    if(index == 8 || index == 14) {
       // document.getElementById("western").innerHTML = "Western: " + ((selected_level += western / 20) * 10).toString() + "%";
        set_progress(((western += selected_level / 10) * 100), "western");
    }
    if(index == 9 || index == 15) {
       // document.getElementById("documentary").innerHTML = "Documentary: " + ((selected_level += documentary / 20) * 10).toString() + "%";
        set_progress(((documentary += selected_level / 10) * 100), "documentary");
    }

}

window.onload = function start_game() {
    document.getElementById("img1").src = pic_genre.get(index);
    document.getElementById("quest").innerHTML = questions[index];
}
function next_question() {
    count += 1;
        live_score();
        quest_answered.push(index);
        while(quest_answered.includes(index) && quest_answered.length != 20) {
            index = Math.floor(Math.random() * 20);
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
        document.getElementById("count").innerHTML = count.toString() + "/20";

    if(quest_answered.length == 20) {
        alert("You finished the game!");
        document.getElementById("next_butt").disabled = true;
        document.getElementById("end").disabled = false;
    }
}
function end_game() {
    var action_final = action;
    var anime_final = anime;
    var drama_final = drama;

    alert("Action: " + action_final);
    alert("Anime: " + anime_final);
    alert("Drama: " + drama_final);

}



