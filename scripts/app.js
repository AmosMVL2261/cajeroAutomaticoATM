let accounts = [
    { name: "Mali", balance: 200, password: "1" },
    { name: "Gera", balance: 290, password: "2" },
    { name: "Maui", balance: 67 , password: "3" }
];

let actualUser = -1;
let actualUserName = "";

//Clean only the check Screen
function cleanScreen(){
    document.getElementById("mainScreen").innerHTML = '';
}

//Start Menu, it has the log in section
function mainMenu(){
    //Basic operations
    cleanScreen(); 
    let mainScreenSection = document.getElementById("mainScreen");
    //Style options
    mainScreenSection.classList.add("class","mainMenu");
    mainScreenSection.classList.add("flexColumn");
    //Titles
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

//Logic function, verify the log in
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

//If the log in was approved, the ATM shows the operations menu
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
    buttonDeposit.addEventListener("click", ()=>bankDeposit());
    buttonRest.addEventListener("click", ()=>bankWithdrawal());
    //Return section
    let returnButton = document.createElement("button");

    returnButton.innerText="Salir de la cuenta";

    returnButton.addEventListener("click", ()=>exitOption());

    //Append section
    buttonSection.appendChild(buttonCheck);
    buttonSection.appendChild(buttonDeposit);
    buttonSection.appendChild(buttonRest);
    mainScreenSection.appendChild(operationGreetings);
    mainScreenSection.appendChild(operationTitle);
    mainScreenSection.appendChild(buttonSection);
    mainScreenSection.appendChild(returnButton);
}


//Exit from the actual client session
function exitOption(e){
    actualUser = -1;
    actualUserName = "";
    mainMenu();
}


//First option, check how many money the client has
function checkBalance(e){
    //Basic operations
    cleanScreen(); 
    let mainScreenSection = document.getElementById("mainScreen");
    //Titles
    let balanceTitle = document.createElement("h1");
    balanceTitle.innerText="Saldo disponible";
    let balanceSentence = document.createElement("h2");
    balanceSentence.innerText="Su saldo disponible es de: "
    let money = document.createElement("p");
    money.setAttribute("id","actualMoney");
    money.innerText="$"+accounts[actualUser].balance;
    //Return Button
    let exitButton = document.createElement("button");
    exitButton.innerText = "Regresar al menu";
    exitButton.addEventListener("click", ()=>bankOperations());
    //Append elements
    mainScreenSection.appendChild(balanceTitle);
    mainScreenSection.appendChild(balanceSentence);
    mainScreenSection.appendChild(money);
    mainScreenSection.appendChild(exitButton);
}

//Second option, Do a deposit to his account or another account
function bankDeposit(){
    //Basic operations
    cleanScreen(); 
    let mainScreenSection = document.getElementById("mainScreen");
    //Titles
    let depositTitle = document.createElement("h1");
    depositTitle.innerText="¿Qué tipo de deposito desea realizar?";

    //This account option
    let ownDeposit = document.createElement("button");
    ownDeposit.innerText = "Esta cuenta";
    ownDeposit.addEventListener("click", ()=>sameAccountDeposit());

    //Another account option
    let anotherDeposit = document.createElement("button");
    anotherDeposit.innerText = "Otra cuenta";
    anotherDeposit.addEventListener("click", ()=>differentAccountDeposit());

    //Return section
    let exitButton = document.createElement("button");
    exitButton.innerText = "Regresar al menu";
    exitButton.addEventListener("click", ()=>bankOperations());
    //Append elements
    mainScreenSection.appendChild(depositTitle);
    mainScreenSection.appendChild(ownDeposit);
    mainScreenSection.appendChild(anotherDeposit);
    mainScreenSection.appendChild(exitButton);
}

