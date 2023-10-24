function reverseString(str) {
    // let splitString = str.split("");
    // let reverseArray = splitString.reverse();
    // let joinArray = reverseArray.join("");
    // return joinArray;
    return str.split("").reverse().join("");
}

function palindromeCheck() {
    let msg = document.getElementById('msg').value;
    let ans = document.getElementById("answer");

    if(msg == ""){
        alert("please Enter Your String")
    }else{
        msg = msg.toLowerCase();
        if(msg == reverseString(msg)){
            ans.innerHTML = 'yes '+ msg + ' is a palindrome!'
        }else{
            ans.innerHTML = 'No ' + msg + ` isn't a palindrome!`
        }
    }
}