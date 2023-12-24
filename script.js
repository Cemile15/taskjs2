function hesablaYanacaq(mesafe, zaman) {
    let ortalamaSuret = mesafe / zaman;
    let yanacaqMiqdari = 0;
    let ortalamaYanacaqSərfiyyatı = 0;
    
    if (ortalamaSuret <= 60) {
        yanacaqMiqdari = 6;
    } 
    else if (ortalamaSuret > 60 && ortalamaSuret <= 90) {
        yanacaqMiqdari = 9;
    } 
    else if (ortalamaSuret > 90 && ortalamaSuret <= 120) {
        yanacaqMiqdari = 8;
    }
     else {
        yanacaqMiqdari = 10;
    }
    
    ortalamaYanacaqSərfiyyatı = (yanacaqMiqdari * 100) / mesafe;
    
    return `${mesafe} km yolu ${zaman} saat müddətinə getmək üçün, sizin ortalama sürətiniz ${ortalamaSuret} km/saat olmalıdır. Sizə lazım olacaq yanacaq miqdarı ${yanacaqMiqdari} litr, ortalama yanacaq sərfiyyatı isə ${ortalamaYanacaqSərfiyyatı.toFixed(2)} l/100 km olacaq`;
}



console.log(hesablaYanacaq(130, 2)); 
