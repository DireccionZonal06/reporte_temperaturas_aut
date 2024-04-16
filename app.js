const d=document,
$seleccion=d.getElementById('seleccion'),
$grafoMinimas=d.getElementById('grafoMinimas'),
$grafoMaximas=d.getElementById('grafoMaximas'),
$tablaMinimas=d.querySelector('.tabla-minimas'),
$tablaMaximas=d.querySelector('.tabla-maximas');


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

const datos = data =>{
    $seleccion.addEventListener('change',()=>{
        if($seleccion.value==='chivay'){
            $tablaMinimas.querySelector('thead').innerHTML='';
            $tablaMaximas.querySelector('thead').innerHTML='';
            
            let ema_min = data[0].automaticas[0].temperatura_min,
            co_min = data[0].convencionales[0].temperatura_min,
            dif_min = data[0].comparaciones[0].temperatura_min,
            ema_max = data[0].automaticas[0].temperatura_max,
            co_max = data[0].convencionales[0].temperatura_max,
            dif_max = data[0].comparaciones[0].temperatura_max,
            nombreEMA = 'EMA Chivay',
            nombreCO = 'CO Chivay',
            stringFecha = data[0].fecha,
            tituloMinimas = `Temp. Mínimas - Chivay - ${stringFecha}`,
            tituloMaximas = `Temp. Máximas - Chivay - ${stringFecha}`,
            dias = data[0].dias;

            grafoTable(ema_min,co_min,dif_min,ema_max,co_max,dif_max,nombreEMA,nombreCO,tituloMinimas,tituloMaximas,dias);
         };
         if($seleccion.value==='crucero'){
            $tablaMinimas.querySelector('thead').innerHTML='';
            $tablaMaximas.querySelector('thead').innerHTML='';
            
            let ema_min = data[0].automaticas[1].temperatura_min,
            co_min = data[0].convencionales[1].temperatura_min,
            dif_min = data[0].comparaciones[1].temperatura_min,
            ema_max = data[0].automaticas[1].temperatura_max,
            co_max = data[0].convencionales[1].temperatura_max,
            dif_max = data[0].comparaciones[1].temperatura_max,
            nombreEMA = 'EMA Crucero Alto',
            nombreCO = 'CO Crucero Alto',
            stringFecha = data[0].fecha,
            tituloMinimas = `Temp. Mínimas - Crucero Alto - ${stringFecha}`,
            tituloMaximas = `Temp. Máximas - Crucero Alto - ${stringFecha}`,
            dias = data[0].dias;

            grafoTable(ema_min,co_min,dif_min,ema_max,co_max,dif_max,nombreEMA,nombreCO,tituloMinimas,tituloMaximas,dias);
         };
         if($seleccion.value==='imata'){
            $tablaMinimas.querySelector('thead').innerHTML='';
            $tablaMaximas.querySelector('thead').innerHTML='';
            
            let ema_min = data[0].automaticas[2].temperatura_min,
            co_min = data[0].convencionales[2].temperatura_min,
            dif_min = data[0].comparaciones[2].temperatura_min,
            ema_max = data[0].automaticas[2].temperatura_max,
            co_max = data[0].convencionales[2].temperatura_max,
            dif_max = data[0].comparaciones[2].temperatura_max,
            nombreEMA = 'EMA Imata',
            nombreCO = 'CO Imata',
            stringFecha = data[0].fecha,
            tituloMinimas = `Temp. Mínimas - Imata - ${stringFecha}`,
            tituloMaximas = `Temp. Máximas - Imata - ${stringFecha}`,
            dias = data[0].dias;

            grafoTable(ema_min,co_min,dif_min,ema_max,co_max,dif_max,nombreEMA,nombreCO,tituloMinimas,tituloMaximas,dias);
         };
         if($seleccion.value==='huanca'){
            $tablaMinimas.querySelector('thead').innerHTML='';
            $tablaMaximas.querySelector('thead').innerHTML='';
            
            let ema_min = data[0].automaticas[3].temperatura_min,
            co_min = data[0].convencionales[3].temperatura_min,
            dif_min = data[0].comparaciones[3].temperatura_min,
            ema_max = data[0].automaticas[3].temperatura_max,
            co_max = data[0].convencionales[3].temperatura_max,
            dif_max = data[0].comparaciones[3].temperatura_max,
            nombreEMA = 'EMA Huanca',
            nombreCO = 'CO Huanca',
            stringFecha = data[0].fecha,
            tituloMinimas = `Temp. Mínimas - Huanca - ${stringFecha}`,
            tituloMaximas = `Temp. Máximas - Huanca - ${stringFecha}`,
            dias = data[0].dias;

            grafoTable(ema_min,co_min,dif_min,ema_max,co_max,dif_max,nombreEMA,nombreCO,tituloMinimas,tituloMaximas,dias);
         };
         if($seleccion.value==='majes'){
            $tablaMinimas.querySelector('thead').innerHTML='';
            $tablaMaximas.querySelector('thead').innerHTML='';
            
            let ema_min = data[0].automaticas[4].temperatura_min,
            co_min = data[0].convencionales[4].temperatura_min,
            dif_min = data[0].comparaciones[4].temperatura_min,
            ema_max = data[0].automaticas[4].temperatura_max,
            co_max = data[0].convencionales[4].temperatura_max,
            dif_max = data[0].comparaciones[4].temperatura_max,
            nombreEMA = 'EMA Pampa De Majes',
            nombreCO = 'CO Pampa De Majes',
            stringFecha = data[0].fecha,
            tituloMinimas = `Temp. Mínimas - Pampa de Majes - ${stringFecha}`,
            tituloMaximas = `Temp. Máximas - Pampa de Majes - ${stringFecha}`,
            dias = data[0].dias;

            grafoTable(ema_min,co_min,dif_min,ema_max,co_max,dif_max,nombreEMA,nombreCO,tituloMinimas,tituloMaximas,dias);
         };
         if($seleccion.value==='cotahuasi'){
            $tablaMinimas.querySelector('thead').innerHTML='';
            $tablaMaximas.querySelector('thead').innerHTML='';
            
            let ema_min = data[0].automaticas[5].temperatura_min,
            co_min = data[0].convencionales[5].temperatura_min,
            dif_min = data[0].comparaciones[5].temperatura_min,
            ema_max = data[0].automaticas[5].temperatura_max,
            co_max = data[0].convencionales[5].temperatura_max,
            dif_max = data[0].comparaciones[5].temperatura_max,
            nombreEMA = 'EMA Cotahuasi',
            nombreCO = 'CO Cotahuasi',
            stringFecha = data[0].fecha,
            tituloMinimas = `Temp. Mínimas - Cotahuasi - ${stringFecha}`,
            tituloMaximas = `Temp. Máximas - Cotahuasi - ${stringFecha}`,
            dias = data[0].dias;

            grafoTable(ema_min,co_min,dif_min,ema_max,co_max,dif_max,nombreEMA,nombreCO,tituloMinimas,tituloMaximas,dias);
         };
         if($seleccion.value==='pampilla'){
            $tablaMinimas.querySelector('thead').innerHTML='';
            $tablaMaximas.querySelector('thead').innerHTML='';
            
            let ema_min = data[0].automaticas[6].temperatura_min,
            co_min = data[0].convencionales[6].temperatura_min,
            dif_min = data[0].comparaciones[6].temperatura_min,
            ema_max = data[0].automaticas[6].temperatura_max,
            co_max = data[0].convencionales[6].temperatura_max,
            dif_max = data[0].comparaciones[6].temperatura_max,
            nombreEMA = 'EMA La Pampilla',
            nombreCO = 'MAP La Pampilla',
            stringFecha = data[0].fecha,
            tituloMinimas = `Temp. Mínimas - La Pampilla - ${stringFecha}`,
            tituloMaximas = `Temp. Máximas - La Pampilla - ${stringFecha}`,
            dias = data[0].dias;

            grafoTable(ema_min,co_min,dif_min,ema_max,co_max,dif_max,nombreEMA,nombreCO,tituloMinimas,tituloMaximas,dias);
         };
         if($seleccion.value==='patahuasi'){
            $tablaMinimas.querySelector('thead').innerHTML='';
            $tablaMaximas.querySelector('thead').innerHTML='';
            
            let ema_min = data[0].automaticas[7].temperatura_min,
            co_min = data[0].convencionales[7].temperatura_min,
            dif_min = data[0].comparaciones[7].temperatura_min,
            ema_max = data[0].automaticas[7].temperatura_max,
            co_max = data[0].convencionales[7].temperatura_max,
            dif_max = data[0].comparaciones[7].temperatura_max,
            nombreEMA = 'EMA Patahuasi',
            nombreCO = 'CO Patahuasi',
            stringFecha = data[0].fecha,
            tituloMinimas = `Temp. Mínimas - Patahuasi - ${stringFecha}`,
            tituloMaximas = `Temp. Máximas - Patahuasi - ${stringFecha}`,
            dias = data[0].dias;

            grafoTable(ema_min,co_min,dif_min,ema_max,co_max,dif_max,nombreEMA,nombreCO,tituloMinimas,tituloMaximas,dias);
         };
         if($seleccion.value==='yura'){
            $tablaMinimas.querySelector('thead').innerHTML='';
            $tablaMaximas.querySelector('thead').innerHTML='';
            
            let ema_min = data[0].automaticas[8].temperatura_min,
            co_min = data[0].convencionales[8].temperatura_min,
            dif_min = data[0].comparaciones[8].temperatura_min,
            ema_max = data[0].automaticas[8].temperatura_max,
            co_max = data[0].convencionales[8].temperatura_max,
            dif_max = data[0].comparaciones[8].temperatura_max,
            nombreEMA = 'EPA Yura',
            nombreCO = 'CO Yura',
            stringFecha = data[0].fecha,
            tituloMinimas = `Temp. Mínimas - Yura - ${stringFecha}`,
            tituloMaximas = `Temp. Máximas - Yura - ${stringFecha}`,
            dias = data[0].dias;

            grafoTable(ema_min,co_min,dif_min,ema_max,co_max,dif_max,nombreEMA,nombreCO,tituloMinimas,tituloMaximas,dias);
         };
         if($seleccion.value==='tuctumpaya'){
            $tablaMinimas.querySelector('thead').innerHTML='';
            $tablaMaximas.querySelector('thead').innerHTML='';
            
            let ema_min = data[0].automaticas[9].temperatura_min,
            co_min = data[0].convencionales[9].temperatura_min,
            dif_min = data[0].comparaciones[9].temperatura_min,
            ema_max = data[0].automaticas[9].temperatura_max,
            co_max = data[0].convencionales[9].temperatura_max,
            dif_max = data[0].comparaciones[9].temperatura_max,
            nombreEMA = 'EPA Tuctumpaya',
            nombreCO = 'CO Tuctumpaya',
            stringFecha = data[0].fecha,
            tituloMinimas = `Temp. Mínimas - Tuctumpaya - ${stringFecha}`,
            tituloMaximas = `Temp. Máximas - Tuctumpaya - ${stringFecha}`,
            dias = data[0].dias;

            grafoTable(ema_min,co_min,dif_min,ema_max,co_max,dif_max,nombreEMA,nombreCO,tituloMinimas,tituloMaximas,dias);
         };
         if($seleccion.value==='uzuna'){
            $tablaMinimas.querySelector('thead').innerHTML='';
            $tablaMaximas.querySelector('thead').innerHTML='';
            
            let ema_min = data[0].automaticas[10].temperatura_min,
            co_min = data[0].convencionales[10].temperatura_min,
            dif_min = data[0].comparaciones[10].temperatura_min,
            ema_max = data[0].automaticas[10].temperatura_max,
            co_max = data[0].convencionales[10].temperatura_max,
            dif_max = data[0].comparaciones[10].temperatura_max,
            nombreEMA = 'EMA SAN JOSE UZUNA',
            nombreCO = 'CO SAN JOSE UZUNA',
            stringFecha = data[0].fecha,
            tituloMinimas = `Temp. Mínimas - San José Uzuna - ${stringFecha}`,
            tituloMaximas = `Temp. Máximas - San José Uzuna - ${stringFecha}`,
            dias = data[0].dias;

            grafoTable(ema_min,co_min,dif_min,ema_max,co_max,dif_max,nombreEMA,nombreCO,tituloMinimas,tituloMaximas,dias);
         };
         if($seleccion.value==='ocona'){
            $tablaMinimas.querySelector('thead').innerHTML='';
            $tablaMaximas.querySelector('thead').innerHTML='';
            
            let ema_min = data[0].automaticas[11].temperatura_min,
            co_min = data[0].convencionales[11].temperatura_min,
            dif_min = data[0].comparaciones[11].temperatura_min,
            ema_max = data[0].automaticas[11].temperatura_max,
            co_max = data[0].convencionales[11].temperatura_max,
            dif_max = data[0].comparaciones[11].temperatura_max,
            nombreEMA = 'EMA OCOÑA',
            nombreCO = 'CO OCOÑA',
            stringFecha = data[0].fecha,
            tituloMinimas = `Temp. Mínimas - Ocoña - ${stringFecha}`,
            tituloMaximas = `Temp. Máximas - Ocoña - ${stringFecha}`,
            dias = data[0].dias;

            grafoTable(ema_min,co_min,dif_min,ema_max,co_max,dif_max,nombreEMA,nombreCO,tituloMinimas,tituloMaximas,dias);
         };
         if($seleccion.value==='cota'){
            $tablaMinimas.querySelector('thead').innerHTML='';
            $tablaMaximas.querySelector('thead').innerHTML='';
            
            let ema_min = data[0].automaticas[12].temperatura_min,
            co_min = data[0].convencionales[12].temperatura_min,
            dif_min = data[0].comparaciones[12].temperatura_min,
            ema_max = data[0].automaticas[12].temperatura_max,
            co_max = data[0].convencionales[12].temperatura_max,
            dif_max = data[0].comparaciones[12].temperatura_max,
            nombreEMA = 'EMA COTA COTA',
            nombreCO = 'CO COTA COTA',
            stringFecha = data[0].fecha,
            tituloMinimas = `Temp. Mínimas - Cota Cota - ${stringFecha}`,
            tituloMaximas = `Temp. Máximas - Cota Cota - ${stringFecha}`,
            dias = data[0].dias;

            grafoTable(ema_min,co_min,dif_min,ema_max,co_max,dif_max,nombreEMA,nombreCO,tituloMinimas,tituloMaximas,dias);
         };
     });
};

