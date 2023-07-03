function mykey(event){
    var x=event.code
    if(x=="enter"){
        search()
    }
}

function search(Cdata){
    city=cit.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5fe36b192ffd1c36dffb6752bc1722b2`).then(data => data.json()).then(data => search(data))
    //dat.innerHTML=Date()

    
    cityname=Cdata.name
    country=Cdata.sys.country
    humidity=Cdata.main.humidity
    wind1=Cdata.wind.speed
    pressure1=Cdata.main.pressure
    temp1=Cdata.main.temp
    c1.innerHTML=`<p>${cityname}</p>`
    co.innerHTML=`<p>${country}</p>`

    hu.innerHTML=`<p>${humidity}</p>`

    wi.innerHTML=`<p>${wind1}</p>`

    pr.innerHTML=`<p>${pressure1}</p>`

    te.innerHTML=`<p>${temp1}</p>`}


    function clear(){
        cit.value= ""
        c1.innerHTML=""
        co.innerHTML=""
        hu.innerHTML=""
        wi.innerHTML=""
        pr.innerHTML=""
        te.innerHTML=""
    }



    

    
