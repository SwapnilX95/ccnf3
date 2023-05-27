
let response = fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`)


response.then((data) => {

    let prom = data.json();

    prom.then((finalData) =>{
        console.log(finalData)
        appendOntoWebPage(finalData)
    })

    prom.catch((finalData) =>{
        console.log("Something went wrong")
    })
})

response.catch((data) =>{
    console.log("Something went wrong")
})

let currencies = document.getElementById("input-table")

function appendOntoWebPage(arr){
    
    for(let i = 0; i < arr.length; i++){

        let newRow = document.createElement("tr")
             
        let col1 = document.createElement("td")
        let Image = document.createElement("img")
        Image.src = arr[i].image;
        Image.className = "image"
        col1.append(Image)
        newRow.append(col1);

        let col2 = document.createElement("td")
        col2.innerText = arr[i].name
        newRow.append(col2);

        let col3 = document.createElement("td")
        col3.innerText = arr[i].symbol
        col3.className = "symbol"
        newRow.append(col3);

        let col4 = document.createElement("td")
        col4.innerText = "$"+arr[i].current_price
        newRow.append(col4);

        let col5 = document.createElement("td")
        col5.innerText = "$"+arr[i].total_volume
        newRow.append(col5);

        let col6 = document.createElement("td")
        let priceChanged = arr[i].market_cap_change_percentage_24h
        if(priceChanged < 0 ){
            col6.className = "red"
        }else{
            col6.className = "green"
        }
        col6.innerText = priceChanged+"%"
        newRow.append(col6);

        let col7 = document.createElement("td")
        col7.innerText = "Mkt Cap :$"+arr[i].market_cap
        newRow.append(col7);

        currencies.append(newRow);

    }

}