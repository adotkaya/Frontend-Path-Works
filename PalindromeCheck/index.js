function palindrome(str) {
 var splitted = str.split("");
 var reversed = splitted.reverse("");
 var joined = reversed.join("");
 return joined.toLowerCase().replace(/[^0-9a-z]/gi, '') == str.toLowerCase().replace(/[^0-9a-z]/gi, '')
}

palindrome('eye')