/////FUNCION GRAFO Y TABLAS

const grafoTable = (ema_min,co_min,dif_min,ema_max,co_max,dif_max,nombreEMA,nombreCO,tituloMinimas,tituloMaximas,dias) =>{
    /*MÍNIMA AUT*/
    var emaMin = {
        x: dias,
        y: ema_min,
        name: nombreEMA,
        type: 'lines+markerS',
    };
    /*MINIMAS CO*/
    var coMin = {
        x: dias,
        y: co_min,
        name: nombreCO,
        type: 'lines+markerS'
    };
    /*DIFERENCIAS MINIMAS*/
    var difMinimas = {
        x: dias,
        y: dif_min,
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

    var dataGrafo = [emaMin,coMin,difMinimas];

    var layout = {
        title: tituloMinimas,
        showlegend: true,
        legend: {"orientation": "h"},
        paper_bgcolor: '#FFFFFF',
        plot_bgcolor: '#FFFFFF'
    };

    var config = {responsive: true}

    Plotly.newPlot($grafoMinimas, dataGrafo, layout, config);

    ////////////////Tablas///////////////////////////
   let [...diasMes] = dias,
   [...tempMin_aut] = ema_min,
   [...tempMin_co] = co_min,
   [...tempMin_comparaciones] = dif_min;
   
   diasMes.unshift('');
   tempMin_aut.unshift('EMA');
   tempMin_co.unshift('CO');
   tempMin_comparaciones.unshift('Comp.')

   const tr=d.createElement('tr'),
   tr_1 = d.createElement('tr'),
   tr_2 = d.createElement('tr'),
   tr_3 = d.createElement('tr');

   diasMes.forEach(e => {
    const th = d.createElement('th');
    th.innerHTML=e;
    tr.appendChild(th);
    $tablaMinimas.querySelector('thead').appendChild(tr);
   });

   tempMin_aut.forEach(e => {
    const td = d.createElement('td');
    td.innerHTML=e;
    tr_1.appendChild(td);
    $tablaMinimas.querySelector('thead').appendChild(tr_1);
   });

   tempMin_co.forEach(e => {
    const td = d.createElement('td');
    td.innerHTML=e;
    tr_2.appendChild(td);
    $tablaMinimas.querySelector('thead').appendChild(tr_2);
   });

   tempMin_comparaciones.forEach(e => {
    const td = d.createElement('td');
    td.innerHTML=e;
    tr_3.appendChild(td);
    $tablaMinimas.querySelector('thead').appendChild(tr_3);
   });
//////////////////////////////////////////////
   /*MÁXIMA AUT*/
    var emaMax = {
        x: dias,
        y: ema_max,
        name: nombreEMA,
        type: 'lines+markerS',
    };
    /*MÁXIMA CO*/
    var coMax = {
        x: dias,
        y: co_max,
        name: nombreCO,
        type: 'lines+markerS'
    };
    /*DIFERENCIAS MAXIMAS*/
    var difMaximas = {
        x: dias,
        y: dif_max,
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

    var dataGrafo = [emaMax,coMax,difMaximas];

    var layout = {
        title: tituloMaximas,
        showlegend: true,
        legend: {"orientation": "h"}
    };

    var config = {responsive: true}

    Plotly.newPlot($grafoMaximas, dataGrafo, layout, config);

    ////////////////Tablas///////////////////////////
   let [...tempMax_aut] = ema_max,
   [...tempMax_co] = co_max,
   [...tempMax_comparaciones] = dif_max;
   
   tempMax_aut.unshift('EMA');
   tempMax_co.unshift('CO');
   tempMax_comparaciones.unshift('Comp.')

   const tr_4=d.createElement('tr'),
   tr_5 = d.createElement('tr'),
   tr_6 = d.createElement('tr'),
   tr_7 = d.createElement('tr');

   diasMes.forEach(e => {
    const th = d.createElement('th');
    th.innerHTML=e;
    tr_4.appendChild(th);
    $tablaMaximas.querySelector('thead').appendChild(tr_4);
   });

   tempMax_aut.forEach(e => {
    const td = d.createElement('td');
    td.innerHTML=e;
    tr_5.appendChild(td);
    $tablaMaximas.querySelector('thead').appendChild(tr_5);
   });

   tempMax_co.forEach(e => {
    const td = d.createElement('td');
    td.innerHTML=e;
    tr_6.appendChild(td);
    $tablaMaximas.querySelector('thead').appendChild(tr_6);
   });

   tempMax_comparaciones.forEach(e => {
    const td = d.createElement('td');
    td.innerHTML=e;
    tr_7.appendChild(td);
    $tablaMaximas.querySelector('thead').appendChild(tr_7);
   });
};


    
    
   
    

    
 
