const d=document,
$seleccion=d.getElementById('seleccion'),
$grafoMinimas=d.getElementById('grafoMinimas'),
$tabla=d.querySelector('.tabla');

let xDatos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

const getAll = async () =>{
    try {
        const res = await fetch('db.json'),
        data = await res.json();
        //console.log(data[0].automaticas[0].temperatura_min);
        datos(data);
        
    } catch (error) {
        console.log(error);
    }
};

d.addEventListener("DOMContentLoaded", getAll);



/*VARIABLES ESTACIONES*/
/*CHIVAY MÍNIMA AUT*/


/*var ema_chivay = {
    x: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    //y: [-1.5,-1.7,-0.5,-1.2,-1.2,-0.7,-1.5,-0.7,-0.2,0.3,1.2,2.8,-0.4,2,0.6,-0.4,0,0.5,1.5,2.5,1.1,2.1,1.5,0.5,4.8,-0.6,-0.4,-0.6,3,0.5,-0.4],
    y: xDatosMax,
    name: 'EMA Chivay',
    type: 'lines+markerS',
    
};
console.log(y);
/*CHIVAY MINIMAS CO*/
/*var co_chivay = {
    x: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    //y: [-1.4,-2,-0.8,-1.4,-2,-0.8,-1.4,-1,-0.4,-1.4,0.8,1.9,-0.3,1.6,-0.2,-1.6,-0.2,0,0.8,1.2,0.6,1.8,0.6,0.4,4.2,-1.2,-1,-1.6,2.4,-0.2,-1.2],
    name: 'CO Chivay',
    type: 'lines+markerS'
};

/*CHIVAY MÁXIMAS AUT*/
/*var ema_chivay = {
    x: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    //y: [-1.5,-1.7,-0.5,-1.2,-1.2,-0.7,-1.5,-0.7,-0.2,0.3,1.2,2.8,-0.4,2,0.6,-0.4,0,0.5,1.5,2.5,1.1,2.1,1.5,0.5,4.8,-0.6,-0.4,-0.6,3,0.5,-0.4],
    name: 'EMA Chivay',
    type: 'lines+markerS',
    
};
/*CHIVAY MÁXIMAS CO*/
/*var co_chivay = {
    x: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    //y: [-1.4,-2,-0.8,-1.4,-2,-0.8,-1.4,-1,-0.4,-1.4,0.8,1.9,-0.3,1.6,-0.2,-1.6,-0.2,0,0.8,1.2,0.6,1.8,0.6,0.4,4.2,-1.2,-1,-1.6,2.4,-0.2,-1.2],
    name: 'CO Chivay',
    type: 'lines+markerS'
};
/*CHIVAY DIFERENCIAS MÁXIMAS*/
/*var dif_minimas_chivay = {
    x: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    //y: [-0.4,0.1,0.1,0.2,-1,-0.3,-1,-0.2,-0.4,0.2,0.1,0.3,-0.3,1.6,-0.2,-1.6,-0.2,0,0.8,1.2,0.6,1.8,0.6,0.4,4.2,-1.2,-1,-1.6,2.4,-0.2,-1.2],
    name: 'Comparación',
    type: 'bar',
    text: [-0.4,0.1,0.1,0.2,-1,-0.3,-1,-0.2,-0.4,0.2,0.1,0.3,-0.3,1.6,-0.2,-1.6,-0.2,0,0.8,1.2,0.6,1.8,0.6,0.4,4.2,-1.2,-1,-1.6,2.4,-0.2,-1.2].map(String),
    textposition: 'auto',
    hoverinfo: 'none',
    marker: {
        color: 'rgb(158,202,225)',
        opacity: 0.6,
        line: {
        color: 'rgb(8,48,107)',
        width: 1
        }
    },
    width: 0.2
};
/////////////////////////////////////////////////////////////////////////////////////////////////////
/*COTAHUASI MÍNIMAS EMA*/
/*var ema_cotahuasi={
    x: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    y: [,10.8,12.3,,11.7,11.8,11.3,10.7,10.5,10.5,,10.5,9.8,12.1,12.1,10.5,11.2,12.2,12.5,14.7,13.6,13.4,14.6,11.2,10.3,10.4,10.5,11.4,12.3,11.3,9],
    name: 'EMA Cotahuasi',
    type: 'scatter'
};
/*COTAHUASI MINIMAS CO*/
/*var co_cotahuasi={
    x: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    y: [9.2,9.8,11.2,10.6,10.6,10.8,10.2,10,9.6,9.8,12.2,9.8,9.2,11.2,11.2,9.6,10.4,10.8,11.4,13.4,11.8,12.2,13.4,10.2,9.6,9.6,9.4,10.6,11.8,10.2,8.4],
    name: 'CO Cotahuasi',
    type: 'scatter'
};
/*CRUCERO MAXIMAS*/
/*var ema_crucero={
    x: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    y: [],
    type: 'scatter'
};
/*CRUCERO MINIMAS*/
/*var co_crucero={
    x: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    y: [],
    type: 'scatter'
};
/*HUANCA MAXIMAS*/
/*var ema_huanca={
    x: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    y: [],
    type: 'scatter'
};
/*HUANCA MINIMAS*/
/*var co_huanca={
    x: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    y: [],
    type: 'scatter'
};*/

