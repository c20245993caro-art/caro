console.log("Hello World");
console.log("From script.js file.");

const myName = "CJ";
let age = 12;
let number = "09151011735";
let address = "yawehhh";
let sixseven = 67;

console.log(`Name:  ${myName}` );
console.log(`age:   ${age} `);
console.log(`Number:  ${number}` );
console.log(`address:  ${address}` );
console.log(` ${sixseven}`);

function greet (greetings,names=[5]){
    if (Array.isArray(names)){
        names = names.join (", ")
    }
    return `${greetings} sa emuu, ${names}`;

}


console.log(greet("Mayunggg aga" , ["cj","bai","soy","tol","erp"]));

const heading = document.querySelector("title");
heading.textContent = "uling";
console.log(heading.textContent);


const contactHeading = document.querySelector("#contact h2")
console.log(contactHeading)

const servicesHeading = document.querySelector("#services h2")
console.log(servicesHeading);





  


