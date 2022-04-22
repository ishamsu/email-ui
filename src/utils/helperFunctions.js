export const getReadableTimeAndDate = (value) => { 
    return <>
      {(new Date(value)).toLocaleDateString('en-GB')  + " "+  new Date(value).toLocaleTimeString('en-US', { hour12: true,hour: '2-digit', minute:'2-digit' })}</>
  };

 export  function arrayDifference(a, b) {
    return a.filter((x) => !b.includes(x));
  }
  

