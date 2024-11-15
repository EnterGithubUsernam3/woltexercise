//This is the module that adjusts the delivery cost based on the distance
// of the store and the customer's location in meters

//Rules about this module
//1) If the cart value is less that 10 then the difference between the
//cart value and 10 will be added to the delivery cost

//2)The delivery fee for the first 1000 meters is set to 2e and
//for every extra 500m 1e is added
export default function distanceDeliveryCost(distance: number): number {
  let distanceCost: number = 2;

  if (distance > 1000) {
    const addedCharge: number = Math.ceil((distance - 1000) / 500);
    distanceCost += addedCharge;

    return distanceCost;
  } else {
    return distanceCost;
  }
}
