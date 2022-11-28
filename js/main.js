button1 = document.getElementById("dodaj");
button2 = document.getElementById('usun');
paragraph = document.getElementById('tekst')

console.log(button1)
console.log(button2)

button1.onclick = function (){
    paragraph.textContent = 'Na wyścigach wyścigowych wyścigówek wyścigowych wyścigówka wyścigowa wyścignęła wyścigówkę wyścigową numer sześć'
};

button2.onclick = function (){
    paragraph.textContent = ''
}