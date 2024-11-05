const nameForm = document.querySelector('#name_form');
const welcomeContainer = document.querySelector("#welcome");
const logoutBtn = document.querySelector("#logout");

const checkUser = () => {
    const userName = localStorage.getItem("name"); // guarda na constante o valor da chave name do localStorage

    if(userName){ // se caso o userName tiver valor, será transformado em booleano e testado se é true or false

        nameForm.style.display = "none"; // vai mudar a propriedade display que fica em style para none,
        // o que vai esconder o formulário
        welcomeContainer.style.display = "block";

        const userNameElement = document.querySelector('#username'); // pega o spam

        userNameElement.textContent = userName; // muda o conteúdo de texto do spam para userName que é o valor da
        // chave name do localStorage
    } else {
        nameForm.style.display = "block";
        welcomeContainer.style.display = "none";
        // faz o contrario, exibe o formulario e esconde as boas vindas
    }
}

nameForm.addEventListener('submit', (e) => { // o e da acesso ao evento em si, possibilitando manipulá-lo
    e.preventDefault(); // cancela o método padrão, no caso do submit a página não é mais recarregada e os dados
    // não são mais enviados da forma padrão

    const nameInput = document.querySelector('#name');

    localStorage.setItem("name", nameInput.value); // dessa forma o nome ja vai ser adicionado no localStorage
    // a chave é name e o valor é o valor digitado pelo usuario

    nameInput.value = "";

    checkUser();
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem("name"); // remove o nome de localStorage

    checkUser(); // faz a checagem e volta para o padrão
});

// application start
checkUser(); // quando chamado faz a checagem para ver se o nome está preenchido ou não e faz ações conforme

// caso a janela seja fechada e reaberta ela volta do mesmo local que estava, caso já tem digitado um nome
// voltará com a pagina de boas vindas