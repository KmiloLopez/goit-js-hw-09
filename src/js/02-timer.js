// Descrito en la documentación
import flatpickr from "flatpickr";
// Importación adicional de estilos
import "flatpickr/dist/flatpickr.min.css";

/* const dateSelected = document.getElementById('datetime-picker') */
/* const selectDate = document.querySelector('input') */
let selectedDate
const startButton= document.querySelector('button')
const options = {
  
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log("dia seleccionado",selectedDates[0].getTime());
    selectedDate= selectedDates[0].getTime()
    
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
  startButton.addEventListener('click', activateCounter)
  function activateCounter(){
    let countDownTempo = setInterval(() => {
      let todaytimeinMiliseg =new Date().getTime()
      /* console.log(options.selectedDates[0].getTime()) */
      /* console.log(options.selectedDate.getTime())  */
      console.log(todaytimeinMiliseg)
      console.log(selectedDate)
      if(todaytimeinMiliseg>selectedDate){
        console.log("seleccione otra fech")
        alert("Please choose a date in the future")

      }
      else{
        console.log ("todo bien")
        console.log(selectedDate-todaytimeinMiliseg)
         let difFerence=selectedDate-todaytimeinMiliseg
        console.log(convertMs(difFerence)); 
        
      }
    }, 1000);
    
  }

  