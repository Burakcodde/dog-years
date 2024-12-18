let myAge = 35; // Yaşım

let earlyYears = 2; // İlk 2 yıl

earlyYears *= 10.5;

let laterYears = (myAge -= 2); // Yaşımdan 2 yıl çıkardık, kalan yılları bulduk.

laterYears *= 4; // Sonraki yıllarıma istinaden köpek yıllarının sayısı hesaplandı.

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears; // Köpek yılıdnaki yaşım hesaplandı.

let myName = "Burakcode".toLowerCase(); // adımın tüm harfleri küçük olacak.

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`
); // Sonuç
