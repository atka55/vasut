const allomasok = ['Nyugati','Zugló','Kőbánya-Kispest','Ferihegy','Vecsés',
'Üllő','Monor','Monorierdő','Pilis','Albertisa','Cegléd','Ceglédbercel','Abony','Szolnok','Szajol',
'Törökszentmiklós','Fegyvernek-Örményes','Kisújszállás']

var a = document.getElementById("itt");
a.max = allomasok.length-1;

document.getElementById("vonat").style.left="175px"





function elotteutana(megallo)
{
    var p = allomasok.findIndex(item => megallo.toLowerCase() == item.toLowerCase());
    var r = "";

    var ut = document.getElementById("itt");
    ut.value = p;


    

    
    if (p==-1)
    {
        r = "Nincsen ilyen megálló ezen a vonalon.";

    }
    else{
        if(p!=0)
        {
            r += "Előtte: "+allomasok[p-1];
        }
        else
        {
            r += "Előtte: -";
        }
        r += "<br>";
        if(p == allomasok.length-1)
        {
            r += "Utána: -";
        }
        else{
            r += "Utána: "+allomasok[p+1];
        }
        var poz = 700/allomasok.length*p
        console.log(poz)
        document.getElementById("vonat").style.left=(poz+70)+"px"

    }
    return r;
}

function keres()
{
    var anev = document.getElementById("allomasnev").value.toLowerCase();
    document.getElementById("eredmeny").innerHTML = "";
    document.getElementById("eredmeny").innerHTML = elotteutana(anev);
}

