//This is the module that will test the extra delivery cost based on the
//number of items in the customer cart

//Rules about this module
//1)If the number of items is less than 4 then there is no extra charge
//2)For 5 or more items  50 cents are added as charge for every extra item
//3)If the number of items is more than 12 then a one time bulk charge
// of 1.2 euros is added on top.

export default function itemsInCartCharge(itemsInCart: number): number {
  let extraCharge: number = 0;

  if (itemsInCart <= 4) {
    return extraCharge;
  } else {
    if (itemsInCart > 12) {
      extraCharge += 1.2;
    }
    extraCharge += (itemsInCart - 4) / 2;

    return extraCharge;
  }
}
