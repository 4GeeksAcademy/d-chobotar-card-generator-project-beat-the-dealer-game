/* eslint-disable */
import "./style.css";

const gamesStatus = [];
const WIN = 1;
const LOSE = -1;
const TIE = 0;

const suite = [
  ["♠", "black"],
  ["♣", "black"],
  ["♥", "red"],
  ["♦", "red"]
];

const faceValues = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

const winningMessages = [
  "Looks like you've got the magic touch! Dealer, better luck next time!",
  "Dealer, did you leave your skills at home today? Victory is mine!",
  "You're on fire! But don't worry, it's just your winning streak!",
  "Who's the boss? You are! Dealer's got nothing on you!",
  "The dealer might need a little more practice. Another win for you!",
  "Is it hot in here, or is it just your winning streak? Another one for the champion!",
  "Keep this up, and we'll have to start calling you 'the dealer's nightmare'!",
  "Dealer, check your pockets, because you just got robbed of a win!",
  "You're winning so much, we might need to check you for cheat codes!",
  "And the crowd goes wild! Wait, what crowd? It's just another win for you!"
];

const losingMessages = [
  "Oops! Looks like the dealer had an ace up their sleeve this time!",
  "The dealer sends their regards. Better luck next time!",
  "Not your finest hour, huh? Let's blame it on the cards!",
  "Looks like the dealer's on a roll. Time to plan your comeback!",
  "You might not have won, but at least you're great at losing!",
  "The dealer seems to be taking this seriously. Maybe we should too?",
  "Lost again? Maybe let the cat play the next round!",
  "The dealer's on fire today! Maybe stop, drop, and roll out of this game.",
  "Remember, it's just a fun game. Especially fun for the dealer this time!",
  "You gave it your all, but the dealer gave it their 'all-er'!"
];

const tieMessages = [
  "A tie? Looks like it's a peaceful day in the casino!",
  "All dressed up and nowhere to go. It's a tie!",
  "It's a tie! Maybe you and the dealer should start a band instead?",
  "Even Steven! Maybe next time someone will tip the scales.",
  "A tie! At least it's better than losing, right?",
  "Looks like great minds think alike! It's a tie!",
  "Neither a win nor a loss. Call it 'karma' in the casino world.",
  "Tied up! Let's see who breaks free in the next round!",
  "It's a draw! But it's not art class, let's win the next one!",
  "It's a tie game! Seems like the dealer is your gaming soulmate today."
];

const finalWinMessages = [
  "Congratulations, champion! You've outplayed the dealer and secured your throne as the master of the game!",
  "Well done! You've proven that fortune favors the bold. Enjoy your well-deserved victory!",
  "You did it! You've beaten the odds and the dealer. Wear your crown with pride, winner!",
  "Victory is sweet, isn't it? Savor this moment of triumph, you've earned it!",
  "Cheers to the victor! You danced around the dealer and led the game. Fantastic job!",
  "You've left the dealer in the dust! Congratulations on a spectacular win!",
  "Who's the boss now? You've crushed the competition and emerged victorious. Hats off to you!",
  "Game set and match to you! You played like a pro and beat the dealer fair and square.",
  "The game was tough, but you were tougher! Congratulations on your outstanding victory!",
  "The dealer didn't stand a chance! You played brilliantly and claimed the ultimate prize!"
];

const finalLossMessages = [
  "Almost had it! Don't let this game get you down. You're only a shuffle away from victory!",
  "Tough break, but every champion has their off days. You'll get 'em next time!",
  "Not your lucky day, huh? Brush off the dust and let's deal another round. You got this!",
  "The dealer was tough this round, but who says you can't turn the tables next time? Ready for a rematch?",
  "Keep your chin up! Losing is just part of the game. What matters is how you come back from it.",
  "That was a close one! A few tweaks to your strategy, and you're all set for a win.",
  "You win some, you lose some. But the fun is in the playing, right? Let's go again!",
  "Looks like luck wasn't on your side today. Time to shuffle up and deal anew!",
  "Every loss is a step towards your next big win. Don't give up now!",
  "The stars weren't aligned this round, but who needs stars when you've got skills? Show them off next game!"
];

const finalTieMessages = [
  "It's a tie! Great minds think alike, or you both just got lucky!",
  "A draw! The suspense continues. Who will break the tie in the next round?",
  "Evenly matched, I see! This game is just heating up!",
  "It's a tie! Neither victory nor defeat, just a perfect balance.",
  "Deadlock! You and the dealer are in a serious contest of wits."
];

function generateDeck() {
  let deck = [];
  faceValues.forEach(faceValue => {
    suite.forEach(suiteRepresentation => {
      let tempCard = {
        suite: suiteRepresentation[0],
        faceValue: faceValue,
        color: suiteRepresentation[1]
      };
      deck.push(tempCard);
    });
  });
  return shuffle(deck);
}

function renderFaceCard(cardObj) {
  const card = document.createElement("div");
  card.className = "card";
  card.style.color = cardObj["color"];
  const top = document.createElement("div");
  top.classList.add("suite-row", "top");
  const iconTop = document.createElement("div");
  iconTop.className = "icon";
  iconTop.textContent = cardObj["suite"];
  top.appendChild(iconTop);
  card.appendChild(top);
  const body = document.createElement("div");
  body.className = "card-body";
  body.textContent = cardObj["faceValue"];
  card.appendChild(body);
  const bottom = document.createElement("div");
  bottom.classList.add("suite-row", "bottom");
  const iconBottom = document.createElement("div");
  iconBottom.className = "icon-bottom";
  iconBottom.textContent = cardObj["suite"];
  bottom.appendChild(iconBottom);
  card.appendChild(bottom);
  return card;
}

