import Notiflix from 'notiflix';



console.log("CONECTED");
const form = document.getElementsByClassName('form')
const CreateButton= document.querySelector('button') 



form[0].addEventListener("submit", (e)=>{
  e.preventDefault()
  const {delay, step, amount}=e.currentTarget
  let delayEntered=0;
  delayEntered= parseInt(delay.value)
  stepEndered= parseInt(step.value)


  for(let i=1;i<=amount.value; i++){
    
    
    
    createPromise(i,delayEntered)
     function createPromise(position, delay) {
      
      let promiseReturn= new Promise((resolve, reject) => {
        setTimeout(() => {
          /* console.log("Entramos a la promesa") */
          const shouldResolve = Math.random() > 0.3;
          
          if (shouldResolve) {
            resolve({ position, delay });
            
            
          } else {
            reject({ position, delay });
            
            
          }
          
        }, delay);
        
        
      });
      promiseReturn
          .then (res=>{
            Notiflix.Notify.success(`✅ Fulfilled promise ${res.position} in ${res.delay}ms`);
           /* console.log(`✅ Fulfilled promise ${res.position} in ${res.delay}ms`); */
           
            
          })
          .catch(error=>{
            Notiflix.Notify.failure(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
           /*  console.log(`❌ Rejected promise ${error.position} in ${error.delay}ms`); */
            
          })
    } 
    delayEntered=delayEntered+stepEndered
    

  }
  


    form[0].reset()
})

  
  /* for (let i=0; i<amount; i++){
    console.log("Entramos una vez")
    console.log(amount)
   }  */


/*  function createPromise(position, delay) {
  console.log("que pasa tio")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("que pasa tio")
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
} */

/* 
crea un ciclo en base al numero de promesas ingresadas en el 
amount y pasa los parametros del delay */
///

/* function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
} */
/* esta incompleta debes crear un funcion que genere promesas con
 un retraso para el la generacion de promesas */