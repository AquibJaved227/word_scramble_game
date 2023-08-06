const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");
let play = false;
let newWords = "";
let ranWords = "";
let playWord = ['python', 'go', 'java', 'javascript', 'ruby', 'perl', 'visualbasicnet', 'sql', 'php', 'matlab', 'swift', 'scratch', 'kotlin', 'julia', 'lua', 'fortran', 'cobol', 'lisp', 'ada', 'dart', 'scala', 'prolog', 'bash', 'powershell', 'haskell', 'logo', 'c++']



const randomFunction = () => {
  let randomNumber = Math.floor(Math.random() * playWord.length);
  let newtemprandomNumber = playWord[randomNumber]
  return newtemprandomNumber;
}

const scrambleWords = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i]
    let j = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[j]
    arr[j] = temp;
  }
  return arr;
}


btn.addEventListener('click', function() {
  if (!play) {
    play = true;
    btn.innerHTML = "GUESS";
    guess.classList.toggle('hidden');
    newWords = randomFunction();
    ranWords = scrambleWords(newWords.split("")).join("");
    msg.innerHTML = ` Guess the Word : ${ranWords}`;
  }
  else {
    let tempWords = guess.value;
    if (tempWords === newWords) {
      play = false;
      msg.innerHTML = `Awesome,CORRECT 😁 It is : ${newWords}`;
      btn.innerHTML = `Start Again`;
      guess.classList.toggle('hidden');
      guess.value = "";
    } else {
      msg.innerHTML = `Sorry, INCORRECT 🤦‍♂️ Try Again <br> ${ranWords} `;
    }
  }
});

