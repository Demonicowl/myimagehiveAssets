$("#txt_price").val("$0");

$(document).on('keyup keypress change', function(e) {
  thingPrice = 0;
  thing1 = $("#thing1").val();
  thing2 = $("#thing2").val();
  thing3 = $("#thing3").val();
  thing4 = $("#thing4").val();
  thing5 = $("#thing5").val();
  thing6 = $("#thing6").val();
  thing7 = $("#thing7").val();
  thing8 = $("#thing8").val();
  thing9 = $("#thing9").val();
  thing10 = $("#thing10").val();
  thing11 = $("#thing11").val();
  thing12 = $("#thing12").val();
  thing13 = $("#thing13").val();
  thing14 = $("#thing14").val();
  thing15 = $("#thing15").val();
  thing16 = $("#thing16").val();
  thing17 = $("#thing17").val();
  thing18 = $("#thing18").val();
  thing19 = $("#thing19").val();
  thing20 = $("#thing20").val();
  thing21 = $("#thing21").val();
  thing22 = $("#thing22").val();

  thing1 = (parseFloat(thing1));
  thing2 = (parseFloat(thing2));
  thing3 = (parseFloat(thing3));
  thing4 = (parseFloat(thing4));
  thing5 = (parseFloat(thing5));
  thing6 = (parseFloat(thing6));
  thing7 = (parseFloat(thing7));
  thing8 = (parseFloat(thing8));
  thing9 = (parseFloat(thing9));
  thing10 = (parseFloat(thing10));
  thing11 = (parseFloat(thing11));
  thing12 = (parseFloat(thing12));
  thing13 = (parseFloat(thing13));
  thing14 = (parseFloat(thing14));
  thing15 = (parseFloat(thing15));
  thing16 = (parseFloat(thing16));
  thing17 = (parseFloat(thing17));
  thing18 = (parseFloat(thing18));
  thing19 = (parseFloat(thing19));
  thing20 = (parseFloat(thing20));
  thing21 = (parseFloat(thing21));
  thing22 = (parseFloat(thing22));
	
  thingPrice1=0;
  if (thing1 == 1) thingPrice1 += thing1 * 22.95;
  if (thing1 >= 2 && thing1 < 5) thingPrice1 += thing1 * 20.95;
  if (thing1 >= 5 && thing1 <= 9) thingPrice1 += thing1 * 18.99;
  if (thing1 >= 10 && thing1 <= 29) thingPrice1 += thing1 * 17.99;
  if (thing1 >= 30 && thing1 <= 49) thingPrice1 += thing1 * 15.99;
  if (thing1 >= 50) thingPrice1 += thing1 * 13.99;
  
  
  thingPrice2=0;
  if (thing2 == 1) thingPrice2 += thing2 * 17.99;
  if (thing2 >= 2 && thing2 < 5) thingPrice2 += thing2 * 16.99;
  if (thing2 >= 5 && thing2 <= 9) thingPrice2 += thing2 * 14.99;
  if (thing2 >= 10 && thing2 <= 29) thingPrice2 += thing2 * 12.99;
  if (thing2 >= 30 && thing2 <= 49) thingPrice2 += thing2 * 10.99;
  if (thing2 >= 50) thingPrice2 += thing2 * 7.99;
  thingPrice2=thingPrice2*0.5;
  
  thingPrice3=0;
  if (thing3 == 1) thingPrice3 += thing3 * 17.99;
  if (thing3 >= 2 && thing3 < 5) thingPrice3 += thing3 * 16.99;
  if (thing3 >= 5 && thing3 <= 9) thingPrice3 += thing3 * 14.99;
  if (thing3 >= 10 && thing3 <= 29) thingPrice3 += thing3 * 12.99;
  if (thing3 >= 30 && thing3 <= 49) thingPrice3 += thing3 * 10.99;
  if (thing3 >= 50) thingPrice3 += thing3 * 9.99;
  thingPrice3=thingPrice3*0.75;

  thingPrice8=0;
  if (thing8 == 1) thingPrice8 += thing8 * 29.99;
  if (thing8 == 2) thingPrice8 += thing8 * 14.99;
  if (thing8 >= 3 && thing8 <= 19) thingPrice8 += thing8 * 9.99;
  if (thing8 >= 20 && thing8 <= 49) thingPrice8 += thing8 * 8.99;
  if (thing8 >= 50 && thing8 <= 99) thingPrice8 += thing8 * 7.99;
  if (thing8 >= 100) thingPrice8 += thing8 * 6.99;
  thingPrice8=thingPrice8*0.75;

  thingPrice9=0;
  if (thing9 == 1) thingPrice9 += thing9 * 49.99;
  if (thing9 == 2) thingPrice9 += thing9 * 24.99;
  if (thing9 >= 3 && thing9 <= 19) thingPrice9 += thing9 * 19.99;
  if (thing9 >= 20 && thing9 <= 49) thingPrice9 += thing9 * 17.99;
  if (thing9 >= 50 && thing9 <= 99) thingPrice9 += thing9 * 15.99;
  if (thing9 >= 100) thingPrice9 += thing9 * 14.99;
  thingPrice9=thingPrice9*0.75;

  thingPrice10=0;
  if (thing10 == 1) thingPrice10 += thing10 * 69.99;
  if (thing10 == 2) thingPrice10 += thing10 * 34.99;
  if (thing10 >= 3 && thing10 <= 19) thingPrice10 += thing10 * 29.99;
  if (thing10 >= 20 && thing10 <= 49) thingPrice10 += thing10 * 27.99;
  if (thing10 >= 50 && thing10 <= 99) thingPrice10 += thing10 * 25.99;
  if (thing10 >= 100) thingPrice10 += thing10 * 23.99;
  thingPrice10=thingPrice10*0.75;

  thingPrice19=0;
  if (thing19 == 1) thingPrice19 += thing19 * 14.99;
  if (thing19 >= 2 && thing19 < 5) thingPrice19 += thing19 * 13.99;
  if (thing19 >= 5 && thing19 <= 9) thingPrice19 += thing19 * 12.99;
  if (thing19 >= 10 && thing19 <= 29) thingPrice19 += thing19 * 11.99;
  if (thing19 >= 30 && thing19 <= 49) thingPrice19 += thing19 * 10.99;
  if (thing19 >= 50) thingPrice19 += thing19 * 9.99;

  thingPrice20=0;
  if (thing20 == 1) thingPrice20 += thing20 * 21.99;
  if (thing20 >= 2 && thing20 < 5) thingPrice20 += thing20 * 20.99;
  if (thing20 >= 5 && thing20 <= 9) thingPrice20 += thing20 * 19.99;
  if (thing20 >= 10 && thing20 <= 29) thingPrice20 += thing20 * 18.99;
  if (thing20 >= 30 && thing20 <= 49) thingPrice20 += thing20 * 17.99;
  if (thing20 >= 50) thingPrice20 += thing20 * 16.99;

  thingPrice16=0;
  if (thing16 >= 0 && thing16 <= 49) thingPrice16 += thing16 * 0.99;
  if (thing16 >= 50 && thing16 < 99) thingPrice16 += thing16 * 0.89;
  if (thing16 >= 100 && thing16 <= 199) thingPrice16 += thing16 * 0.79;
  if (thing16 >= 200 && thing16 <= 499) thingPrice16 += thing16 * 0.59;
  if (thing16 >= 500) thingPrice16 += thing16 * 0.49;

  thingPrice17=0;
  if (thing17 >= 0 && thing17 <= 49) thingPrice17 += thing17 * 1.19;
  if (thing17 >= 50 && thing17 < 99) thingPrice17 += thing17 * 0.99;
  if (thing17 >= 100 && thing17 <= 199) thingPrice17 += thing17 * 0.89;
  if (thing17 >= 200 && thing17 <= 499) thingPrice17 += thing17 * 0.79;
  if (thing17 >= 500) thingPrice17 += thing17 * 0.69;

  thingPrice18=0;
  if (thing18 > 0) thingPrice18 += thing18 * 450;
  thingPrice4=0;
  if (thing4 > 0) thingPrice4 += thing4 * 2.99;
  thingPrice5=0;
  if (thing5 > 0) thingPrice5 += thing5 * 9.99;
  thingPrice6=0;
  if (thing6 > 0) thingPrice6 += thing6 * 3.99;
  thingPrice7=0;
  if (thing7 > 0) thingPrice7 += thing7 * 24.99;
thingPrice11=0;
  if (thing11 > 0) thingPrice11 += thing11 * 24.99;
  thingPrice12=0;
  if (thing12 > 0) thingPrice12 += thing12 * 29.99;
  thingPrice13=0;
  if (thing13 > 0) thingPrice13 += thing13 * 10;
  thingPrice14=0;
  if (thing14 > 0) thingPrice14 += thing14 * 3.99;
  thingPrice15=0;
  if (thing15 > 0) thingPrice15 += thing15 * 4.99;
thingPrice21=0;
  if (thing21 > 0) thingPrice21 += thing21 * 9.99;
  thingPrice22=0;
  if (thing22 > 0) thingPrice22 += thing22 * 3.99;
	
  priceValue=thingPrice1+thingPrice2+thingPrice3+thingPrice4+thingPrice5+thingPrice6+thingPrice7+thingPrice8+thingPrice9+thingPrice10+thingPrice11+thingPrice12+thingPrice13+thingPrice14+thingPrice15+thingPrice16+thingPrice17+thingPrice18+thingPrice19+thingPrice20+thingPrice21+thingPrice2;
  //thingPrice += Math.round((amountDiscs * multiplier) * 100) / 100;
  $("#txt_price").val('$' + parseFloat(priceValue, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
  //$("#txt_price").val("$" + thingPrice);
  //$('#item-price').html("$"+thingPrice);
});
