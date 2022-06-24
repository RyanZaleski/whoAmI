/***** VARIABLES *****/

const mainGame = document.querySelector('.mainGame')
const howToPlay = document.querySelector('.howToPlay')
const statistics = document.querySelector('.statistics')
const exit = document.querySelectorAll('.exit')
const openStatistics = document.querySelector('.openStatistics')
const openHowToPlay = document.querySelector('.openHowToPlay')

/***** FUNCTIONS FOR OPENING/CLOSING DIFFERENT SECTIONS *****/

exit.forEach(elem => elem.addEventListener('click', close))
function close(){
    mainGame.style.display = 'flex'
    howToPlay.style.display = 'none'
    statistics.style.display = 'none'
}

openStatistics.addEventListener('click', showStats)
function showStats(){
    updateStatsModal();
    statistics.style.display = 'flex'
    mainGame.style.display = 'none'
    howToPlay.style.display = 'none'
}

openHowToPlay.addEventListener('click', showHowToPlay)
function showHowToPlay(){
    howToPlay.style.display = 'flex'
    mainGame.style.display = 'none'
    statistics.style.display = 'none'
}

/***** LIST OF FOOTBALLERS *****/

const ibrahimavic = {
    fullName: 'Zlatan Ibrahimavic',
    lastName: 'Ibrahimavic',
    listOfPlayers: ['Lionel Messi', 'Thiago', 'Juan Mata', 'Rafael van der Vaart', 'Patrick Vieira', 'Gianluigi Buffon', 'Blaise Matuidi', 'Thiago Silva', 'Edinson Cavani', 'Paul Pogba'],
}

const ferdinand = {
fullName: 'Rio Ferdinand',
lastName: 'Ferdinand',
listOfPlayers: ['Robbie Fowler', 'Paolo Di Canio', 'Stuart Pearce', 'Mark Viduka', 'Harry Kewell', 'Frank Lampard', 'Danny Welbeck', 'Fabien Barthez', 'David Beckham', 'Roy Keane']
}

const fabregas = {
fullName: 'Cesc Fabregas',
lastName: 'Fabregas',
listOfPlayers: ['Thibaut Courtois', 'Eden Hazard', 'John Obi Mikel', 'Neymar', 'Alex Song', 'Robin van Persie', 'Kurt Zouma', 'John Terry', 'Messi', 'Nicklas Bendtner']
}

const milner = {
fullName: 'James Milner',
lastName: 'Milner',
listOfPlayers: ['Christian Benteke', 'Danny Ings', 'Kolo Toure', 'Emre Can', 'Frank Lampard', 'Samir Nasri', 'Bacary Sagna', 'Gary Cahill', 'Milan Baros', 'Kazenga LuaLua']
}

const lampard = {
fullName: 'Frank Lampard',
lastName: 'Lampard',
listOfPlayers: ['Sergio Aguero', 'Bacary Sagna', ' Samir Nasri', 'Gael Clichy', 'Mohamed Salah', 'Fernando Torres', 'Demba Ba', "Samuel Eto'o", 'Juan Mata', 'Florent Malouda']
}

const lukaku = {
fullName: 'Romelu Lukaku',
lastName: 'Lukaku',
listOfPlayers: ['Fernando Torres', 'David Luiz', 'Ramires', 'Michael Essien', 'Ben Foster', 'Ross Barkley', 'Gareth Barry', 'Kevin De Bruyno', 'Eden Hazard', 'Mason Mount']
}

const lewandowski = {
fullName: 'Robert Lewandowski',
lastName: 'Lewandowski',
listOfPlayers: ['Shinji Kagawa', 'Ilkay Gundogan', 'Ivan Perisic', 'Pierre-Emerick Aubameyang', 'Pepe Reina', 'Douglas Costa', 'James Rodriguez', 'Arturo Vidal', 'Arjen Robben', 'Manuel Neuer']
}

const rodriguez = {
fullName: 'James Rodriguez',
lastName: 'Rodriguez',
listOfPlayers: ['Lucas Digne', 'Dimitar Berbatov', 'Gareth Bale', 'Anthony Martial', 'Eden Hazard', 'Javier Hernandez', 'Christiano Ronaldo', 'Thibaut Courtois', 'Ramadel Falcao', 'Jordan Pickford']
}

const footballers = [ibrahimavic, ferdinand, fabregas, milner, lampard, lukaku, lewandowski, rodriguez, ibrahimavic, ferdinand, fabregas, milner, lampard, lukaku, lewandowski, rodriguez, ibrahimavic, ferdinand, fabregas, milner, lampard, lukaku, lewandowski, rodriguez, ibrahimavic, ferdinand, fabregas, milner, lampard, lukaku, lewandowski, rodriguez, ibrahimavic, ferdinand, fabregas, milner, lampard, lukaku, lewandowski, rodriguez];

let currentFootballerIndex = 0;
let totalWins = 0;
let totalGames = 0;
let currentStreak = 0;
let numOfGuesses = 1
let currentFootballer = footballers[currentFootballerIndex]
let guessedFootballers = [[]];


initLocalStorage();
loadLocalStorage();


