const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const symbol = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const passwordOneEl = document.getElementById("password-one-el")
const passwordTwoEl = document.getElementById("password-two-el")

const difficultyOneEl = document.getElementById("difficulty-one-el")
const lengthOneEl = document.getElementById("length-one-el")
const difficultyTwoEl = document.getElementById("difficulty-two-el")
const lengthTwoEl = document.getElementById("length-two-el")

difficultyOneEl.textContent += "None"
lengthOneEl.textContent += 0
difficultyTwoEl.textContent += "None"
lengthTwoEl.textContent += 0

function generatePassword() {

    let password = ""
    let difficultyLevel = ""
    let randomCharacter = ""
    /*
    Random password difficulty
    12 - 20 : Good
    21 - 30 : Very Good
    31 - 40 : Excellent
    */
    const randomDifficulty = Math.floor(Math.random() * (40 - 12 + 1) + 12)

    for (let i = 1; i <= randomDifficulty; i++) {

        /*
        get random array assuming
        numbers array = 1
        lowercase array = 2
        uppercase array = 3
        symbol array = 4
        */
        const randomIndexArray = Math.floor(
            (Math.random() * 4) + 1
        )
        
        if (randomIndexArray === 1) {
            
            randomCharacter = numbers[Math.floor(Math.random() * numbers.length)]
        
        } else if (randomIndexArray === 2) {

            randomCharacter = lowerCase[Math.floor(Math.random() * lowerCase.length)]
        
        } else if (randomIndexArray === 3) {

            randomCharacter = upperCase[Math.floor(Math.random() * upperCase.length)]
        
        } else {

            randomCharacter = symbol[Math.floor(Math.random() * symbol.length)]
        }

        password += randomCharacter
    }

    //Determine password difficulty level
    
    if (randomDifficulty <= 20) {

        difficultyLevel = "Good"
    
    } else if (randomDifficulty <= 30) {

        difficultyLevel = "Very Good"
    
    } else {

        difficultyLevel = "Excellent"
    } 

    const passwordObject = {
        password: password,
        level: difficultyLevel,
        length: randomDifficulty
    }

    return passwordObject
}

function getPassword() {

    //Clear previous password and details
    clearAll()

    //get and display password and details

    const passwordOne = generatePassword()
    const passwordTwo = generatePassword()

    passwordOneEl.textContent = passwordOne.password
    passwordTwoEl.textContent = passwordTwo.password

    difficultyOneEl.textContent += passwordOne.level
    lengthOneEl.textContent += passwordOne.length
    difficultyTwoEl.textContent += passwordTwo.level
    lengthTwoEl.textContent += passwordTwo.length


}

function clearAll() {

    //Clear previous generated password and details
    passwordOneEl.textContent = ""
    passwordTwoEl.textContent = ""

    difficultyOneEl.textContent = "Difficulty: "
    lengthOneEl.textContent = "Length: "
    difficultyTwoEl.textContent = "Difficulty: "
    lengthTwoEl.textContent = "Length: "

}