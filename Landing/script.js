function sale() {
    let saleDate = new Date(2024, 8, 25)
    let currentDate= new Date()
    let date = saleDate-currentDate
    let day = Math.floor (date/(24+60*60*1000));
    let hours = Math.floor ((date%(24+60*60*1000))/(60*1000*60))
    let minuts = Math.floor((date%(60*60*1000))/(60*1000))
    let seconds = Math.floor((date%(60*1000))/1000)
    let timeValue= document.getElementsByClassName("date")
    temiValue[0].innerHTML=day
    temiValue[1].innerHTML=hours
    temiValue[2].innerHTML=minuts
    temiValue[3].innerHTML=second

}
