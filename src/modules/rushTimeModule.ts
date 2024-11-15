export default function rushTimeModificator(
  timeStamp: string,
  deliveryCharge: number
): number {
  const dayOfDelivery: number = new Date(timeStamp).getDay();
  const hourOfDelivery: number = new Date(timeStamp).getHours();
  const minutesOfDelivery: number = new Date(timeStamp).getMinutes();

  if (dayOfDelivery === 5 && hourOfDelivery >= 15 && hourOfDelivery <= 19) {
    if (hourOfDelivery === 19 && minutesOfDelivery !== 0) {
      return deliveryCharge;
    } else {
      deliveryCharge = Math.round(10* 1.2 * deliveryCharge)/10;
      
    }
  }

  return deliveryCharge;
}
