
/*===========================================================

                         GEHEUGEN SPEL   
Gemaakt door maikel Okken, dit is een simpel spel met behulp
van javascript door een simpele tutorial te volgen heb ik dit
uitgetypt en gemaakt om javascript beter te begrijpen.

      Video: https://www.youtube.com/watch?v=tjyDOHzKN0w



Geleerd:
  • push()
  • querySelector()
  • SetAttribute()
  • getAttribute()
  • appendChild()
  • sort()
  • For loops
  • createElement()
===========================================================*/

document.addEventListener('DOMContentLoaded', () => {
  //kaart opties
  //De images die je moet verzamelen
  const cardArray = [
    {
      name: 'glassesemoji',  
      img: 'images/glassesemoji.png'
    },
    {
      name: 'happyemoji',
      img: 'images/happyemoji.png'
    },
    {
      name: 'sademoji',
      img: 'images/sademoji.png'
    },
    {
      name: 'straightfaceemoji',
      img: 'images/straightfaceemoji.png'
    },
    {
      name: 'tongemoji',
      img: 'images/tongemoji.png'
    },
    {
      name: 'mademoji',
      img: 'images/mademoji.png'
    },
    {
      name: 'glassesemoji',
      img: 'images/glassesemoji.png'
    },
    {
      name: 'happyemoji',
      img: 'images/happyemoji.png'
    },
    {
      name: 'sademoji',
      img: 'images/sademoji.png'
    },
    {
      name: 'straightfaceemoji',
      img: 'images/straightfaceemoji.png'
    },
    {
      name: 'tongemoji',
      img: 'images/tongemoji.png'
    },
    {
      name: 'mademoji',
      img: 'images/mademoji.png'
    },
  ]

  
  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')

  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //Speelveld maken
  function Speelveld() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipkaart)
      grid.appendChild(card)
    }
  }

  //Bekijk of het een match is zo niet/wel krijg je een alert 
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) { 
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {   //<------- als het een match word dat de achtergrond wit word
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipkaart)
      cards[optionTwoId].removeEventListener('click', flipkaart)
      cardsWon.push(cardsChosen)
    } else {                                        //<------- als het geen match word dat de achtergrond weer terug
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) { //<------- laat zien als je alle kaarten hebt
      resultDisplay.textContent = 'Congratulations! You found all the emotes !'
    }
  }

  //de functie om kaarten om te draaien
  function flipkaart() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)           //<------- kijk voor een match na 500 mm seconde
    }
  }
  Speelveld()
})
