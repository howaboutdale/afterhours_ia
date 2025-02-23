
function renderLogin() {
    document.querySelector('#page').innerHTML = `
    <section class='log-in'>
        <form action ="" onSubmit="logIn(event)" id="log-in">
           <h2>Log In</h2>
           <fieldset>
             <label for="">Email: </label>
             <input type="text" name="email">
           </fieldset>
           <fieldset>
             <label for="">Password: </label>
             <input type="password" name="password">
            </fieldset>
            <button>Log In</button>
        </form>
    </section>
    `
};

function logIn(event) {
    event.preventDefault()
    const form = event.target;

    // to convert the form ata into an object
    const data = Object.fromEntries(new FormData(form));
    const welcomeDOM = document.querySelector('#welcome');

    fetch('/api/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })

        .then(res => res.json())
        .then(res => {
            if (res.error) {
                renderLogin()
                renderError(res.error)
            } else {
                state.loggedInUser = res.email
                state.loggedInUserId = res.userId
                welcomeDOM.textContent = `Welcome ${state.loggedInUser}`
                renderQuestionForm()
                renderNavBar()
            }
        })
};

function renderError(errorMessage) {
    document.querySelector('#page').innerHTML =
        `<h2 class="error">${errorMessage}</h2>` +
        document.querySelector('#page').innerHTML
};

