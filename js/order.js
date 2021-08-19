function nameval() {
    var name = document.getElementById("name").value;
    if (name.length == 0) {
        document.getElementById("noname").style.display = "block";
        document.getElementById("namemore100").style.display = "none";
    } else {
        if (name.length > 100) {
            document.getElementById("namemore100").style.display = "block";
        } else {
            document.getElementById("noname").style.display = "none";
            document.getElementById("namemore100").style.display = "none";
        }
    }
}

function messageval() {
    var message = document.getElementById("message").value;

    if (message.length > 200) {
        document.getElementById("more200").style.display = "block";
    } else {
        document.getElementById("more200").style.display = "none";
    }
}

function dateval() {
    var date = document.getElementById("delivery-date").value;
    if (date == "") {
        document.getElementById("nodate").style.display = "block";
    } else {
        document.getElementById("nodate").style.display = "none";
    }
};

function addrval() {
    var addr = document.getElementById("address").value;
    if (addr.length == 0) {
        document.getElementById("noaddress").style.display = "block";
        document.getElementById("more500").style.display = "none";
    } else {
        if (addr.length > 500) {
            document.getElementById("more500").style.display = "block";
        } else {
            document.getElementById("noaddress").style.display = "none";
            document.getElementById("more500").style.display = "none";
        }
    }
};

function albumval() {
    var product = document.getElementById("albums").value;
    if (product === "Choose an album") {
        document.getElementById("noalbum").style.display = "block";
    } else {
        document.getElementById("noalbum").style.display = "none";
    }
}

function formval() {
    var x;
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    var addr = document.getElementById("address").value;
    var date = document.getElementById("delivery-date").value;
    var yes = document.getElementById("yes").checked;
    var no = document.getElementById("no").checked;
    var product = document.getElementById("albums").value;
    if (name.length == 0) {
        document.getElementById("noname").style.display = "block";
        document.getElementById("namemore100").style.display = "none";
        x = 0;
    } else {
        if (name.length > 100) {
            document.getElementById("namemore100").style.display = "block";
            x = 0;
        } else {
            document.getElementById("noname").style.display = "none";
            document.getElementById("namemore100").style.display = "none";
        }
    }
    if (message.length > 200) {
        document.getElementById("more200").style.display = "block";
        x = 0;
    } else {
        document.getElementById("more200").style.display = "none";
    }
    if (date == "") {
        document.getElementById("nodate").style.display = "block";
        x = 0;
    } else {
        document.getElementById("nodate").style.display = "none";
    }
    if (addr.length == 0) {
        document.getElementById("noaddress").style.display = "block";
        document.getElementById("more500").style.display = "none";
        x = 0;
    } else {
        if (addr.length > 500) {
            document.getElementById("more500").style.display = "block";
            x = 0;
        } else {
            document.getElementById("noaddress").style.display = "none";
            document.getElementById("more500").style.display = "none";
        }
    }
    if (!yes && !no) {
        document.getElementById("option").style.display = "block";
        x = 0;
    } else {
        document.getElementById("option").style.display = "none";
    }
    if (product === "Choose an album") {
        document.getElementById("noalbum").style.display = "block";
        x = 0;
    } else {
        document.getElementById("noalbum").style.display = "none";
    }
    if (x == 0) {
        return false;
    }
}