// 1 - Inserir dados
localStorage.setItem("Nome", "Ruan"); // necessário passar a chave em string, tanto direto quanto em variável,
// e em seguida é passado o valor. Note que o localStorage se comporta de forma muito semelhante a obj js

// olhando nas ferramentas de desenvolvedor do navegador, na aba application é possível ver todos os dados,
// salvos no localStorage ou sessionStorage

// 2 - Restart sem perder dados

// 3 - Resgatar item
const name = localStorage.getItem("Nome"); // geralmente guardado em uma variavel
// é necessário passar o nome da chave para puxar o valor dela

// 4 - Resgate de item que não existe
const lastName = localStorage.getItem("lastname");

// console.log(lastNAme); retorna null

if (!lastName){ // caso não tenha nada em lastName
    console.log("Sem sobrenome!");
}

// 5 - Remover item
localStorage.removeItem("Nome"); // remove o item passando sua chave

// 6 - Limpar todos os itens
localStorage.setItem("a", 1);
localStorage.setItem("b", 2);

console.log(typeof localStorage.getItem("a")); // mostra o tipo de dado
// apesar de possível colocar outros tipos de dados no localStorage, eles viram string no final

localStorage.clear(); // limpa todo o local storage

// 7 - sessionStorage 
sessionStorage.setItem("Curso", "Informática"); // funciona da mesma forma que localStorage

// 8 - Reiniciar e perder dados
// quando a pagina é reiniciada os dados não são perdidos, porém quando ela é fechada, perde-se os dados

// 9 - Salvar objeto
const person = {
    name: "Ruan",
    age: 19,
    job: "Programmer",
};

// localStorage.setItem("Person", person); isso gera um problema, pois ele tenta converter um obj em string 
// de forma direta, o que não é possível

localStorage.setItem("person", JSON.stringify(person)); // maneiora correta, onde o obj é convertido corretamente
// e agora todos os seus campos podem ser visto no armazenamento do localStorage


const getPerson = localStorage.getItem("person");

console.log(getPerson.name); // isso irá gerar undefined pois o campo não existe por ser um objeto em formato de texto

const personObject = JSON.parse(getPerson); // agora foi convetido para objeto

console.log(typeof personObject);

console.log(personObject.job); // agora é possível acessar os campos do objeto