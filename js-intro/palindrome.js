function noSpaces(string) {
    return string.split(' ').join('').toLowerCase();
}

function palindrome (string){
    let reverseString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    }
    return reverseString == string;
}

alert(palindrome(noSpaces("ErrEr ReRRe")));