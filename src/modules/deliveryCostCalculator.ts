//Import statements for the modules that we are using
import distanceDeliveryCost from "./deliveryDistanceModule";
import deliveryItemsModule from "./deliveryItemsModule";
import rushTimeModificator from "./rushTimeModule";

//This is the function that takes as inputs the orderValue
//the deliveryDistance ,the items in the cart as well as
//the dateAndTime of the delivery to calculate the deliveryCost

//It outpus a string to render in our page
export default function totalDeliveryCostCalculator(
  orderValue: number,
  deliveryDistance: number,
  itemsInCart: number,
  timeOfDelivery: string
): string {
  let deliveryCost: number = 0;

  if (orderValue >= 100) {
    return `The delivery cost for your order is ${deliveryCost}`;
  } else {
    deliveryCost += distanceDeliveryCost(deliveryDistance);
    deliveryCost += deliveryItemsModule(itemsInCart);
    deliveryCost = rushTimeModificator(timeOfDelivery, deliveryCost);

    if (deliveryCost > 15) {
      deliveryCost = 15;

      return `The delivery cost for your order is ${deliveryCost}`;
    } else {
      return `The delivery cost for your order is ${deliveryCost}`;
    }
  }
}
