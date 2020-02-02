function travelPrice([arg1,arg2]){
  let kilometers = parseInt(arg1);
  let nightOrDay = arg2;
  let price;

  if(kilometers < 20 && nightOrDay == 'day'){
    price = (kilometers * 0.79) + 0.70;
    console.log("The lowest price is " + price.toFixed(2) + "lv with Taxi");
  }
  else if(kilometers < 20 && nightOrDay == 'night'){
    price = (kilometers * 0.90) + 0.70;
    console.log("The lowest price is " + price.toFixed(2) + "lv with Taxi");
  }
  else if(kilometers > 19 && kilometers < 100){
    price = kilometers * 0.09;
    console.log("The lowest price is " + price.toFixed(2) + "lv with Bus");
  }
  else if(kilometers > 99){
    price = kilometers * 0.06;
    console.log("The lowest price is " + price.toFixed(2) + "lv with Train");
  }
}


travelPrice([150,'day']);
