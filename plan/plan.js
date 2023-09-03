let hideIds =["hide1","hide2","hide3"]
let monthlyPrices =["monthly-price1","monthly-price2","monthly-price3"]
let yearlyPrices =["yearly-price1","yearly-price2","yearly-price3"]

const checkbox = document.getElementById("switch")

hideIds.forEach(function(hideId){
        let hideElement = document.getElementById(hideId)
        checkbox.addEventListener("click", function(){
                hideElement.classList.toggle("hidden")
        })
})  

monthlyPrices.forEach(function(month){
        let monthElement = document.getElementById(month)
        checkbox.addEventListener("click", function(){
                monthElement.classList.toggle("hidden")
        })
})

yearlyPrices.forEach(function(year){
        let yearElement = document.getElementById(year)
        checkbox.addEventListener("click", function(){
                yearElement.classList.toggle("hidden")
        })
})