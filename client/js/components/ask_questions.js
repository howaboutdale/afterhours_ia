// this puts the ask question from the IA on the page
function renderQuestionForm() {
  document.querySelector('#page').innerHTML = `
  <section class='ask-question'>
    <form action="" onSubmit="findQuote(event)">
      <h2>Ask your question!</h2>
      <fieldset>
        <label for="">Select your IA: </label>
        <select id="ia" name="ia">
          <option value="Anyone">Anyone</option>
          <option value="Neil">Neil</option>
          <option value="Kasun">Kasun</option>
          <option value="Jordan">Jordan</option>
          <option value="Bree">Bree</option>
        </select>
      </fieldset>
      <fieldset>
        <label for="">Your Question: </label>
        <textarea name="question" id="" rows="1"></textarea>
    </fieldset>
      <fieldset>
        <p id="quote-answer">Quote: </p>
      </fieldset>
      <button>Ask Question</button>
    </form>
  </section>
  `;
}

function findIA(event) {
  event.preventDefault();
  console.log("meow")
  document.query
}

// this functions displays the quote when the form is submittied
function findQuote(event) {
  event.preventDefault();
  const iaSelector = document.querySelector('#ia');

  if (iaSelector.value === 'Anyone') {
    const askIADOM = document.querySelector('.ask-question');
    const guessFormSection = document.createElement('section');
    guessFormSection.innerHTML = `
    <form id="guess-ia" action="" onSubmit="findIA(event)">
    <fieldset>
      <label for="">Guess who said this: </label>
      <select id="ia" name="ia">
        <option value="Neil">Neil</option>
        <option value="Kasun">Kasun</option>
        <option value="Jordan">Jordan</option>
        <option value="Bree">Bree</option>
      </select>
    </fieldset>
    <button>Submit Guess</button>
    </form>
    `
    askIADOM.appendChild(guessFormSection);

    const quotes = state.quotes.map(quoteObject => quoteObject.quote);
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const quoteDOM = document.querySelector('#quote-answer');

    quoteDOM.textContent = `Quote: ${quotes[randomQuoteIndex]}`;
  } else {
    const selectedIaObjects = state.quotes.filter(iaObject => iaObject.name === iaSelector.value);
    const quotesOfAnIa = selectedIaObjects.map(quoteIaObject => quoteIaObject.quote);
    const randomQuoteIndex = Math.floor(Math.random() * quotesOfAnIa.length);
    const quoteDOM = document.querySelector('#quote-answer');

    quoteDOM.textContent = `Quote: ${quotesOfAnIa[randomQuoteIndex]}`;
  }
}