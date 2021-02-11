function calculaTe() {
    var S;
    var p;
    var n;
    var output = ""
    var kk;
    var korkoakorolle = 0
    var varallisuus = 0
    var a = []
    var b = []
    var c = []
    var d = []
    

    S = Number(document.getElementById("S").value);
    p = Number(document.getElementById("p").value);
    n = Number(document.getElementById("n").value);
    kk = Number(document.getElementById("kk").value);
    

    //The table begins
    output = "<table><tr><th>Vuosi</th><th>Varallisuus</th><th>Sijoitetun pääoman määrä</th><th>korkoa korolle-määrä</th></tr>";
    
    x = 1;
    while(x <= n) {
        varallisuus = S*(1+(p/100))**x;
        korkoakorolle = varallisuus - S
        output = output + "<tr><td>" + x + "</td>";
        a.push(varallisuus.toFixed(2));
        b.push(korkoakorolle.toFixed(2));
        c.push(S.toFixed(2));
        d.push(x);
        output = output + "<td>" +varallisuus.toFixed(2)+ "</td><td>"+S+"</td><td>"+korkoakorolle.toFixed(2)+"</td>"; //The deposit into the cell.
        output = output + "</tr>"; //The row ends.
        S = S + 12 * kk
        x = x+1
        
        
    }
    osuus = (korkoakorolle/varallisuus)*100
    output = output + "</table>"; //The table ends.
    document.getElementById("results").innerHTML = output;
    document.getElementById("pienin").innerHTML = "Omaisuutta kertyisi "+n+":n vuoden aikana "+varallisuus.toFixed(2)+" €, josta "+osuus.toFixed(2)+" % ("+korkoakorolle.toFixed(2)+" €) korkoa korolle efektin myötä!";
    
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: d,
            datasets: [{ 
                data: a,
                label: "Varallisuus",
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: b,
                label: "Korkoa korolle",
                borderColor: "#8e5ea2",
                fill: false
            }, {
                data: c,
                label: "Sijoitettu pääoma",
                borderColor: "#3cba9f",
                fill: false
            }
            ]
        },
        options: {
            title: {
            display: true,
            text: 'Tulos'
            }
        }
        });
    
}
