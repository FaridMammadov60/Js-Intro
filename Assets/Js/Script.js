let num = 10;
let num2 = 2;
let word = "Salam"

//Bir method olsun iki parametr qəbul etsin və bu parametrlərdən birincini ikinciyə bölüb nəticəni geri qaytarsın.
function Bolme(num1, num2) {
    return num1 / num2
}
console.log(Bolme(num, num2));

//Repeat deyə bir method olsun və iki parametr qəbul etsin biri "word" digəri "count"  
//bu method göndərilən word-ü göndərilən count qədər yan-yana yazdırıb geri qaytarsın
function Repeat(word, count) {
    let soz="";

    while (count > 0) {
        soz += word;
        count--;
    }
    return soz;

}
console.log(Repeat(word, num2));

//Bir method olsun göndərilən "n" sayda ədədin hamsını toplayıb geri qaytarsın.

function Sum(arr) {
    let cem = 0;
    for (let i = 0; i < arr.length; i++) {

        cem = cem + arr[i];
    }
    return cem;
}
console.log(Sum([5, 7, 8, 9]));

//Sahe deyə Method(lar) yaradılır.
//Çevrənin sahəsi - S = p*r² (p=3)
function Csahe(r, p = 3) {
    return p * r * r;
}
console.log(Csahe(num));
//Düzbucaqlının sahəsi - S = a*b
function Dsahe(a, b) {
    return a * b;
}
console.log(Dsahe(num, num2));
//Üçbucaqlının daxilinə çəkilmiş çevrənin sahəsi - S=p*r; p=(a+b+c)/2
function Usahe(a, b, c, r) {
    return r * ((a + b + c) / 2);
}
console.log(Usahe(1, 2, 3, 4));