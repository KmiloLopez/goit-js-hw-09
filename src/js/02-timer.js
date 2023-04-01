// Descrito en la documentación
import flatpickr from "flatpickr";
// Importación adicional de estilos
import "flatpickr/dist/flatpickr.min.css";

/* const dateSelected = document.getElementById('datetime-picker') */
/* const selectDate = document.querySelector('input') */


let selectedDate
let timeCounter=0
let todaysDate=new Date().getTime()
const values=document.getElementsByClassName('value')
const startButton= document.querySelector('button')
const options = {
  
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  onClose(selectedDates,defaultDate) {
    console.log("dia seleccionado",selectedDates[0].getTime());
    selectedDate= selectedDates[0].getTime()
/*     console.log("defaultDate",defaultDate, "dia seleccionado", selectedDates[0]);
 */    
      if(todaysDate>selectedDates[0].getTime()){
        alert("Please choose a date in the future")
    }  
    if(todaysDate<selectedDates[0].getTime()){
       startButton.disabled=false 
    }
    
  },
};
flatpickr("#datetime-picker", options);



  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

/*   selectDate= addEventListener('click',()=>{
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    
  }); */
  startButton.disabled=true 
  startButton.addEventListener('click', activateCounter)
  function activateCounter(){
    let countDownTempo = setInterval(() => {
      let todaytimeinMiliseg =new Date().getTime()
      /* console.log(options.selectedDates[0].getTime()) */
      /* console.log(options.selectedDate.getTime())  */
      console.log(todaytimeinMiliseg)
      console.log(selectedDate)
      if(todaytimeinMiliseg>selectedDate){
        // console.log("seleccione otra fech")
        alert("TIME's UP! Please refresh the site to enter a new date")

      }
      else{
        /* startButton.disabled=true */
        console.log(selectedDate-todaytimeinMiliseg)
         let difFerence=selectedDate-todaytimeinMiliseg
        /* console.log(convertMs(difFerence));  */
        timeCounter=convertMs(difFerence)
        /* console.log("1111111111111111",timeCounter) */
        values[0].textContent=timeCounter.days
        values[1].textContent=timeCounter.hours
        values[2].textContent=timeCounter.minutes
        values[3].textContent=timeCounter.seconds
      }
    }, 1000);
    
  }
  

 

  