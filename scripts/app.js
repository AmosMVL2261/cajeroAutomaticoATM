let accounts = [
    { name: "Mali", balance: 200, password: "1" },
    { name: "Gera", balance: 290, password: "2" },
    { name: "Maui", balance: 67 , password: "3" }
];

let actualUser = -1;
let actualUserName = "";


function cleanScreen(){
    document.getElementById("mainScreen").innerHTML = '';
}

function mainMenu(){
    let mainScreenSection = document.getElementById("mainScreen");
    mainScreenSection.classList.add("class","mainMenu");
    mainScreenSection.classList.add("flexColumn");
    let account1 = document.createElement("button");
    let account2 = document.createElement("button");
    let account3 = document.createElement("button");
    account1.setAttribute("class","accountButton");
    account2.setAttribute("class","accountButton");
    account3.setAttribute("class","accountButton");
    account1.innerText="Cuenta 1";
    account2.innerText="Cuenta 2";
    account3.innerText="Cuenta 3";
    account1.addEventListener("click", ()=>accountScreen(1));
    account2.addEventListener("click", ()=>accountScreen(2));
    account3.addEventListener("click", ()=>accountScreen(3));
    mainScreenSection.appendChild(account1);
    mainScreenSection.appendChild(account2);
    mainScreenSection.appendChild(account3);
}

function accountScreen(selectedAccount){
    cleanScreen(); 
    let mainScreenSection = document.getElementById("mainScreen");
    let title = document.createElement("h1");
    title.innerText="Usted a seleccionado la cuenta #"+selectedAccount.toString();
    let subtitle = document.createElement("h2");
    subtitle.innerText="Ingrese los datos de ingreso de la cuenta:";
    //Each section
    let info = document.createElement("div");
    //Inputs
    let message1 = document.createElement("h3");
    message1.innerText="Ingrese usuario:"
    let message2 = document.createElement("h3");
    message2.innerText="Ingrese contraseña:"
    let inputUser = document.createElement("input");
    inputUser.setAttribute("id","inputUser");
    let inputPassword = document.createElement("input");
    inputPassword.setAttribute("id","inputPassword");
    let submitInfo = document.createElement("button")
    submitInfo.addEventListener("click", ()=> checkLogIn());
    submitInfo.innerText="Ingresar";
    //Add html elements
    info.appendChild(message1);
    info.appendChild(inputUser);
    info.appendChild(message2);
    info.appendChild(inputPassword);
    mainScreenSection.appendChild(title);
    mainScreenSection.appendChild(subtitle);
    mainScreenSection.appendChild(info);
    mainScreenSection.appendChild(submitInfo);
}

function checkLogIn(){
    let user = document.getElementById("inputUser").value.toString();
    let password = document.getElementById("inputPassword").value.toString();
    for (let i = 0; i < accounts.length; i++) {
        if(accounts[i].name==user && accounts[i].password==password){
            actualUser=i;
            actualUserName=user;
            break; 
        }
    }
    if(actualUser!==-1 && actualUserName !== ""){
        bankOperations();
    }else{
        window.alert("Usuario o contraseña incorrecto");
    }
}

function bankOperations(){
    cleanScreen(); 
    let mainScreenSection = document.getElementById("mainScreen");
    let operationTitle = document.createElement("h1");
    operationTitle.innerText="Bienvenido/a "+actualUserName+" ¿Qué operación desea realizar?";
    
    mainScreenSection.appendChild(operationTitle);
}

function checkBalance(){
    cleanScreen(); 
    let mainScreenSection = document.getElementById("mainScreen");
}
function backDeposit(){
    cleanScreen(); 
    let mainScreenSection = document.getElementById("mainScreen");
}
function bankWithdrawal(){
    cleanScreen(); 
    let mainScreenSection = document.getElementById("mainScreen");
}

mainMenu();