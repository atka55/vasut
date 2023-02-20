const allomasok = ['Nyugati','Zugló','Kőbánya-Kispest','Ferihegy','Vecsés',
'Üllő','Monor','Monorierdő','Pilis','Albertisa','Ceglédbercel','Abony','Szolnok','Szajol',
'Törökszentmiklós','Fegyvernek-Örményes','Kisújszállás']

function elotteutana(megallo)
{
    var p = allomasok.findIndex(item => megallo.toLowerCase() == item.toLowerCase());
    var r = "";
    
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

    }
    return r;
}

function keres()
{
    var anev = document.getElementById("allomasnev").value.toLowerCase();
    document.getElementById("eredmeny").innerHTML = elotteutana(anev);
}