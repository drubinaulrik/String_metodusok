let string = "pelda szöveg";
//1.
console.log(string.slice(0, 5));
//2.
console.log(string.substring(3, 8));
//3.
console.log(string.slice(5));
//4.
console.log(string.slice(5, -1));
//5.
console.log(string.toUpperCase());
//6.
function masodik_nagybetu(str) {
    let eredmeny = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 1) {
            eredmeny += str[i].toUpperCase();
        } else {
            eredmeny += str[i];
        }
    }
    return eredmeny;
}
console.log(masodik_nagybetu(string)); 
//7.
console.log(string.replace(/e/g, 'E'));
//8.
console.log(string.split('e'));
