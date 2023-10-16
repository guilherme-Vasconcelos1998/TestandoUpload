const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/vikings.webp") {
    myImage.setAttribute("src", "imagens/vikings2.webp");
  } else {
    myImage.setAttribute("src", "imagens/vikings.webp");
  }
};

let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");



function setUserName() {
    const myName = prompt("Por favor, digite o seu nome");
    if (!myName){
        setUserName();
    }else{

    
    localStorage.setItem("name", myName);
    myHeading.textContent = `Vikings é foda, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla é legal, $ {storedName`;
}
myButton.onclick = () => {
    setUserName();
};
  

/*
A API de Web Storage fornece duas maneiras de armazenar dados:

sessionStorage mantém as informações armazenadas por origem e permanece disponível enquanto há uma sessão aberta no navegador 
(mesmo a página sendo recarregada). Caso o browser seja fechado a sessão será limpa e as informações serão perdidas.
localStorage mesmo que o navegador seja fechado, os dados permanecem armazenados.
Esses mecanismos estão disponíveis a partir das seguintes propriedades Window.sessionStorage e Window.localStorage 
(para um maior suporte, o objeto Window implementa os objetos Window.LocalStorage e Window.SessionStorage)
 — ao invocar uma dessas propriedades, é criada uma instância do objeto Storage, que fornece métodos para inserir,
  recuperar e remover os dados. Sempre será utilizado um objeto diferente para cada origem de sessionStorage e localStorage, dessa forma
   o controle de ambos é realizado de forma separada.

*/

/* Anotações e codes

 myHeading é a minha variável! 
querySelector é uma função 
/*  textcontent é a propiedade da variável 
/* Ambos os recursos usados neste exercício são partes do Modelo de Objeto de Document (DOM), que tem a capacidade de manipular documentos.


const myHeading = document.querySelector("h1");
myHeading.textContent = "iceCream";

/* let myVariable; 
/* String 
myVariable = "GuilhermeDEV";
/* Number 
myVariable = 10;
/* Boolean (V/F) 
myVariable = true;

/* Armazenando varios valores de uma variável em uma array 
myVariable = [1,"GuilhermeHome","Brasil","Canadá"];
 
/* Isso pode ser qualquer coisa. Tudo em JavaScript é um objeto e pode ser armazenados em uma variável. Tenha isso em mente enquanto aprende. 
let myVariable = document.querySelector('h1');
/* Igualdade estrita	Isso executa um teste para ver se dois valores são iguais. Ele retorna um Resultado true/false (booleano). */

/*                                             Condicionais                                         


/*Condicionais são estruturas de código usadas para testar se uma expressão retorna verdadeira ou não. Uma forma muito comum de condicionais éceCream = "Chocolate";
    if(iceCream === "Chocolate"){
        alert("Sim é estritamente CHOCOLATE");

    }else{
        alert("NOT")
    }




document.querySelector("html").addEventListener("click", function () {
    alert("Ai! Pare de me cutucar!");
  });
  */