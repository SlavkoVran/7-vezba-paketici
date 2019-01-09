
// function provera(){
//     let ime = document.getElementById("ime").value;
//     let pol = document.getElementById("pol").checked;
//     let pol1 = document.getElementById("pol1").checked;
//     let tabelaPrikaz = document.getElementById("tabela2").value;
//     if(ime != "" && (pol == true || pol1 == true ) ){ 
//         document.getElementById("tabela2").style.display = 'block';
//     }
//     else{
//         window.alert("Za odabir artikala neophodno je popuniti ime i pol deteta")
        
//     }
// }

function pomocna(){
 provera();
 izborPola();
}
function provera(){
    let ime = document.getElementById("ime").value;
    let pol = document.getElementById("pol").checked;
    let pol1 = document.getElementById("pol1").checked;
    let tabelaPrikaz = document.getElementById("tabela2").value;
    
    if(ime == "" || (pol == false && pol1 == false ) ){ 
        window.alert("Za odabir artikala neophodno je popuniti ime i pol deteta")
    }
    else{
      
        document.getElementById("tabela2").style.display = 'block';
        
    }
    
}

function izborPola(){
    let pol = document.getElementById("pol").checked;
    let pol1 = document.getElementById("pol1").checked;

    if( pol == true && pol1== false){
        document.getElementById("kolicina4").style.backgroundColor = "red";
        document.getElementById("cena4").style.backgroundColor = "red";
        document.getElementById("ukupno4").style.backgroundColor = "red";
        document.getElementById("kolicina4").disabled = true;
        document.getElementById("cena4").disabled = true;
        document.getElementById("ukupno4").disabled = true;
    }
    else if (pol == false && pol1== true){
        document.getElementById("kolicina5").style.backgroundColor = "red";
        document.getElementById("cena5").style.backgroundColor = "red";
        document.getElementById("ukupno5").style.backgroundColor = "red";
        document.getElementById("kolicina5").disabled = true;
        document.getElementById("cena5").disabled  = true;
        document.getElementById("ukupno5").disabled = true;
    }
    else{
        
    }
    
}

document.getElementById("dugmeP").addEventListener("click",pomocna);


cena1 = Number(document.getElementById("cena1").value);
cena2 = Number(document.getElementById("cena2").value);
cena3 = Number(document.getElementById("cena3").value);
cena4 = Number(document.getElementById("cena4").value);
cena5 = Number(document.getElementById("cena5").value);

kolicina1 = Number(document.getElementById("kolicina1").value);
kolicina2 = Number( document.getElementById("kolicina2").value);
kolicina3 = Number(document.getElementById("kolicina3").value);
kolicina4 = Number(document.getElementById("kolicina4").value);
kolicina5 = Number(document.getElementById("kolicina5").value);


function kupi(){

document.getElementById("ukupno1").value = a1.ukupno;
document.getElementById("ukupno2").value = a2.ukupno;
document.getElementById("ukupno3").value = a3.ukupno;
document.getElementById("ukupno4").value = a4.ukupno;
document.getElementById("ukupno5").value = a5.ukupno;
    }

document.getElementById('kupi').addEventListener('click',kupi);



function artikal(ime, vrsta, kolicina, cena){
    this.ime = ime;
    this.vrsta = vrsta;
    this.kolicina = kolicina;
    this.cena = cena;
}

a1 = new artikal("Lopta", "Lopta", kolicina1, cena1);
a2 = new artikal("Novogodisnji ukras", "ukras", kolicina2, cena2)
a3 = new artikal("slatkis", "slatkis", kolicina3, cena3)
a4 = new artikal("lutka", "lutka", kolicina4, cena4)
a5 = new artikal("auto", "auto", kolicina5, cena5);

artikal.prototype.ukupno = function(){
    
    r =  Number(this.kolicina * this.cena);
    return r;


}


console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)










// a = 3;
// b = 4;
// c = 7;
// d = 8;
// e = 9;
// proizvod();


// function proizvod(x,y){
//     t  = x * y;
//     return t;
// }

// m = proizvod (a,b);
// n = proizvod(c,d);
// o = proizvod (d,d)

// document.write(m); 
// document.write(n);
// document.write(o);
// function mnozenje (x,y){
//     let a = document.getElementById("kolicina1").value;
//     let b = document.getElementById("cena1").value;
//  let m = a * b;
//  return m;
//  document.getElementById("ukupno1").value = m;
// }

// document.getElementById('kupi').addEventListener("click", mnozenje);