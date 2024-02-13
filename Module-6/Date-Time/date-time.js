function getDate(){
    let date = document.getElementById('date');
    console.log(date.value)
    let newDate = new Date;
    let data = newDate.getSeconds();
    let time = newDate.toDateString();
    console.log(time);
}
// new Date;