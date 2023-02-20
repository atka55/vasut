const allomasok = ['Nyugati','Zugló','Kőbánya-Kispest','Ferihegy','Vecsés',
'Üllő','Monor','Monorierdő','Pilis','Albertisa','Ceglédbercel','Abony','Szolnok','Szajol',
'Törökszentmiklós','Fegyvernek-Örményes','Kisújszállás']

function elotteutana(megallo)
{
    var p = allomasok.indexOf(megallo);
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
            r += "Előtte_ -";
        }
        r = "<br>";
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