// Let's get started by exploring logical operators in REPL
true && true
true && false
false && true
false && false

true || true
true || false
false || true
false || false

!true
!false

function guideMe(trafficLight, isNoVehicleInFront) {
  if (trafficLight == "GREEN" && isNoVehicleInFront) {
    console.log("GO");
  } else {
    console.log("STOP");
  }
}

// we can write it without using else condition as well
function guideMe(trafficLight, isNoVehicleInFront) {
  if (trafficLight == "GREEN" && isNoVehicleInFront) {
    console.log("GO");
    return;
  } 
  console.log("STOP");
}

guideMe("GREEN", true);
guideMe("RED", true);

function isEligible(degree) {
  let hasRequiredDegree = (degree == "DME" || degree == "ITI");
  return hasRequiredDegree;
}

function isEligibleForJob1(degree) {
  return (degree == "DME" || degree == "ITI");
}
console.log(isEligibleForJob1("DME"));
console.log(isEligibleForJob1("ITI"));
console.log(isEligibleForJob1("BE"));

function isEligibleForJob2(degree, yearsOfExperience) {
  let hasRequiredDegree = (degree == "DME" || degree == "ITI");
  let hasRequiredExperience = yearsOfExperience >= 2;
  return hasRequiredDegree && hasRequiredExperience;
}

console.log(isEligibleForJob2("DME", 3));
console.log(isEligibleForJob2("DME", 1));
console.log(isEligibleForJob2("BE", 5));

function isEligibleForJob3(degree, yearsOfExperience, age) {
  let hasRequiredDegree = (degree == "DME" || degree == "ITI");
  let hasRequiredExperience = yearsOfExperience >= 2;
  let withinAgeLimit = age <= 30;
  return hasRequiredDegree && hasRequiredExperience && withinAgeLimit;
}

console.log(isEligibleForJob3("DME", 3, 34));

function guideMeV2(trafficLight, isAnyVehicleInFront) {
  if (trafficLight == "GREEN" && !isAnyVehicleInFront) {
    console.log("GO");
    return;
  } 
  console.log("STOP");
}

guideMeV2("GREEN", false);
guideMeV2("GREEN", true);