//Deposit to the same account
function sameAccountDeposit(){
    //Basic operations
    cleanScreen(); 
    let mainScreenSection = document.getElementById("mainScreen");
    //Titles
    let depositTitle = document.createElement("h1");
    depositTitle.innerText="Deposito a esta cuenta";
    //Actual balance
    let actualMoneySentence = document.createElement("h2");
    actualMoneySentence.innerText="Su saldo disponible es de: "
    let money = document.createElement("p");
    money.setAttribute("id","actualMoney");
    money.innerText="$"+accounts[actualUser].balance;
    //Money for the operation
    let depositMoneySentence = document.createElement("h2");
    depositMoneySentence.innerText="Cantidad que desea depositar: "

    let depositMoney = document.createElement("input");
    depositMoney.setAttribute("id","inputMoneySame");
    //Button
    let doDeposit = document.createElement("button");

    doDeposit.innerText = "Realizar deposito";
    doDeposit.addEventListener("click", ()=>checkAddSame());
    //Return section
    let exitButton = document.createElement("button");
    exitButton.innerText = "Regresar al menu";
    exitButton.addEventListener("click", ()=>bankOperations());
    //Append elements
    mainScreenSection.appendChild(depositTitle);
    mainScreenSection.appendChild(actualMoneySentence);
    mainScreenSection.appendChild(money);
    mainScreenSection.appendChild(depositMoneySentence);
    mainScreenSection.appendChild(depositMoney);
    mainScreenSection.appendChild(doDeposit);
    mainScreenSection.appendChild(exitButton);
}


function checkAddSame(){
    //Inputs
    let importSize = document.getElementById("inputMoneySame").value;
    //Check if the input is valid or is void
    if(isNaN(importSize) || importSize === ""){
        window.alert("La cantidad ingresada no es un numero");
    }else{
        //Check if the operation is valid
        //The account can save max $990
        let localOperation = accounts[actualUser].balance + Number(importSize);
        if(localOperation<=990){
            accounts[actualUser].balance = Number(localOperation);
            let money = document.getElementById("actualMoney");
            money.innerText="$"+accounts[actualUser].balance;
            window.alert("Operación realizada con exito");
            //bankOperations();
        }else{
            window.alert("La cantidad ingresada no es valida");
        }
    }
}


//Deposit to another account
function differentAccountDeposit(){
    //Basic operations
    cleanScreen(); 
    let mainScreenSection = document.getElementById("mainScreen");
    //Titles
    let depositTitle = document.createElement("h1");
    depositTitle.innerText="Deposito a diferente cuenta";
    //Actual balance
    let actualMoneySentence = document.createElement("h2");
    actualMoneySentence.innerText="Su saldo disponible es de: "
    let money = document.createElement("p");
    money.setAttribute("id","actualMoney");
    money.innerText="$"+accounts[actualUser].balance;
    //Another account info
    let anotherAccountTitle = document.createElement("h2");
    anotherAccountTitle.innerText="¿A quién le deseas depositar?:"

    let anotherAccountName = document.createElement("input");
    anotherAccountName.setAttribute("id","inputNameAnother");
    //Money for the operation
    let depositMoneySentence = document.createElement("h2");
    depositMoneySentence.innerText="Cantidad que desea depositar: "

    let depositMoney = document.createElement("input");
    depositMoney.setAttribute("id","inputMoneyAnother");
    //Button
    let doDeposit = document.createElement("button");

    doDeposit.innerText = "Realizar deposito";
    doDeposit.addEventListener("click", ()=>checkAddAnother());
    //Return section
    let exitButton = document.createElement("button");
    exitButton.innerText = "Regresar al menu";
    exitButton.addEventListener("click", ()=>bankOperations());
    //Append elements
    mainScreenSection.appendChild(depositTitle);
    mainScreenSection.appendChild(actualMoneySentence);
    mainScreenSection.appendChild(money);
    mainScreenSection.appendChild(anotherAccountTitle);
    mainScreenSection.appendChild(anotherAccountName);
    mainScreenSection.appendChild(depositMoneySentence);
    mainScreenSection.appendChild(depositMoney);
    mainScreenSection.appendChild(doDeposit);
    mainScreenSection.appendChild(exitButton);
}