const datos = data =>{
    $seleccion.addEventListener('change',()=>{
        if($seleccion.value==='chivay'){
            /*CHIVAY MÍNIMA AUT*/
            var ema_chivay_min = {
                x: xDatos,
                y: data[0].automaticas[0].temperatura_min,
                name: 'EMA Chivay',
                type: 'lines+markerS',
            };
            /*CHIVAY MINIMAS CO*/
            var co_chivay_min = {
                x: xDatos,
                y: data[0].convencionales[0].temperatura_min,
                name: 'CO Chivay',
                type: 'lines+markerS'
            };
            /*CHIVAY DIFERENCIAS*/
            var dif_minimas_chivay = {
                x: xDatos,
                y: data[0].comparaciones[0].temperatura_min,
                name: 'Comparación',
                type: 'bar',
                /*text: [-0.1,0.3,0.3,0.2,0.8,0.1,-0.1,0.3,0.2,1.7,0.4,0.9,-0.1,0.4,0.8,1.2,0.2,0.5,0.7,1.3,0.5,0.3,0.9,0.1,0.6,0.6,0.6,1,0.6,0.7,0.8].map(String),
                textposition: 'auto',
                hoverinfo: 'none',*/
                marker: {
                    color: 'rgb(158,202,225)',
                    opacity: 0.6,
                    line: {
                    color: 'rgb(8,48,107)',
                    width: 1
                    }
                },
                width: 0.2
            };

            var dataGrafo = [ema_chivay_min,co_chivay_min,dif_minimas_chivay];
    
            var layout = {
                title: 'Temperaturas Mínimas - Chivay - Enero 2024',
                showlegend: true,
                legend: {"orientation": "h"}
            };

            var config = {responsive: true}

            Plotly.newPlot($grafoMinimas, dataGrafo, layout, config);

            ////////////////Tablas///////////////////////////
           let [...dias] = data[0].dias,
           [...tempMin_aut_chivay] = data[0].automaticas[0].temperatura_min,
           [...tempMin_co_chivay] = data[0].convencionales[0].temperatura_min;
           
           dias.unshift('');
           tempMin_aut_chivay.unshift('EMA');
           tempMin_co_chivay.unshift('CO');

           const tr=d.createElement('tr'),
           tr_1 = d.createElement('tr'),
           tr_2 = d.createElement('tr');

           dias.forEach(e => {
            const th = d.createElement('th');
            th.innerHTML=e;
            tr.appendChild(th);
            $tabla.querySelector('thead').appendChild(tr);
           });

           tempMin_aut_chivay.forEach(e => {
            const td = d.createElement('td');
            td.innerHTML=e;
            tr_1.appendChild(td);
            $tabla.querySelector('thead').appendChild(tr_1);
           });

           tempMin_co_chivay.forEach(e => {
            const td = d.createElement('td');
            td.innerHTML=e;
            tr_2.appendChild(td);
            $tabla.querySelector('thead').appendChild(tr_2);
           });
         };
     });
};


    
    
   
    

    
 /*  };
   if($seleccion.value=='cotahuasi'){
    var data = [ema_cotahuasi, co_cotahuasi];
    console.log(data);
    var layout = {
    title:'Temperaturas Mínimas - Cotahuasi - Enero 2024'
    };

    Plotly.newPlot($grafoMinimas, data, layout);
   };
   
});*/
