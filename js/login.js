//var modal = document.getElementById('id01');

//Login form log
account = [
    ["son123", "son123"],
    ["admin", "admin"],
    ["account2", "account2"]
]

localStorage.setItem("account-data", JSON.stringify(account))

let accountData = JSON.parse(localStorage.getItem("account-data"))
console.log(accountData);


//local storage account data

const BtnLog = document.getElementById('Form-submit');

BtnLog.addEventListener("click", (e) => {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    //console.log(username, password);
    for (i of accountData) {
        if (username == i[0] && password == i[1]) {
            setTimeout(notify, 1000);
        }
    }
})

function notify() {
    alert("Login successfully");
    window.location = "/cuoi-khoa/signed-in-webs/signed-in-index.html"; // Redirecting to other page.
    return false;
}