var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Login form log
account = [
    ["son123", "son123"],
    ["admin", "admin"],
    ["account2", "account2"]
]

const BtnLog = document.getElementById('form-submit');
BtnLog.addEventListener("click", (e) => {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username, password);
    for (var i = 0; i < account.length; i++) {
        if (username == account[i][0] && password == account[i][1]) {
            setTimeout(notify, 1000);
        }
    }
})

function notify() {
    alert("Login successfully");
    window.location = "index.html"; // Redirecting to other page.
    return false;
}