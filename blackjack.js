 //Başlangıç Coin
 var coin = 500;
 var kartbirinci = 0;
 var kartikinci = 0;
 var kartucuncu = 0;
 var kartdorduncu = 0;
 var kartbesinci = 0;


//Oyna Butonu (Oyuna Başlama)
function oynaButonu()
{ //Kart1 ve kart2'ye için random değer üretme
    const array1 = ["A", "J", "Q", "K", 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const random1 = Math.floor(Math.random() * array1.length);
    
    const array2 = ["A", "J", "Q", "K", 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const random2 = Math.floor(Math.random() * array2.length);

    kartbirinci = array1[random1];

    kartikinci = array2[random2];

    document.getElementById("oynaBtn").style.display = "none"; //Oyna butonu kaybolur
    document.getElementById("elAcBtn").style.display = "inline"; //Oyna butonu kaybolur
    coin = 500;
    document.getElementById("totalpara").innerHTML = coin; //Para 500$ olur
    document.getElementById("restartBtn").style.display = "inline"; //Restart butonu görünür olur
    document.getElementById("logo").style.marginRight = "-88px"; //Logo yerinde kalır
    document.getElementById("kart1").style.display = "inline"; //Kart1 açılış
    document.getElementById("kart1deger").innerHTML = kartbirinci; //Kart1 değer atama

    var hesaplamaKart1
    var hesaplamaKart2

     
    if (kartbirinci == "K" || "Q" || "J")
    {
        hesaplamaKart1 = 10
        console.log("birinci kart " + hesaplamaKart1 + " puan")
    }
    else
    {
        console.log("birinci kartta K,Q,J yok")
    }

    if (kartikinci == "K" || "Q" || "J")
    {
        hesaplamaKart2 = 10
        console.log("birinci kart " + hesaplamaKart2 + " puan")
    }
    else
    {
        console.log("ikinci kartta K,Q,J yok")
    }

    document.getElementById("kart2").style.display = "inline"; //Kart2 açılış
    document.getElementById("kart2deger").innerHTML = kartikinci; //Kart2 değer atama
    document.getElementById("kartcek").style.display = "inline"; //Kartcek açılış
    console.log("oynabutonu() fonk. çalışıyor.")
    console.log(kartbirinci+  " "+ kartikinci+ " " +kartucuncu+ " " +kartdorduncu+ " " +kartbesinci)
}

//Restart Butonu (Bekleme Ekranına Dönme)
function restartBtn()
{
    document.getElementById("restartBtn").style.display = "none"; //Restart butonu kaybolur
    document.getElementById("oynaBtn").style.display = "inline"; //Oyna butonu görünür olur
    document.getElementById("totalpara").innerHTML = "0"; //Para 0$ olur
    document.getElementById("kart1").style.display = "none"; //Kart1 gizleme
    document.getElementById("kart2").style.display = "none"; //Kart2 gizleme
    document.getElementById("kart3").style.display = "none"; //Kart3 gizleme
    document.getElementById("kart4").style.display = "none"; //Kart4 gizleme
    document.getElementById("kart5").style.display = "none"; //Kart5 gizleme
    document.getElementById("kartcek").style.display = "none"; //Kartcek gizleme
    document.getElementById("elAcBtn").style.display = "none"; //kartları aç butonu gizleme
    document.getElementById("elAcDevamBtn").style.display = "none"; //devam butonu gizleme
    document.getElementById("fazlakart").style.display = "none" //uyarı kapatma
    kartsayisi = 2;
    console.log("restartbutonu() fonk. çalışıyor.")
}

//Kart Çekme(Kart çekmeye tıklandığında kartların açılıp sayıların atanması)
var kartsayisi = 2;

function newCart()
{
    if (kartsayisi == 2) 
    { //3. Kart
         const array3 = ["K", "J", "Q", "K", 2, 3, 4, 5, 6, 7, 8, 9, 10];
         const random3 = Math.floor(Math.random() * array3.length);
         kartucuncu = array3[random3];
         document.getElementById("kart3").style.display = "inline"; //kart3 görünür olur
         document.getElementById("kart3deger").innerHTML = kartucuncu
         kartsayisi = 3;
         console.log(kartsayisi+" kart çekildi");
    }
    else if (kartsayisi == 3)
    { //4. Kart
         const array4 = ["A", "J", "Q", "K", 2, 3, 4, 5, 6, 7, 8, 9, 10];
         const random4 = Math.floor(Math.random() * array4.length);
         kartdorduncu = array4[random4];
         document.getElementById("kart4").style.display = "inline"; //kart4 görünür olur
         document.getElementById("kart4deger").innerHTML = kartdorduncu
         kartsayisi = 4;
         console.log(kartsayisi+" kart çekildi");
    }
    else if (kartsayisi == 4)
    { //5. Kart
         const array5 = ["A", "J", "Q", "K", 2, 3, 4, 5, 6, 7, 8, 9, 10];
         const random5 = Math.floor(Math.random() * array5.length);
         kartbesinci = array5[random5];
         document.getElementById("kart5").style.display = "inline"; //kart5 görünür olur
         document.getElementById("kart5deger").innerHTML = kartbesinci
         kartsayisi = 5;
         console.log(kartsayisi+" kart çekildi");
    }
    else
    {
         console.log(">Daha fazla kart çekilemez!");
         document.getElementById("fazlakart").style.backgroundColor = "rgb(230, 230, 0)" //Uyarı rengi değiştirme
         document.getElementById("fazlakart").style.color = "black" //Uyarı rengi değiştirme
         document.getElementById("fazlakart").innerHTML = "Daha Fazla Kart Çekemezsiniz!"
         document.getElementById("kartcek").style.display = "none"
         document.getElementById("fazlakart").style.display = "inline" //Uyarı açma (Daha fazla kart çekemezsiniz!)
    }
}


//4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
 //Kartları Aç Butonu (Hesaplama)
function elAcBtn()
{
    const kurpiyerAralik = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 20, 21, 20, 21, 17, 18, 19, 20, 21, 17, 18, 19, 20, 21, 17, 18, 19, 20, 21,16, 17, 18, 19, 20, 21, 20, 20, 17, 18, 19, 20, 16, 17, 18, 19, 20, 20, 20, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    const KurpiyerRandom = Math.floor(Math.random() * kurpiyerAralik.length);
    var kurpiyerSonuc = kurpiyerAralik[KurpiyerRandom];

    console.log("Kurpiyer Sonuc: " + kurpiyerSonuc)

    document.getElementById("kurpiyerSkor").innerHTML = kurpiyerSonuc
    document.getElementById("kurpiyerSkor").style.display = "inline"
    document.getElementById("elAcBtn").style.display = "none" //El ac butonu kaybolur
    document.getElementById("elAcDevamBtn").style.display = "inline"; //Devam butonu görünür olur
    document.getElementById("kartcek").style.display = "none";
    document.getElementById("elAcDevamBtn").style.marginRight = "100px"

    if(kartbesinci == "K" || kartbesinci == "J" || kartbesinci == "Q")
    {
        kartbesinci = 10
    }

    if(kartdorduncu == "K" || kartdorduncu == "J" || kartdorduncu == "Q"){
        kartdorduncu = 10
    }

    if(kartucuncu == "K" || kartucuncu == "J" || kartucuncu == "Q"){
        kartucuncu = 10
    }

    if(kartikinci == "K" || kartikinci == "J" || kartikinci == "Q"){
        kartikinci = 10
    }

    if(kartbirinci == "K" || kartbirinci == "J" || kartbirinci == "Q"){
        kartbirinci = 10
    }

    var kartbirinciA = 0;
    var kartikinciA = 0;
    var kartucuncuA = 0;
    var kartdorduncuA = 0;
    var kartbesinciA = 0;

    if(kartbirinci == "A")
    {
        kartbirinci = 0
        kartbirinciA = 11
    }
    else{
    }

    if(kartikinci == "A")
    {
        kartikinci = 0
        kartikinciA = 11
    }


    if(kartucuncu == "A"){
        kartucuncu = 0
        kartucuncuA = 11
    }


    if(kartdorduncu == "A"){
        kartdorduncu = 0
        kartdorduncuA = 11
    }


    if(kartbesinci == "A"){
        kartdorduncu = 0
        kartbesinciA = 11
    }

    var sonuc;
    sonuc = kartbesinci+kartdorduncu+kartucuncu+kartikinci+kartbirinci+kartbesinciA+kartdorduncuA+kartucuncuA+kartikinciA+kartbirinciA
    
    if(sonuc > 21 && kartbirinciA == 11 || kartikinciA == 11 || kartucuncuA == 11 || kartdorduncuA == 11 || kartbesinciA == 11){
        if(kartbirinciA = 11)
        {
            kartbirinciA = 1
        }
        else
        {
            kartbirinciA = 0
        }

        sonuc = kartbesinci+kartdorduncu+kartucuncu+kartikinci+kartbirinci+kartbesinciA+kartdorduncuA+kartucuncuA+kartikinciA+kartbirinciA

        if(sonuc > 21 && kartikinciA == 11)
        {
            kartikinciA = 1
        }
        else
        {
            kartikinciA = 0
        }

        sonuc = kartbesinci+kartdorduncu+kartucuncu+kartikinci+kartbirinci+kartbesinciA+kartdorduncuA+kartucuncuA+kartikinciA+kartbirinciA

        if(sonuc > 21 && kartucuncuA == 11)
        {
            kartucuncuA = 1
        }
        else
        {
            kartucuncuA = 0
        }

        sonuc = kartbesinci+kartdorduncu+kartucuncu+kartikinci+kartbirinci+kartbesinciA+kartdorduncuA+kartucuncuA+kartikinciA+kartbirinciA

        if(sonuc > 21 && kartdorduncuA == 11)
        {
            kartdorduncuA = 1
        }
        else
        {
            kartdorduncuA = 0
        }

        sonuc = kartbesinci+kartdorduncu+kartucuncu+kartikinci+kartbirinci+kartbesinciA+kartdorduncuA+kartucuncuA+kartikinciA+kartbirinciA

        if(sonuc > 21 && kartbesinciA == 11)
        {
            kartbesinciA = 1
        }
        else
        {
            kartbesinciA = 0
        }       
    }

    if(sonuc > 21 && kartbirinciA == 11 || kartikinciA == 11 || kartucuncuA == 11 || kartdorduncuA == 11 || kartbesinciA == 11){
        if(kartbirinciA = 11)
        {
            kartbirinciA = 1
        }
        else
        {
            kartbirinciA = 0
        }

        sonuc = kartbesinci+kartdorduncu+kartucuncu+kartikinci+kartbirinci+kartbesinciA+kartdorduncuA+kartucuncuA+kartikinciA+kartbirinciA

        if(sonuc > 21 && kartikinciA == 11)
        {
            kartikinciA = 1
        }
        else
        {
            kartikinciA = 0
        }

        sonuc = kartbesinci+kartdorduncu+kartucuncu+kartikinci+kartbirinci+kartbesinciA+kartdorduncuA+kartucuncuA+kartikinciA+kartbirinciA

        if(sonuc > 21 && kartucuncuA == 11)
        {
            kartucuncuA = 1
        }
        else
        {
            kartucuncuA = 0
        }

        sonuc = kartbesinci+kartdorduncu+kartucuncu+kartikinci+kartbirinci+kartbesinciA+kartdorduncuA+kartucuncuA+kartikinciA+kartbirinciA

        if(sonuc > 21 && kartdorduncuA == 11)
        {
            kartdorduncuA = 1
        }
        else
        {
            kartdorduncuA = 0
        }

        sonuc = kartbesinci+kartdorduncu+kartucuncu+kartikinci+kartbirinci+kartbesinciA+kartdorduncuA+kartucuncuA+kartikinciA+kartbirinciA

        if(sonuc > 21 && kartbesinciA == 11)
        {
            kartbesinciA = 1
        }
        else
        {
            kartbesinciA = 0
        }       
    }



    console.log("sonuc: " + sonuc)
    document.getElementById("skor").innerHTML = sonuc
    document.getElementById("skor").style.display = "inline"

    

    

 //Hesaplama    
    if(sonuc <= 21 && kurpiyerSonuc <= 21)
    {
        if(sonuc < kurpiyerSonuc)
        {
            document.getElementById("fazlakart").style.backgroundColor = "red" //Uyarı rengi değiştirme
            document.getElementById("fazlakart").innerHTML = "İflas! (Para -50)" //Uyarı açma (İflas (Para-50)
            document.getElementById("fazlakart").style.display = "inline" //Uyarı açma (iflas!)
            coin = coin-50;
            document.getElementById("totalpara").innerHTML = coin //Coin 50 birim azaltılır ve yazdırılır
        }
        else if(sonuc > kurpiyerSonuc)
        {
            document.getElementById("fazlakart").style.backgroundColor = "greenyellow" //Uyarı rengi değiştirme
            document.getElementById("fazlakart").style.color = "black" //Uyarı rengi değiştirme
            document.getElementById("fazlakart").innerHTML = "Kazandın! (Para +50)"
            document.getElementById("fazlakart").style.display = "inline"  //Uyarı açma (Kazandın! (Para +50)       
            coin = coin+50;
            document.getElementById("totalpara").innerHTML = coin //Coin 50 birim azaltılır ve yazdırılır
        }
        else if(sonuc = kurpiyerSonuc)
        {
            document.getElementById("fazlakart").style.backgroundColor = "blue" //Uyarı rengi değiştirme
            document.getElementById("fazlakart").style.color = "white" //Uyarı rengi değiştirme
            document.getElementById("fazlakart").innerHTML = "Berabere (Para +0)"
            document.getElementById("fazlakart").style.display = "inline"  //Uyarı açma (Berabere (Para +0)       
        }
    }

    if(sonuc <= 21 && kurpiyerSonuc > 21)
    {
            document.getElementById("fazlakart").style.backgroundColor = "greenyellow" //Uyarı rengi değiştirme
            document.getElementById("fazlakart").style.color = "black" //Uyarı rengi değiştirme
            document.getElementById("fazlakart").innerHTML = "Kazandın! (Para +50)"
            document.getElementById("fazlakart").style.display = "inline"  //Uyarı açma (Kazandın! (Para +50)       
            coin = coin+50;
            document.getElementById("totalpara").innerHTML = coin //Coin 50 birim azaltılır ve yazdırılır
    }

    if(sonuc > 21)
    {

        document.getElementById("fazlakart").style.backgroundColor = "red" //Uyarı rengi değiştirme
        document.getElementById("fazlakart").innerHTML = "İflas! (Para -50)" //Uyarı açma (İflas (Para-50)
        document.getElementById("fazlakart").style.display = "inline" //Uyarı açma (iflas!)
        coin = coin-50;
        document.getElementById("totalpara").innerHTML = coin //Coin 50 birim azaltılır ve yazdırılır
        
    }


}
//Devam Butonu
function elAcDevamBtn()
{
    const array1 = ["A", "J", "Q", "K", 2, 3, 4, 5, 6, 7, 8, 9];
    const random1 = Math.floor(Math.random() * array1.length);

    const array2 = ["A", "J", "Q", "K", 2, 3, 4, 5, 6, 7, 8, 9];
    const random2 = Math.floor(Math.random() * array2.length);

    kartbirinci = array1[random1];

    kartikinci = array2[random2];

    kartbesinci = 0 
    kartdorduncu = 0
    kartucuncu = 0
    kartbesinciA = 0
    kartdorduncuA = 0
    kartucuncuA = 0
    kartikinciA = 0
    kartbirinciA = 0

    document.getElementById("elAcDevamBtn").style.display = "none"; //Devam butonu kaybolur
    document.getElementById("kart1").style.display = "inline"; //Kart1 açılış
    document.getElementById("kart1deger").innerHTML = kartbirinci; //Kart1 değer atama
    document.getElementById("kart2").style.display = "inline"; //Kart2 açılış
    document.getElementById("kart2deger").innerHTML = kartikinci; //Kart2 değer atama
    document.getElementById("fazlakart").style.display = "none" //Uyarı kapatma (Daha fazla kart çekemezsiniz!)
    document.getElementById("kart3").style.display = "none"; //Kart3 gizleme
    document.getElementById("kart4").style.display = "none"; //Kart4 gizleme
    document.getElementById("kart5").style.display = "none"; //Kart5 gizleme
    document.getElementById("kartcek").style.display = "inline" //kartcek görünür yapma
    document.getElementById("elAcBtn").style.display = "inline" //kartcek görünür yapma
    document.getElementById("skor").style.display = "none"
    document.getElementById("kurpiyerSkor").style.display = "none"
    document.getElementById("kartcek").style.marginRight = "100px"

    kartsayisi = 2;

    //TAM İFLAS

    if(coin <= 0){
        document.getElementById("restartBtn").style.display = "inline"; //Restart butonu kaybolur
        document.getElementById("oynaBtn").style.display = "none"; //Oyna butonu görünür olur
        document.getElementById("logo").style.marginRight = "0px"; //Logo yerinde kalır
        document.getElementById("totalpara").innerHTML = "0"; //Para 0$ olur
        document.getElementById("kart1").style.display = "none"; //Kart1 gizleme
        document.getElementById("kart2").style.display = "none"; //Kart2 gizleme
        document.getElementById("kart3").style.display = "none"; //Kart3 gizleme
        document.getElementById("kart4").style.display = "none"; //Kart4 gizleme
        document.getElementById("kart5").style.display = "none"; //Kart5 gizleme
        document.getElementById("kartcek").style.display = "none"; //Kartcek gizleme
        document.getElementById("elAcBtn").style.display = "inline"; //kartları aç butonu gizleme
        document.getElementById("elAcDevamBtn").style.display = "none"; //devam butonu gizleme
        document.getElementById("fazlakart").style.display = "none" //uyarı kapatma
        document.getElementById("elAcBtn").style.display = "none";
        document.getElementById("iflas-son").style.display = "block"; //iflas uyarısı açma
        kartsayisi = 2;
        console.log("iflas uyarısı")
        document.getElementById("").style.display = "block";
}
}


