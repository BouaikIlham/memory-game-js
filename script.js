document.addEventListener('DOMContentLoaded', () => {
    
    let cardArray = [
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
    ]

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(cardArray)
    const grid = document.getElementById("grid")
    const resultDisplay = document.getElementById("score")
    const message = document.getElementById("message")
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

// create Board

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/mask.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
     }
// check for matches

     function CheckForMatch() {
     const cards = document.querySelectorAll('img')
     const optionOneId = cardsChosenId[0]
     const optionTowId = cardsChosenId[1]
     if (cardArray[cardsChosenId[0]].img === cardArray[cardsChosenId[1]].img) {
      
        message.textContent = "you found a match"
         cards[optionOneId].setAttribute('src', 'images/white.png')
         cards[optionTowId].setAttribute('src', 'images/white.png')
         cardsWon.push(cardsChosen)
     } else {
        cards[optionOneId].setAttribute('src', 'images/mask.png')
        cards[optionTowId].setAttribute('src', 'images/mask.png')
        message.textContent = "sorry, try again"
     }
     cardsChosen = []
     cardsChosenId = []
     resultDisplay.textContent = cardsWon.length
     if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'congratulation!! you found them all!!'
     }
     }

// flip your card
    function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(CheckForMatch, 500)
    }

    }
 
    createBoard()
})  