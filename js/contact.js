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

function emailval() {
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        document.getElementById("noemail").style.display = "block";
        document.getElementById("emailmore100").style.display = "none";
    } else {
        if (email.length > 100) {
            document.getElementById("emailmore100").style.display = "block";
        } else {
            document.getElementById("noemail").style.display = "none";
            document.getElementById("emailmore100").style.display = "none";
        }
    }
}

function subjectval() {
    var subject = document.getElementById("subject").value;
    if (subject.length == 0) {
        document.getElementById("nosubject").style.display = "block";
        document.getElementById("more250").style.display = "none";
        document.getElementById("less50").style.display = "none";
    } else {
        if (subject.length < 50) {
            document.getElementById("less50").style.display = "block";
            document.getElementById("nosubject").style.display = "none";
            document.getElementById("more250").style.display = "none";
        } else {
            if (subject.length > 250) {
                document.getElementById("more250").style.display = "block";
                document.getElementById("less50").style.display = "none";
                document.getElementById("nosubject").style.display = "none";
            } else {
                document.getElementById("nosubject").style.display = "none";
                document.getElementById("more250").style.display = "none";
                document.getElementById("less50").style.display = "none";
            }
        }
    }
}

function messageval() {
    var message = document.getElementById("message").value;
    if (message.length == 0) {
        document.getElementById("nomessage").style.display = "block";
        document.getElementById("messagemore500").style.display = "none";
    } else {
        if (message.length > 500) {
            document.getElementById("messagemore500").style.display = "block";
        } else {
            document.getElementById("nomessage").style.display = "none";
            document.getElementById("messagemore500").style.display = "none";
        }
    }
}

function formval() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var x;
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

    if (email.length == 0) {
        document.getElementById("noemail").style.display = "block";
        document.getElementById("emailmore100").style.display = "none";
        x = 0;
    } else {
        if (email.length > 100) {
            document.getElementById("emailmore100").style.display = "block";
            x = 0;
        } else {
            document.getElementById("noemail").style.display = "none";
            document.getElementById("emailmore100").style.display = "none";
        }
    }

    if (subject.length == 0) {
        document.getElementById("nosubject").style.display = "block";
        document.getElementById("more250").style.display = "none";
        document.getElementById("less50").style.display = "none";
        x = 0;
    } else {
        if (subject.length < 50) {
            document.getElementById("less50").style.display = "block";
            document.getElementById("nosubject").style.display = "none";
            document.getElementById("more250").style.display = "none";
            x = 0;
        } else {
            if (subject.length > 250) {
                document.getElementById("more250").style.display = "block";
                document.getElementById("less50").style.display = "none";
                document.getElementById("nosubject").style.display = "none";
                x = 0;
            } else {
                document.getElementById("nosubject").style.display = "none";
                document.getElementById("more250").style.display = "none";
                document.getElementById("less50").style.display = "none";
            }
        }
    }

    if (message.length == 0) {
        document.getElementById("nomessage").style.display = "block";
        document.getElementById("messagemore500").style.display = "none";
        x = 0;
    } else {
        if (message.length > 500) {
            document.getElementById("messagemore500").style.display = "block";
            x = 0;
        } else {
            document.getElementById("nomessage").style.display = "none";
            document.getElementById("messagemore500").style.display = "none";
        }
    }
    if (x == 0) return false;
}