const countValue = document.querySelector('#counter');
// fetch the value from body
//also we can fetch using getElementById('counter')

const increment = () => {
     let value = parseInt(countValue.innerText);
     //we get the value from UI in string format so, to convert it into int we use parseInt()
     // we took let bcz we are changing value here
     value = value + 1; 
     //updated
     countValue.innerText = value; //set the value on UI

}

const decrement = () =>{
    let value = parseInt(countValue.innerText);
     //we get the value from UI in string format so, to convert it into int we use parseInt()
     value = value - 1; 
     //updated
     countValue.innerText = value; //set the value on UI

}