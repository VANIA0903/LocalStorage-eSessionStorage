//inserir dado
localStorage.setItem("name","Vania");

//2 -restart sem perde dados
//3- resgatar item
const name =localStorage.getItem("name");

console.log(name);

//4- resgata de item que não existe
const lastName = localStorage.getItem("lastname");

console.log(lastName);

if(!lastName){
    console.log("sem sobrenome!");

}
//5-remover intem
localStorage.removeItem("name");

//6- limpar todos os intes
localStorage.setItem("a",1);
localStorage.setItem("b",2);

//console.log(typeof localStorage.getItem("a"));

localStorage.clear();

//7 session storage
sessionStorage.setItem("number",123);

//8- reiniciar e perder dados
console.log(n);
const n = sessionStorage.getItem("number");
sessionStorage.clear();

// 9-salvar objeto
const person ={
    name:"Vania",
    age:34,
    job:"Programer",
};

//localStorge.setItem("person",person);

localStorage.setItem("person", JSON.stringify(person));
console.log(petPerson);
const personObject = JSON.parse(getPerson);
console.log(typeof personObject);
console.log(personObject.job);



