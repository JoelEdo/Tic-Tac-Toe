var b1btn = document.getElementById('text')
var b2btn = document.getElementById('text1')
var b3btn = document.getElementById('text2')
var b4btn = document.getElementById('text3')
var b5btn = document.getElementById('text4')
var b6btn = document.getElementById('text5')
var b7btn = document.getElementById('text6')
var b8btn = document.getElementById('text7')
var b9btn = document.getElementById('text8')

    b1btn.style.color = "black"
    b2btn.style.color = "black"
    b3btn.style.color = "black"
    b4btn.style.color = "black"
    b5btn.style.color = "black"
    b6btn.style.color = "black"
    b7btn.style.color = "black"
    b8btn.style.color = "black"
    b9btn.style.color = "black"
flag = 1;
function myfunc() {
    var b1 = document.getElementById('text').value
    var b2 = document.getElementById('text1').value
    var b3 = document.getElementById('text2').value
    var b4 = document.getElementById('text3').value
    var b5 = document.getElementById('text4').value
    var b6 = document.getElementById('text5').value
    var b7 = document.getElementById('text6').value
    var b8 = document.getElementById('text7').value
    var b9 = document.getElementById('text8').value

    if (b1 === 'X' && b2 === 'X' && b3 === 'X') {
        document.getElementById('print')
            .innerHTML = "<p class='won'>Player X won</p>"
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red"
        b2btn.style.color = "red"
        b3btn.style.color = "red"

    } else if (b1 === 'X' && b4 === 'X' && b7 === 'X') {
        document.getElementById('print')
            .innerHTML = "<p class='won'>Player X won</p>"
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red"
        b4btn.style.color = "red"
        b7btn.style.color = "red"

    }  else if (b1 === 'X' && b5 === 'X' && b9 === 'X') {
        document.getElementById('print')
            .innerHTML = "<p class='won'>Player X won</p>"
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color = "red"
        b5btn.style.color = "red"
        b9btn.style.color = "red"

    }  else if (b4 === 'X' && b5 === 'X' && b6 === 'X') {
        document.getElementById('print')
            .innerHTML = "<p class='won'>Player X won</p>"
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = "red"
        b5btn.style.color = "red"
        b6btn.style.color = "red"

    }  else if (b7 === 'X' && b8 === 'X' && b9 === 'X') {
        document.getElementById('print')
            .innerHTML = "<p class='won'>Player X won</p>"
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = "red"
        b8btn.style.color = "red"
        b9btn.style.color = "red"

    }  else if (b2 === 'X' && b5 === 'X' && b8 === 'X') {
        document.getElementById('print')
            .innerHTML = "<p class='won'>Player X won</p>"
        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = "red"
        b5btn.style.color = "red"
        b8btn.style.color = "red"

    }  else if (b3 === 'X' && b6 === 'X' && b9 === 'X') {
        document.getElementById('print')
            .innerHTML = "<p class='won'>Player X won</p>"
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "red"
        b6btn.style.color = "red"
        b9btn.style.color = "red"

    }  else if (b3 === 'X' && b5 === 'X' && b7 === 'X') {
        document.getElementById('print')
            .innerHTML = "<p class='won'>Player X won</p>"
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "red"
        b5btn.style.color = "red"
        b7btn.style.color = "red"


    }  else if (b1 === 'O' && b2 === 'O' && b3 === 'O') {
        document.getElementById('print')
            .innerHTML = "<p class='won'>Player X won</p>"
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red"
        b2btn.style.color = "red"
        b3btn.style.color = "red"

    } else if (b1 === 'O' && b4 === 'O' && b7 === 'O') {
        document.getElementById('print')
            .innerHTML = "<p class='won'>Player X won</p>"
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red"
        b4btn.style.color = "red"
        b7btn.style.color = "red"

    }  else if (b1 === 'O' && b5 === 'O' && b9 === 'O') {
        document.getElementById('print')
            .innerHTML = "<p class='won'>Player X won</p>"
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color = "red"
        b5btn.style.color = "red"
        b9btn.style.color = "red"

    }  else if (b4 === 'O' && b5 === 'O' && b6 === 'O') {
        document.getElementById('print')
            .innerHTML = "<p class='won'>Player X won</p>"
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = "red"
        b5btn.style.color = "red"
        b6btn.style.color = "red"

    }  else if (b7 === 'O' && b8 === 'O' && b9 === 'O') {
        document.getElementById('print')
            .innerHTML = "<p class='won'>Player X won</p>"
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = "red"
        b8btn.style.color = "red"
        b9btn.style.color = "red"

    }  else if (b2 === 'O' && b5 === 'O' && b8 === 'O') {
        document.getElementById('print')
            .innerHTML = "<p class='won'>Player X won</p>"
        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = "red"
        b5btn.style.color = "red"
        b8btn.style.color = "red"

    }  else if (b3 === 'O' && b6 === 'O' && b9 === 'O') {
        document.getElementById('print')
            .innerHTML = "<p class='won'>Player X won</p>"
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "red"
        b6btn.style.color = "red"
        b9btn.style.color = "red"

    }  else if (b3 === 'O' && b5 === 'O' && b7 === 'O') {
        document.getElementById('print')
            .innerHTML = "<p class='won'>Player X won</p>"
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "red"
        b5btn.style.color = "red"
        b7btn.style.color = "red"

    } else if ((b1 === 'X' || b1 === 'O') && (b2 === 'X' || b2 === 'O') && (b3 === 'X' || b3 === 'O') && (b4 === 'X' || b4 === 'O') && (b5 === 'X' || b5 === 'O') && (b6 === 'X' || b6 === 'O') && (b7 === 'X' || b7 === 'O') && (b8 === 'X' || b8 === 'O') && (b9 === 'X' || b9 === 'O')) {
        document.getElementById('print')
                .innerHTML = "<p class='won'>Match Tie</p>"
        
                
        myfunc_2()
    } else {
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "<p class='won'>Player X Turn</p>"
        } else {
            document.getElementById('print')
                    .innerHTML = "<p class='won'>Player O turn</p>"
        }
    }
}

