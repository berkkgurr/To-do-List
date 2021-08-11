var addButonu = document.getElementById("ekle");
let elemanSilmeButonu = document.querySelectorAll(".fa-times");
var cleanButonu = document.querySelector("#sil");
var girilenGorev = document.getElementById("isim");
var gorevListeKutusu = document.getElementById("gorevlistesi");

addButonu.addEventListener("click", function(){
    if (girilenGorev.value == "") alert("lutfen değer giriniz");
    else { var li = document.createElement("li");
    li.innerText = girilenGorev.value;
    var silbutonu = document.createElement("silbutonu");
    silbutonu.classList = "fas fa-times";
    li.appendChild(silbutonu);
    gorevListeKutusu.appendChild(li);
    girilenGorev.value = "";
    elemanSilmeButonu = document.querySelectorAll(".fa-times");
    for (var i = 0; i < elemanSilmeButonu.length; i++) { 
        elemanSilmeButonu[i].addEventListener("click", function(){
        var silinecek = this.parentElement;
        silinecek.remove();
        }); 
    } 
}
});
cleanButonu.addEventListener("click", function(){
    var secim = confirm("Are you sure?");
    if (secim == true) { 
        var hepsiniSil = document.querySelectorAll("li");
 
        for (var j = 0; j < hepsiniSil.length; j++) {
            hepsiniSil[j].remove();
        }
    }
});