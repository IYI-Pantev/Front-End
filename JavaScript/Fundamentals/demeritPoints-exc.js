// speed Litim = 70
// 5 -> 1 point taken of 10 points
// if 0 points left - Driver license suspended
// Math.floor

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    const speedTolerance = 4;

    if (typeof speed !== 'number') {
        console.log(NaN);
    };

    if (speed <= speedLimit + speedTolerance) {
        console.log("OK");
    }else {
        const points = Math.floor((speed - speedLimit)/ kmPerPoint) ;
        if (points >= 10) {
            console.log("Driver license suspended!");
        } else {
            console.log(`${points} points taken for violating traffic law!`);
        }
    }


};
checkSpeed(120);