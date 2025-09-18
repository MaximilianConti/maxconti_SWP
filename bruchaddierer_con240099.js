let bruch1 = "1_2/5";
let bruch2 = "5_3/10";

//BRUCH1



if ( bruch1.includes ("_") )
{
    const bruch1_splitter = bruch1.split ("_") 
    const bruchteile1_splitter = bruch1_splitter [1].split ("/") 

    ganze_zahl1 = Number (bruch1_splitter [0])
    zähler1 = Number (bruchteile1_splitter [0]) // ergibt 3
    nenner1 = Number (bruchteile1_splitter [1]) // ergibt 8
    neuer_zähler1 = (ganze_zahl1 * nenner1) + zähler1

    console.log ( "\nES GIBT EINE GANZE ZAHL IM ERSTEN BRUCH!" )
    console.log ( "Der zähler des ersten bruches ist " + zähler1 )
    console.log ( "Der nenner des ersten bruches ist " + nenner1 )
    console.log ( "Die ganze Zahl des ersten bruches ist " + ganze_zahl1 )
    console.log( "Der unechte bruch des ersten bruches ist " + neuer_zähler1 + "/" + nenner1 )
} 
else 
{
    const bruch1_splitter = bruch1.split("/")

    zähler1 = Number (bruch1_splitter [0]) // ergibt 5
    nenner1 = Number (bruch1_splitter [1]) // ergibt 8
    
    console.log ("ES GIBT KEINE GANZE ZAHL IM ERSTTEN BRUCH!")
    console.log ( "Der zähler des zweiten bruches ist " + zähler1 )
    console.log ( "Der nenner des zweiten bruches ist " + nenner1 )
    console.log ( "es gibt keine ganze zahlen im zweitem burch" )
    console.log ("Der unechte Bruch ist also schon " + zähler1 + "/" + nenner1 )

    
}

//BRUCH2


if ( bruch2.includes ("_") )
{
    const bruch2_splitter = bruch2.split ("_") 
    const bruchteile2_splitter = bruch2_splitter [1].split ("/") 

    ganze_zahl2 = Number (bruch2_splitter [0])
    zähler2 = Number (bruchteile2_splitter [0]) // ergibt 3
    nenner2 = Number (bruchteile2_splitter [1]) // ergibt 8
    neuer_zähler2 = (ganze_zahl2 * nenner2) + zähler2

    console.log ( "\nES GIBT EINE GANZE ZAHL IM ZWEITEN BRUCH!" )
    console.log ( "Der zähler des zweiten bruches ist " + zähler2 )
    console.log ( "Der nenner des zweiten bruches ist " + nenner2 )
    console.log ( "Die ganze Zahl des zweiten bruches ist " + ganze_zahl2 )
    console.log( "Der endgültige bruch des zweiten bruches ist " + neuer_zähler2 + "/" + nenner2 )
} 
else 
{
    const bruch2_splitter = bruch2.split("/")

     zähler2 = Number (bruch2_splitter [0]) // ergibt 5
     nenner2 = Number (bruch2_splitter [1]) // ergibt 8
    
    console.log ("\nES GIBT KEINE GANZE ZAHL IM zweiten BRUCH!")
    console.log ( "Der zähler des zweiten bruches ist " + zähler2 )
    console.log ( "Der nenner des zweiten bruches ist " + nenner2 )
    console.log ( "es gibt keine ganze zahlen im zweitem burch" )
    console.log ("Der engültige Bruch ist also schon " + zähler2 + "/" + nenner2 )
}

// zusammenrechnen



function gemeinsamer_nenner (nenner1, nenner2)
{
     kgv = 1
    while(kgv % nenner1 !== 0 || kgv % nenner2 !== 0)
    {
        kgv++
    }
    return "Der gemeinsame nenner ist " + kgv
}

console.log ( gemeinsamer_nenner (nenner1, nenner2) )

let summe_der_erweiterten_zähler = 0
//nicht anfassen
if ( kgv == nenner1 && nenner2 == nenner2)
{

    erweiterter_zähler1 = neuer_zähler1 ;
    erweiterter_zähler2 = neuer_zähler2 ;
    summe_der_erweiterten_zähler = erweiterter_zähler1 + erweiterter_zähler2 ;

    console.log ( "\nDer erweiterte erste bruch ist " + erweiterter_zähler1 + "/" + kgv );
    console.log ( "Der erweiterte zweite bruch ist " +  erweiterter_zähler2 + "/" + kgv );
    console.log ( "somit ist die summe der brüche " + summe_der_erweiterten_zähler + "/" + kgv );

    function gekürzter_engültiger_bruch ( summe_der_erweiterten_zähler , kgv) 
{
    let ggT = Math.min (summe_der_erweiterten_zähler , kgv) 
    for ( let i = ggT ; i <=ggT; i++)
    {
        if ( summe_der_erweiterten_zähler % i == 0 && kgv % i == 0 )
        {
            ggT = i
        }
    }

    console.log ( "\nDer ggT ist " + ggT )
    let gekürzter_zähler = summe_der_erweiterten_zähler / ggT
    let gekürzter_nenner = kgv / ggT
        if (gekürzter_zähler > gekürzter_nenner)
    {
        console.log ( "Der Bruch als Ganze zahl wäre " + gekürzter_zähler)
    }
    console.log ( "Der gekürzte bruch ist " + gekürzter_zähler + "/" + gekürzter_nenner )
}

gekürzter_engültiger_bruch ( summe_der_erweiterten_zähler , kgv);
}


//anfassen


if ( nenner1 == nenner1 && kgv == nenner2)
{
    let x = kgv / nenner1 ;
    let y = kgv / nenner2 ;
    erweiterter_zähler1 = neuer_zähler1 * x;
    erweiterter_zähler2 = neuer_zähler2 * y ;
    summe_der_erweiterten_zähler = erweiterter_zähler1 + erweiterter_zähler2 ;

    console.log ( "\nDer erweiterte erste bruch ist " + erweiterter_zähler1 + "/" + kgv );
    console.log ( "Der erweiterte zweite bruch ist " +  erweiterter_zähler2 + "/" + kgv );
    console.log ( "somit ist die summe der brüche " + summe_der_erweiterten_zähler + "/" + kgv );

    function gekürzter_engültiger_bruch ( summe_der_erweiterten_zähler , kgv) 
{
    let ggT = Math.min (summe_der_erweiterten_zähler , kgv) 
    for ( let i = ggT ; i <=ggT; i++)
    {
        if ( summe_der_erweiterten_zähler % i === 0 && kgv % i === 0 )
        {
            ggT = i

            console.log ( "\nDer ggT ist " + ggT )
            let gekürzter_zähler = summe_der_erweiterten_zähler / ggT
            let gekürzter_nenner = kgv / ggT
            console.log ( "Der gekürzte bruch ist " + gekürzter_zähler + "/" + gekürzter_nenner )
    if (gekürzter_zähler > gekürzter_nenner)
    {
        console.log ( "Der Bruch als Ganze zahl wäre " + gekürzter_zähler)
    }
        }
        else 
        {
            console.log ("Bruch nicht kürzbar")
        }
    }


}

gekürzter_engültiger_bruch ( summe_der_erweiterten_zähler , kgv);
}


//verbesserungen
//if includes 0 oder abcdef 