function myfunc_2() {
    location.reload()
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
}

flag = 1;
function myfunc_3() {
    if (flag == 1) {
        b1btn.innerHTML = "<p>X</p>"
        document.getElementById("text").value = "X";
        document.getElementById("text").disabled = true
        flag = 0
    } else {
        b1btn.innerHTML = "<p>O</p>"
        document.getElementById("text").value = "O"
        document.getElementById("text").disabled = true
        flag = 1;
    }
}

function myfunc_4() {
    if (flag == 1) {
        b2btn.innerHTML = "<p>X</p>"
        document.getElementById("text1").value = "X"
        document.getElementById("text1").disabled = true
        flag = 0
    } else {
        b2btn.innerHTML = "<p>O</p>"
        document.getElementById("text1").value = "O"
        document.getElementById("text1").disabled = true
        flag = 1;
    }
}
function myfunc_5() {
    if (flag == 1) {
        b3btn.innerHTML = "<p>X</p>"
        document.getElementById("text2").value = "X"
        document.getElementById("text2").disabled = true
        flag = 0
    } else {
        b3btn.innerHTML = "<p>O</p>"
        document.getElementById("text2").value = "O"
        document.getElementById("text2").disabled = true
        flag = 1;
    }
}
function myfunc_6() {
    if (flag == 1) {
        b4btn.innerHTML = "<p>X</p>"
        document.getElementById("text3").value = "X"
        document.getElementById("text3").disabled = true
        flag = 0
    } else {
        b4btn.innerHTML = "<p>O</p>"
        document.getElementById("text3").value = "O"
        document.getElementById("text3").disabled = true
        flag = 1;
    }
}
function myfunc_7() {
    if (flag == 1) {
        b5btn.innerHTML = "<p>X</p>"
        document.getElementById("text4").value = "X"
        document.getElementById("text4").disabled = true
        flag = 0
    } else {
        b5btn.innerHTML = "<p>O</p>"
        document.getElementById("text4").value = "O"
        document.getElementById("text4").disabled = true
        flag = 1;
    }
}
function myfunc_8() {
    if (flag == 1) {
        b6btn.innerHTML = "<p>X</p>"
        document.getElementById("text5").value = "X"
        document.getElementById("text5").disabled = true
        flag = 0
    } else {
        b6btn.innerHTML = "<p>O</p>"
        document.getElementById("text5").value = "O"
        document.getElementById("text5").disabled = true
        flag = 1;
    }
}
function myfunc_9() {
    if (flag == 1) {
        b7btn.innerHTML = "<p>X</p>"
        document.getElementById("text6").value = "X"
        document.getElementById("text6").disabled = true
        flag = 0
    } else {
        b7btn.innerHTML = "<p>O</p>"
        document.getElementById("text6").value = "O"
        document.getElementById("text6").disabled = true
        flag = 1;
    }
}
function myfunc_10() {
    if (flag == 1) {
        b8btn.innerHTML = "<p>X</p>"
        document.getElementById("text7").value = "X"
        document.getElementById("text7").disabled = true
        flag = 0
    } else {
        b8btn.innerHTML = "<p>O</p>"
        document.getElementById("text7").value = "O"
        document.getElementById("text7").disabled = true
        flag = 1;
    }
}
function myfunc_11() {
    if (flag == 1) {
        b9btn.innerHTML = "<p>X</p>"
        document.getElementById("text8").value = "X"
        document.getElementById("text8").disabled = true
        flag = 0
    } else {
        b9btn.innerHTML = "<p>O</p>"
        document.getElementById("text8").value = "O"
        document.getElementById("text8").disabled = true
        flag = 1;
    }
}
