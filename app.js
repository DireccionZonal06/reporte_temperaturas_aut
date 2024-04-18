const d=document,
$seleccion=d.getElementById('seleccion'),
$grafoMinimas=d.getElementById('grafoMinimas'),
$grafoMaximas=d.getElementById('grafoMaximas'),
$tablaMinimas=d.querySelector('.tabla-minimas'),
$tablaMaximas=d.querySelector('.tabla-maximas'),
$filaMinimas=d.querySelector('.fila-minimas'),
$filaMaximas=d.querySelector('.fila-maximas'),
$tituloMinimas=d.getElementById('titulo-min'),
$tituloMaximas=d.getElementById('titulo-max');


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
        $filaMinimas.style.backgroundColor='#3d4074';
        $filaMaximas.style.backgroundColor='#3d4074';
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
         if($seleccion.value==='estaciones'){
            $tablaMinimas.querySelector('thead').innerHTML='';
            $tablaMaximas.querySelector('thead').innerHTML='';
            $grafoMinimas.innerHTML="";
            $grafoMaximas.innerHTML="";
            
            let ema_min_chivay = data[0].automaticas[0].temperatura_min,
            ema_min_crucero = data[0].automaticas[1].temperatura_min,
            ema_min_imata = data[0].automaticas[2].temperatura_min,
            ema_min_huanca = data[0].automaticas[3].temperatura_min,
            ema_min_majes = data[0].automaticas[4].temperatura_min,
            ema_min_cotahuasi = data[0].automaticas[5].temperatura_min,
            ema_min_pampilla = data[0].automaticas[6].temperatura_min,
            ema_min_patahuasi = data[0].automaticas[7].temperatura_min,
            ema_min_yura = data[0].automaticas[8].temperatura_min,
            ema_min_tuctumpaya = data[0].automaticas[9].temperatura_min,
            ema_min_uzuna = data[0].automaticas[10].temperatura_min,
            ema_min_ocona = data[0].automaticas[11].temperatura_min,
            ema_min_cota = data[0].automaticas[12].temperatura_min,
            ema_max_chivay = data[0].automaticas[0].temperatura_max,
            ema_max_crucero = data[0].automaticas[1].temperatura_max,
            ema_max_imata = data[0].automaticas[2].temperatura_max,
            ema_max_huanca = data[0].automaticas[3].temperatura_max,
            ema_max_majes = data[0].automaticas[4].temperatura_max,
            ema_max_cotahuasi = data[0].automaticas[5].temperatura_max,
            ema_max_pampilla = data[0].automaticas[6].temperatura_max,
            ema_max_patahuasi = data[0].automaticas[7].temperatura_max,
            ema_max_yura = data[0].automaticas[8].temperatura_max,
            ema_max_tuctumpaya = data[0].automaticas[9].temperatura_max,
            ema_max_uzuna = data[0].automaticas[10].temperatura_max,
            ema_max_ocona = data[0].automaticas[11].temperatura_max,
            ema_max_cota = data[0].automaticas[12].temperatura_max,
            ema_nombre_chivay = data[0].automaticas[0].estacion,
            ema_nombre_crucero = data[0].automaticas[1].estacion,
            ema_nombre_imata = data[0].automaticas[2].estacion,
            ema_nombre_huanca = data[0].automaticas[3].estacion,
            ema_nombre_majes = data[0].automaticas[4].estacion,
            ema_nombre_cotahuasi = data[0].automaticas[5].estacion,
            ema_nombre_pampilla = data[0].automaticas[6].estacion,
            ema_nombre_patahuasi = data[0].automaticas[7].estacion,
            ema_nombre_yura = data[0].automaticas[8].estacion,
            ema_nombre_tuctumpaya = data[0].automaticas[9].estacion,
            ema_nombre_uzuna = data[0].automaticas[10].estacion,
            ema_nombre_ocona = data[0].automaticas[11].estacion,
            ema_nombre_cota = data[0].automaticas[12].estacion,
                        
            stringFecha = data[0].fecha,
            tituloMinimas = `Temperaturas Mínimas - ${stringFecha}`,
            tituloMaximas = `Temperaturas Máximas - ${stringFecha}`,
            dias = data[0].dias;

            grafoTableTotal(ema_min_chivay,ema_min_crucero,ema_min_imata,ema_min_huanca,ema_min_majes,ema_min_cotahuasi,ema_min_pampilla,ema_min_patahuasi,ema_min_yura,ema_min_tuctumpaya,ema_min_uzuna,ema_min_ocona,ema_min_cota,ema_max_chivay,ema_max_crucero,ema_max_imata,ema_max_huanca,ema_max_majes,ema_max_cotahuasi,ema_max_pampilla,ema_max_patahuasi,ema_max_yura,ema_max_tuctumpaya,ema_max_uzuna,ema_max_ocona,ema_max_cota,ema_nombre_chivay,ema_nombre_crucero,ema_nombre_imata,ema_nombre_huanca,ema_nombre_majes,ema_nombre_cotahuasi,ema_nombre_pampilla,ema_nombre_patahuasi,ema_nombre_yura,ema_nombre_tuctumpaya,ema_nombre_uzuna,ema_nombre_ocona,ema_nombre_cota,tituloMinimas,tituloMaximas,dias);
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


 
const grafoTableTotal=(ema_min_chivay,ema_min_crucero,ema_min_imata,ema_min_huanca,ema_min_majes,ema_min_cotahuasi,ema_min_pampilla,ema_min_patahuasi,ema_min_yura,ema_min_tuctumpaya,ema_min_uzuna,ema_min_ocona,ema_min_cota,ema_max_chivay,ema_max_crucero,ema_max_imata,ema_max_huanca,ema_max_majes,ema_max_cotahuasi,ema_max_pampilla,ema_max_patahuasi,ema_max_yura,ema_max_tuctumpaya,ema_max_uzuna,ema_max_ocona,ema_max_cota,ema_nombre_chivay,ema_nombre_crucero,ema_nombre_imata,ema_nombre_huanca,ema_nombre_majes,ema_nombre_cotahuasi,ema_nombre_pampilla,ema_nombre_patahuasi,ema_nombre_yura,ema_nombre_tuctumpaya,ema_nombre_uzuna,ema_nombre_ocona,ema_nombre_cota,tituloMinimas,tituloMaximas,dias)=>{
   ////////Temperaturas Minimas
    let [...diasMes] = dias, 
   [...tempMin_chivay] = ema_min_chivay,
   [...tempMin_crucero] = ema_min_crucero,
   [...tempMin_imata] = ema_min_imata,
   [...tempMin_huanca] = ema_min_huanca,
   [...tempMin_majes] = ema_min_majes,
   [...tempMin_cotahuasi] = ema_min_cotahuasi,
   [...tempMin_pampilla] = ema_min_pampilla,
   [...tempMin_patahuasi] = ema_min_patahuasi,
   [...tempMin_yura] = ema_min_yura,
   [...tempMin_tuctumpaya] = ema_min_tuctumpaya,
   [...tempMin_uzuna] = ema_min_uzuna,
   [...tempMin_ocona] = ema_min_ocona,
   [...tempMin_cota] = ema_min_cota;
   
   diasMes.unshift('');
   tempMin_chivay.unshift(ema_nombre_chivay);
   tempMin_crucero.unshift(ema_nombre_crucero);
   tempMin_imata.unshift(ema_nombre_imata);
   tempMin_huanca.unshift(ema_nombre_huanca);
   tempMin_majes.unshift(ema_nombre_majes);
   tempMin_cotahuasi.unshift(ema_nombre_cotahuasi);
   tempMin_pampilla.unshift(ema_nombre_pampilla);
   tempMin_patahuasi.unshift(ema_nombre_patahuasi);
   tempMin_yura.unshift(ema_nombre_yura);
   tempMin_tuctumpaya.unshift(ema_nombre_tuctumpaya);
   tempMin_uzuna.unshift(ema_nombre_uzuna);
   tempMin_ocona.unshift(ema_nombre_ocona);
   tempMin_cota.unshift(ema_nombre_cota);

   const tr_8=d.createElement('tr'),
   tr_9 = d.createElement('tr'),
   tr_10 = d.createElement('tr'),
   tr_11 = d.createElement('tr'),
   tr_12 = d.createElement('tr'),
   tr_13 = d.createElement('tr'),
   tr_14 = d.createElement('tr'),
   tr_15 = d.createElement('tr'),
   tr_16 = d.createElement('tr'),
   tr_17 = d.createElement('tr'),
   tr_18 = d.createElement('tr'),
   tr_19 = d.createElement('tr'),
   tr_20 = d.createElement('tr'),
   tr_21 = d.createElement('tr');

   $tituloMinimas.innerHTML=tituloMinimas

   diasMes.forEach(e => {
    const th = d.createElement('th');
    th.innerHTML=e;
    tr_8.appendChild(th);
    $tablaMinimas.querySelector('thead').appendChild(tr_8);
   });

   tempMin_chivay.forEach(e => {
    const td = d.createElement('td');
    td.innerHTML=e;
    tr_9.appendChild(td);
    $tablaMinimas.querySelector('thead').appendChild(tr_9);
   });

   tempMin_crucero.forEach(e => {
    const td = d.createElement('td');
    td.innerHTML=e;
    tr_10.appendChild(td);
    $tablaMinimas.querySelector('thead').appendChild(tr_10);
   });

   tempMin_imata.forEach(e => {
    const td = d.createElement('td');
    td.innerHTML=e;
    tr_11.appendChild(td);
    $tablaMinimas.querySelector('thead').appendChild(tr_11);
   });

   tempMin_huanca.forEach(e => {
    const td = d.createElement('td');
    td.innerHTML=e;
    tr_12.appendChild(td);
    $tablaMinimas.querySelector('thead').appendChild(tr_12);
   });

   tempMin_majes.forEach(e => {
    const td = d.createElement('td');
    td.innerHTML=e;
    tr_13.appendChild(td);
    $tablaMinimas.querySelector('thead').appendChild(tr_13);
   });

   tempMin_cotahuasi.forEach(e => {
      const td = d.createElement('td');
      td.innerHTML=e;
      tr_14.appendChild(td);
      $tablaMinimas.querySelector('thead').appendChild(tr_14);
   });
   
   tempMin_pampilla.forEach(e => {
      const td = d.createElement('td');
      td.innerHTML=e;
      tr_15.appendChild(td);
      $tablaMinimas.querySelector('thead').appendChild(tr_15);
   });

   tempMin_patahuasi.forEach(e => {
      const td = d.createElement('td');
      td.innerHTML=e;
      tr_16.appendChild(td);
      $tablaMinimas.querySelector('thead').appendChild(tr_16);
   });

   tempMin_yura.forEach(e => {
      const td = d.createElement('td');
      td.innerHTML=e;
      tr_17.appendChild(td);
      $tablaMinimas.querySelector('thead').appendChild(tr_17);
   });

   tempMin_tuctumpaya.forEach(e => {
      const td = d.createElement('td');
      td.innerHTML=e;
      tr_18.appendChild(td);
      $tablaMinimas.querySelector('thead').appendChild(tr_18);
   });

   tempMin_uzuna.forEach(e => {
      const td = d.createElement('td');
      td.innerHTML=e;
      tr_19.appendChild(td);
      $tablaMinimas.querySelector('thead').appendChild(tr_19);
   });

   tempMin_ocona.forEach(e => {
      const td = d.createElement('td');
      td.innerHTML=e;
      tr_20.appendChild(td);
      $tablaMinimas.querySelector('thead').appendChild(tr_20);
   });

   tempMin_cota.forEach(e => {
      const td = d.createElement('td');
      td.innerHTML=e;
      tr_21.appendChild(td);
      $tablaMinimas.querySelector('thead').appendChild(tr_21);
   });

   ////////Temperaturas Maximas
   let [...tempMax_chivay] = ema_max_chivay,
   [...tempMax_crucero] = ema_max_crucero,
   [...tempMax_imata] = ema_max_imata,
   [...tempMax_huanca] = ema_max_huanca,
   [...tempMax_majes] = ema_max_majes,
   [...tempMax_cotahuasi] = ema_max_cotahuasi,
   [...tempMax_pampilla] = ema_max_pampilla,
   [...tempMax_patahuasi] = ema_max_patahuasi,
   [...tempMax_yura] = ema_max_yura,
   [...tempMax_tuctumpaya] = ema_max_tuctumpaya,
   [...tempMax_uzuna] = ema_max_uzuna,
   [...tempMax_ocona] = ema_max_ocona,
   [...tempMax_cota] = ema_max_cota;
   
   tempMax_chivay.unshift(ema_nombre_chivay);
   tempMax_crucero.unshift(ema_nombre_crucero);
   tempMax_imata.unshift(ema_nombre_imata);
   tempMax_huanca.unshift(ema_nombre_huanca);
   tempMax_majes.unshift(ema_nombre_majes);
   tempMax_cotahuasi.unshift(ema_nombre_cotahuasi);
   tempMax_pampilla.unshift(ema_nombre_pampilla);
   tempMax_patahuasi.unshift(ema_nombre_patahuasi);
   tempMax_yura.unshift(ema_nombre_yura);
   tempMax_tuctumpaya.unshift(ema_nombre_tuctumpaya);
   tempMax_uzuna.unshift(ema_nombre_uzuna);
   tempMax_ocona.unshift(ema_nombre_ocona);
   tempMax_cota.unshift(ema_nombre_cota);

   const tr_22=d.createElement('tr'),
   tr_23 = d.createElement('tr'),
   tr_24 = d.createElement('tr'),
   tr_25 = d.createElement('tr'),
   tr_26 = d.createElement('tr'),
   tr_27 = d.createElement('tr'),
   tr_28 = d.createElement('tr'),
   tr_29 = d.createElement('tr'),
   tr_30 = d.createElement('tr'),
   tr_31 = d.createElement('tr'),
   tr_32 = d.createElement('tr'),
   tr_33 = d.createElement('tr'),
   tr_34 = d.createElement('tr'),
   tr_35 = d.createElement('tr');

   $tituloMaximas.innerHTML=tituloMaximas

   diasMes.forEach(e => {
    const th = d.createElement('th');
    th.innerHTML=e;
    tr_22.appendChild(th);
    $tablaMaximas.querySelector('thead').appendChild(tr_22);
   });

   tempMax_chivay.forEach(e => {
    const td = d.createElement('td');
    td.innerHTML=e;
    tr_23.appendChild(td);
    $tablaMaximas.querySelector('thead').appendChild(tr_23);
   });

   tempMax_crucero.forEach(e => {
    const td = d.createElement('td');
    td.innerHTML=e;
    tr_24.appendChild(td);
    $tablaMaximas.querySelector('thead').appendChild(tr_24);
   });

   tempMax_imata.forEach(e => {
    const td = d.createElement('td');
    td.innerHTML=e;
    tr_25.appendChild(td);
    $tablaMaximas.querySelector('thead').appendChild(tr_25);
   });

   tempMax_huanca.forEach(e => {
    const td = d.createElement('td');
    td.innerHTML=e;
    tr_26.appendChild(td);
    $tablaMaximas.querySelector('thead').appendChild(tr_26);
   });

   tempMax_majes.forEach(e => {
    const td = d.createElement('td');
    td.innerHTML=e;
    tr_27.appendChild(td);
    $tablaMaximas.querySelector('thead').appendChild(tr_27);
   });

   tempMax_cotahuasi.forEach(e => {
      const td = d.createElement('td');
      td.innerHTML=e;
      tr_28.appendChild(td);
      $tablaMaximas.querySelector('thead').appendChild(tr_28);
   });
   
   tempMax_pampilla.forEach(e => {
      const td = d.createElement('td');
      td.innerHTML=e;
      tr_29.appendChild(td);
      $tablaMaximas.querySelector('thead').appendChild(tr_29);
   });

   tempMax_patahuasi.forEach(e => {
      const td = d.createElement('td');
      td.innerHTML=e;
      tr_30.appendChild(td);
      $tablaMaximas.querySelector('thead').appendChild(tr_30);
   });

   tempMax_yura.forEach(e => {
      const td = d.createElement('td');
      td.innerHTML=e;
      tr_31.appendChild(td);
      $tablaMaximas.querySelector('thead').appendChild(tr_31);
   });

   tempMax_tuctumpaya.forEach(e => {
      const td = d.createElement('td');
      td.innerHTML=e;
      tr_32.appendChild(td);
      $tablaMaximas.querySelector('thead').appendChild(tr_32);
   });

   tempMax_uzuna.forEach(e => {
      const td = d.createElement('td');
      td.innerHTML=e;
      tr_33.appendChild(td);
      $tablaMaximas.querySelector('thead').appendChild(tr_33);
   });

   tempMax_ocona.forEach(e => {
      const td = d.createElement('td');
      td.innerHTML=e;
      tr_34.appendChild(td);
      $tablaMaximas.querySelector('thead').appendChild(tr_34);
   });

   tempMax_cota.forEach(e => {
      const td = d.createElement('td');
      td.innerHTML=e;
      tr_35.appendChild(td);
      $tablaMaximas.querySelector('thead').appendChild(tr_35);
   });
}
    
   
    

    
 