document.querySelector('.one').innerText = currentFootballer.listOfPlayers[0]
document.querySelector('.two').innerText = currentFootballer.listOfPlayers[1]
document.querySelector('.three').innerText = currentFootballer.listOfPlayers[2]
document.querySelector('.four').innerText = currentFootballer.listOfPlayers[3]
document.querySelector('.five').innerText = currentFootballer.listOfPlayers[4]



function initLocalStorage() {
    const storedCurrentFootballerIndex = window.localStorage.getItem('currentFootballerIndex')
    if (!storedCurrentFootballerIndex) {
        window.localStorage.setItem('currentFootballerIndex', currentFootballerIndex)
    } else {
        currentFootballerIndex = Number(storedCurrentFootballerIndex)
        currentFootballer = footballers[currentFootballerIndex]
        
    }
}

function updateFootballerIndex() {
    window.localStorage.setItem('currentFootballerIndex', currentFootballerIndex + 1)
    currentFootballerIndex = currentFootballerIndex + 1
}

function showResult(){
    const totalWins = window.localStorage.getItem('totalWins') || 0;
    window.localStorage.setItem('totalWins', Number(totalWins) + 1);

    const currentStreak = window.localStorage.getItem('currentStreak') || 0;
    window.localStorage.setItem('currentStreak', Number(currentStreak) + 1);
}

function showLosingResult(){
    window.localStorage.setItem('currentStreak', 0)
}

function updateTotalGames(){
    const totalGames = window.localStorage.getItem('totalGames') || 0;
    window.localStorage.setItem('totalGames', Number(totalGames)+ 1);
}

function updateNumOfGuesses(){
    const numOfGuesses = window.localStorage.getItem('numOfGuesses') || 0;
    window.localStorage.setItem('numOfGuesses', Number(numOfGuesses) + 1);

}

function updateStatsModal(){
    const currentStreak = window.localStorage.getItem('currentStreak') || 0;
    const totalWins = window.localStorage.getItem('totalWins') || 0;
    const totalGames = window.localStorage.getItem('totalGames') || 0;
    document.querySelector('.gamesPlayed').textContent = `Games played: ${totalGames}`
    document.querySelector('.currentStreak').textContent = `Current streak: ${currentStreak}`
    const winPct = Math.round((totalWins / totalGames) * 100 || 0)
    document.querySelector('.winPct'). textContent = `Win percentage: ${winPct}%`
}

function preserveGameState(){
    window.localStorage.setItem('guessedFootballers', JSON.stringify(guessedFootballers));
    const incorrectAnswers = document.getElementById('list');
    window.localStorage.setItem('incorrectAnswers', incorrectAnswers.innerHTML)
}

function loadLocalStorage(){
    currentFootballerIndex = Number(window.localStorage.getItem('currentFootballerIndex')) || currentFootballerIndex
    guessedFootballers = JSON.parse(window.localStorage.getItem('guessedFootballers')) || guessedFootballers
    currentFootballer = footballers[currentFootballerIndex]

    const incorrectAnswers = window.localStorage.getItem('incorrectAnswers');
    if (numOfGuesses > 1) {
    document.getElementById('list').innerHTML = incorrectAnswers;
    } else {
        document.getElementById('list').innerHTML = '';
    }
}


/***** LOGIC FOR GAME *****/

document.querySelector('#submit').addEventListener('click', result)

function result(){

let inputedAnswer = document.querySelector('input').value
let ul = document.getElementById("list")
let li = document.createElement("li")

if((inputedAnswer.toLowerCase() !== currentFootballer.fullName.toLowerCase()) && (inputedAnswer.toLowerCase() !== currentFootballer.lastName.toLowerCase())){
    numOfGuesses = numOfGuesses + 1
    li.appendChild(document.createTextNode(inputedAnswer)); // if the answer is wrong, print that answer to the dom with the class of 'wrong'
    li.setAttribute('class', 'wrong');
    ul.appendChild(li)
    initLocalStorage();
    document.getElementById('result').value = "";
    console.log(numOfGuesses)
    preserveGameState();
    loadLocalStorage();
    updateNumOfGuesses();

} else {
    ul.appendChild(li) // if the answer is correct, print that answer to the dom with the class of 'correct'
    li.appendChild(document.createTextNode(inputedAnswer));
    li.setAttribute('class', 'correct');
    document.querySelector('.answeredCorrect').style.display = 'flex';
    document.querySelector('.search').style.display = 'none';
    initLocalStorage();
    updateFootballerIndex();
    updateTotalGames();
    showResult();
    window.localStorage.setItem('numOfGuesses', Number(1))
}

    
    if (numOfGuesses === 1){
    document.querySelector('.successMessage').innerText = `Correct, you guessed todays footballer in ${numOfGuesses} attempt.` }
    else {
        document.querySelector('.successMessage').innerText = `Correct, you guessed todays footballer in ${numOfGuesses} attempts.` 
    }


if (numOfGuesses > 6) {
    updateTotalGames()
    showLosingResult();
    updateFootballerIndex();
    preserveGameState();
    
    document.querySelector('.failed').style.display = 'flex';
    document.querySelector('.search').style.display = 'none';
    document.querySelector('.failMessage').innerText = 'Unlucky, better lucky next time!';
    document.querySelector('.todaysFootballer').innerHTML = `Today's footballer was <span>${currentFootballer.fullName}</span>`;
    
}
}

