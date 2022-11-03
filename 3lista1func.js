
function NumeroComparar() {
    var n1 = parseInt(prompt("Insira um número"))
    if (n1 > 0) {
        return 1
    }else if(n1 < 0){
        return -1
    }else if(n1 == 0){
        return 0
    }
}
console.log(NumeroComparar())