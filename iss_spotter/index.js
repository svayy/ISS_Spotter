const { nextISSTimesForMyLocation } = require('./iss');

ISSPassTimes(geo,(error,PassTimes) => {
  if(error) {
    console.log(error);
    return;
}    
  nextISSTimesForMyLocation((error, passTimes) => {                                          
    if (error) {
      return console.log("It didn't work!", error);
    }
    console.log(passTimes);
})})