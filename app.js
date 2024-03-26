// Tapsiriq 1
let user = prompt("Adiniz daxil edin");
console.log(user);
console.log(user.length);

// Tapsiriq 2

console.log(user.charAt(1));
// Tapsiriq 3
console.log(user.startsWith(user.charAt(1)));
// Tapsiriq 4
console.log(user.endsWith(user.charAt(1)));
// Tapsiriq 5
console.log(user.indexOf(user.charAt(1)));

// Tapsiriq 6
let str = "Salam Dunya";
let cvb = /^SALAM/.test(str);
let cvb1 = /^salam/.test(str);
let cvb2 = /^Salam/.test(str);
let cvb3 = /^saLaM/.test(str);

console.log(cvb); 
console.log(cvb1); 
console.log(cvb2);
console.log(cvb3); 
