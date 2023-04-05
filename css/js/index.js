// segitiga luas
function luas(){
    var alas = document.getElementById('alas').value;
    var tinggi = document.getElementById('tinggi').value;

    var a = document.getElementById('a').value;
    var t = document.getElementById('t').value;

    luas = a*t/2

    document.getElementById('luas').innerHTML = luas;
}
// segitiga keliling
function keliling(){
    var sisi1 = document.getElementById('sisi1').value;
    var sisi2 = document.getElementById('sisi2').value;
    var sisi3 = document.getElementById('sisi3').value;

    var a = document.getElementById('a').value;
    var t = document.getElementById('t').value;

    keliling = sisi1+sisi2+sisi3

    document.getElementById('keliling').innerHTML = keliling;

}
// jajargenjang luas
function luasjr(){
    var alas = document.getElementById('alas').value;
    var tinggi = document.getElementById('tinggi').value;

    var a = document.getElementById('a').value;
    var t = document.getElementById('t').value;

    luasjr = a*t/2

    document.getElementById('luasjr').innerHTML = luasjr;
}
// jajargenjang keliling
function keljr(){
    var sisi1 = document.getElementById('sisia').value;
    var sisi2 = document.getElementById('sisib').value;

    var a = document.getElementById('a').value;
    var t = document.getElementById('b').value;

    keljr = 2*(sisi2*sisi3)

    document.getElementById('keljr').innerHTML = keljr;
}
