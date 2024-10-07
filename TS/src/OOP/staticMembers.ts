class Ride {
  //passenger
  //pickupLocation
  //dropoffLocation
  private static _activeRides = 0;

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }
  static get activeRides() {
    return Ride._activeRides;
  }
}
// Ride.activeRides = 10; // no set activeRides(){}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);
