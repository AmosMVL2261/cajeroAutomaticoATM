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
    cleanScreen(); 
    let mainScreenSection = document.getElementById("mainScreen");
    mainScreenSection.classList.add("class","mainMenu");
    mainScreenSection.classList.add("flexColumn");
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
    mainScreenSection.appendChild(subtitle);
    mainScreenSection.appendChild(info);
    mainScreenSection.appendChild(submitInfo);
}

function checkLogIn(){
    //Inputs
    let user = document.getElementById("inputUser").value.toString();
    let password = document.getElementById("inputPassword").value.toString();
    //Check all elements in the array
    for (let i = 0; i < accounts.length; i++) {
        if(accounts[i].name==user && accounts[i].password==password){
            actualUser=i;
            actualUserName=user;
            break; 
        }
    }
    //If credentials are correct
    if(actualUser!==-1 && actualUserName !== ""){
        bankOperations();
    }else{
        window.alert("Usuario o contraseña incorrecto");
    }
}

function bankOperations(){
    //Basic operations
    cleanScreen(); 
    let mainScreenSection = document.getElementById("mainScreen");
    //Basic elements
    let operationGreetings = document.createElement("h1");
    let operationTitle = document.createElement("h2");
    operationGreetings.innerText="Bienvenido/a "+actualUserName;
    operationTitle.innerText="¿Qué operación desea realizar?";
    let buttonSection = document.createElement("div");
    buttonSection.classList.add("buttonSection");
    buttonSection.classList.add("flexColumn");
    //Button section
    let buttonCheck = document.createElement("button");
    let buttonDeposit = document.createElement("button");
    let buttonRest = document.createElement("button");
    buttonCheck.innerText="Verificar saldo";
    buttonDeposit.innerText="Hacer deposito a cuenta";
    buttonRest.innerText="Realizar un retiro";
    buttonCheck.addEventListener("click", ()=>checkBalance());
    //Append section
    buttonSection.appendChild(buttonCheck);
    buttonSection.appendChild(buttonDeposit);
    buttonSection.appendChild(buttonRest);
    mainScreenSection.appendChild(operationGreetings);
    mainScreenSection.appendChild(operationTitle);
    mainScreenSection.appendChild(buttonSection);
}

function checkBalance(e){
    //
    cleanScreen(); 
    let mainScreenSection = document.getElementById("mainScreen");
    let balanceTitle = document.createElement("h1");
    //
    balanceTitle.innerText="Saldo disponible";
    let balanceSentence = document.createElement("h2");
    balanceSentence.innerText="Su saldo disponible es de: "
    let money = document.createElement("p");
    money.innerText="$"+accounts[actualUser].balance;
    //
    let exitButton = document.createElement("button");
    exitButton.innerText = "Regresar al menu";
    exitButton.addEventListener("click", ()=>bankOperations());
    //
    mainScreenSection.appendChild(balanceTitle);
    mainScreenSection.appendChild(balanceSentence);
    mainScreenSection.appendChild(money);
    mainScreenSection.appendChild(exitButton);
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