function renderCardsOnScreen(deck) {
  const selectedCards = {};
  const cardOneIndex = Math.floor(Math.random() * (deck.length - 1));
  const cardTwoIndex = Math.floor(Math.random() * (deck.length - 1));
  console.log("generating deck: ");
  const deckElement = document.querySelector("#deck");
  deckElement.innerHTML = "";
  deckElement.appendChild(renderBackCard());
  console.log("trying to generate card at index: ", cardOneIndex);
  const cardOneElement = document.querySelector("#card1");
  console.log("generating card one: ", card1);
  cardOneElement.innerHTML = "";
  selectedCards["dealerCard"] = deck[cardOneIndex];
  cardOneElement.appendChild(renderFaceCard(deck[cardOneIndex]));
  removeCardFromDeck(deck, cardOneIndex);
  console.log("trying to generate card at index: ", cardTwoIndex);
  const cardTwoElement = document.querySelector("#card2");
  console.log("generating card one: ", deck[cardOneIndex]);
  cardTwoElement.innerHTML = "";
  cardTwoElement.appendChild(renderFaceCard(deck[cardTwoIndex]));
  selectedCards["myCard"] = deck[cardTwoIndex];
  removeCardFromDeck(deck, cardTwoIndex);
  console.log("generating card one: ", deck[cardTwoIndex]);
  return selectedCards;
}

function defaultStateOfCards(deck) {
  console.log("setting cards to the default state");
  document.querySelector("#deck").innerHTML = "";
  document.querySelector("#deck").appendChild(renderBackCard());
  document.querySelector("#card1").innerHTML = "";
  document.querySelector("#card1").appendChild(renderBackCard());
  document.querySelector("#card2").innerHTML = "";
  document.querySelector("#card2").appendChild(renderBackCard());
}

function removeCardFromDeck(deck, index) {
  console.log("Removing card at index: ", index);
  deck.splice(index, 1);
  console.log("Current length after removal: ", deck.length);
  console.log(deck);
}

function renderBackCard() {
  const card = document.createElement("div");
  card.className = "card-back";
  const cardFrame = document.createElement("div");
  cardFrame.className = "card-back-frame";
  const cardFrameInner = document.createElement("div");
  cardFrameInner.className = "card-back-frame-inner";
  for (let i = 0; i < 16; i++) {
    const innerShape = document.createElement("div");
    innerShape.textContent = "♦";
    cardFrameInner.appendChild(innerShape);
  }
  cardFrame.appendChild(cardFrameInner);
  card.appendChild(cardFrame);
  return card;
}

function renderGameSpots() {
  const GAMES_TO_PLAY = 26;
  const gamesElement = document.querySelector("#games");
  for (let i = 0; i < GAMES_TO_PLAY; i++) {
    const tempCard = document.createElement("div");
    tempCard.className = "game-status";
    tempCard.id = `game-${i + 1}`;
    gamesElement.appendChild(tempCard);
  }
}

function setGame(number, color) {
  const gameIcon = document.querySelector(`#game-${number}`);
  gameIcon.style.backgroundColor = color;
}

function determineGameOutcome(results) {
  let dealerCardNumber = faceValues.indexOf(results["dealerCard"]["faceValue"]);
  let myCardNumber = faceValues.indexOf(results["myCard"]["faceValue"]);
  if (myCardNumber > dealerCardNumber) {
    gamesStatus.push(1);
    document.querySelector("#message").textContent = getRandomElement(
      winningMessages
    );
    return "green";
  }
  if (myCardNumber < dealerCardNumber) {
    gamesStatus.push(-1);
    document.querySelector("#message").textContent = getRandomElement(
      losingMessages
    );
    return "red";
  }

  document.querySelector("#message").textContent = getRandomElement(
    tieMessages
  );
  gamesStatus.push(0);

  return "white";
}

function getRandomElement(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function renderNumberOfcardsLeft(deck) {
  document.querySelector(
    "#deck-count"
  ).textContent = `Cards left: ${deck.length}`;
}

function displayFinalResult(deck) {
  if (deck.length == 0) {
    document.querySelector("#message").textContent =
      determineOverallGameResult(gamesStatus) === WIN
        ? getRandomElement(finalWinMessages)
        : determineOverallGameResult(gamesStatus) === LOSE
        ? getRandomElement(finalLossMessages)
        : getRandomElement(finalTieMessages);
    document.querySelector("#play").style.display = "none";
  }
}

function determineOverallGameResult(results) {
  const counts = results.reduce(
    (obj, value) => {
      if (value === LOSE) obj.minusOne += 1;
      else if (value === WIN) obj.one += 1;
      else if (value === TIE) obj.zero += 1;
      return obj;
    },
    { minusOne: 0, one: 0, zero: 0 }
  );
  console.log(counts);
  if (counts.one > counts.minusOne) return WIN;
  else if (counts.one < counts.minusOne) return LOSE;
  else return TIE;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

window.onload = function() {
  let deck = generateDeck();
  console.log("initial state of the deck: ", deck);
  console.log("initial length of the deck: ", deck.length);

  defaultStateOfCards(deck);
  renderGameSpots();
  renderNumberOfcardsLeft(deck);

  document
    .querySelector("#player-name")
    .addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector("#player").textContent = event.target.value;
      }
    });

  document.querySelector("#play").addEventListener("click", () => {
    document.querySelector("#play").textContent = "Play Again";
    const selectedCards = renderCardsOnScreen(deck);
    const color = determineGameOutcome(selectedCards);
    setGame(gamesStatus.length, color);
    renderNumberOfcardsLeft(deck);
    displayFinalResult(deck);
  });

  document.querySelector("#reset").addEventListener("click", () => {
    location.reload();
  });
};