//Logic function, check if can do the deposit
function checkAddAnother(){
    //Inputs
    let importName = document.getElementById("inputNameAnother").value;
    let importSize = document.getElementById("inputMoneyAnother").value;
    let localOperation;
    let localBalance;
    let userExist = false;
    //Check if it is the same account
    if(importName===actualUserName){
        window.alert("La cuenta ingresada es esta misma cuenta");
        return;
    }
    //Check if the input is valid or is void
    if(isNaN(importSize) || importSize === ""){
        window.alert("La cantidad ingresada no es un numero");
    }else if(importSize !== ""){
        for (let i = 0; i < accounts.length; i++) {
            if(importName===accounts[i].name){
                userExist=true;
                //Check if the operation is valid
                //The account can save max $990
                localOperation = accounts[i].balance + Number(importSize);
                localBalance = accounts[actualUser].balance - Number(importSize);
                if(localOperation<=990 && localBalance>=10){
                    accounts[i].balance = Number(localOperation);
                    accounts[actualUser].balance = Number(localBalance);
                    let money = document.getElementById("actualMoney");
                    money.innerText="$"+accounts[actualUser].balance;
                    window.alert("Operación realizada con exito");
                    //bankOperations();
                }else{
                    window.alert("La cantidad ingresada no permite una operación valida");
                }
            }
        }
        if(userExist===false){
            window.alert("El usuario ingresado no es valido");    
        }
    }else{
        window.alert("El usuario ingresado no es valido");
    }
}

//Third option, withdrawal client's money
function bankWithdrawal(){
    //Basic operations
    cleanScreen(); 
    let mainScreenSection = document.getElementById("mainScreen");
    //Titles
    let minusTitle = document.createElement("h1");
    minusTitle.innerText="Retiro de efectivo";
    //Actual balance
    let actualMoneySentence = document.createElement("h2");
    actualMoneySentence.innerText="Su saldo disponible es de: "
    let money = document.createElement("p");
    money.setAttribute("id","actualMoney");
    money.innerText="$"+accounts[actualUser].balance;
    //Withdrawal section
    let minusMoneySentence = document.createElement("h2");
    minusMoneySentence.innerText="Cantidad que desea retirar: "

    let minusMoney = document.createElement("input");
    minusMoney.setAttribute("id","inputMinus");
    //withdrawal button
    let doMinus = document.createElement("button");

    doMinus.innerText = "Realizar retiro";
    doMinus.addEventListener("click", ()=>checkMinus());
    //Return section
    let exitButton = document.createElement("button");
    exitButton.innerText = "Regresar al menu";
    exitButton.addEventListener("click", ()=>bankOperations());
    //Append elements
    mainScreenSection.appendChild(minusTitle);
    mainScreenSection.appendChild(actualMoneySentence);
    mainScreenSection.appendChild(money);
    mainScreenSection.appendChild(minusMoneySentence);
    mainScreenSection.appendChild(minusMoney);
    mainScreenSection.appendChild(doMinus);
    mainScreenSection.appendChild(exitButton);
}


//Logic function, check if the operation is valid
function checkMinus(e){
    //Inputs
    let importSize = document.getElementById("inputMinus").value;
    //Check if the input is valid or is void
    if(isNaN(importSize) || importSize === ""){
        window.alert("La cantidad ingresada no es un numero");
    }else{
        //Check if the operation is valid
        //The account need at least $10
        let localOperation = accounts[actualUser].balance - Number(importSize);
        if(localOperation>=10){
            accounts[actualUser].balance = Number(localOperation);
            let money = document.getElementById("actualMoney");
            money.innerText="$"+accounts[actualUser].balance;
            window.alert("Operación realizada con exito");
            //bankOperations();
        }else{
            window.alert("La cantidad ingresada no es valida");
        }
    }
}


mainMenu();