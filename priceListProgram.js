$("#txt_price").val("$0");
$(document).on('keyup keypress change', function(e) {
  priceTotal = 0;
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


  if (thing1 == 1) priceTotal += thing1* 22.95;
  if (thing1 >= 2 && thing1 < 5) priceTotal += thing1* 20.95;
  if (thing1 >= 5 && thing1 <= 9) priceTotal += thing1* 18.99;
  if (thing1 >=10  && thing1 <= 29) priceTotal += thing1* 17.99;
  if (thing1 >= 30 && thing1 <= 49) priceTotal += thing1* 15.99;
  if (thing1 >= 50) priceTotal += thing1* 13.99;
  
  if (thing2 == 1) priceTotal += thing2* 17.99;
  if (thing2 >= 2 && thing2 < 5) priceTotal += thing2* 16.99;
  if (thing2 >= 5 && thing2 <= 9) priceTotal += thing2* 14.99;
  if (thing2 >=10  && thing2 <= 29) priceTotal += thing2* 12.99;
  if (thing2 >= 30 && thing2 <= 49) priceTotal += thing2* 10.99;
  if (thing2 >= 50) priceTotal += thing2* 7.99;
  
  if (thing3 == 1) priceTotal += thing3* 17.99;
  if (thing3 >= 2 && thing3 < 5) priceTotal += thing3* 16.99;
  if (thing3 >= 5 && thing3 <= 9) priceTotal += thing3* 14.99;
  if (thing3 >=10  && thing3 <= 29) priceTotal += thing3* 12.99;
  if (thing3 >= 30 && thing3 <= 49) priceTotal += thing3* 10.99;
  if (thing3 >= 50) priceTotal += thing3* 9.99;
  
  if (thing8 == 1) priceTotal += thing8* 29.99;
  if (thing8 == 2) priceTotal += thing8* 14.99;
  if (thing8 >= 3 && thing8 <= 19) priceTotal += thing8* 9.99;
  if (thing8 >=20  && thing8 <= 49) priceTotal += thing8* 8.99;
  if (thing8 >= 50 && thing8 <= 99) priceTotal += thing8* 7.99;
  if (thing8 >= 100) priceTotal += thing8* 6.99;
  
  if (thing9 == 1) priceTotal += thing9* 49.99;
  if (thing9 == 2) priceTotal += thing9* 24.99;
  if (thing9 >= 3 && thing9 <= 19) priceTotal += thing9* 19.99;
  if (thing9 >=20  && thing9 <= 49) priceTotal += thing9* 17.99;
  if (thing9 >= 50 && thing9 <= 99) priceTotal += thing9* 15.99;
  if (thing9 >= 100) priceTotal += thing9* 14.99;

	if (thing10 == 1) priceTotal += thing10* 69.99;
  if (thing10 == 2) priceTotal += thing10* 34.99;
  if (thing10 >= 3 && thing10 <= 19) priceTotal += thing10* 29.99;
  if (thing10 >=20  && thing10 <= 49) priceTotal += thing10* 27.99;
  if (thing10 >= 50 && thing10 <= 99) priceTotal += thing10* 25.99;
  if (thing10 >= 100) priceTotal += thing10* 23.99;
  
  if (thing19 == 1) priceTotal += thing19* 14.99;
  if (thing19 >= 2 && thing19 < 5) priceTotal += thing19* 13.99;
  if (thing19 >= 5 && thing19 <= 9) priceTotal += thing19* 12.99;
  if (thing19 >=10  && thing19 <= 29) priceTotal += thing19* 11.99;
  if (thing19 >= 30 && thing19 <= 49) priceTotal += thing19* 10.99;
  if (thing19 >= 50) priceTotal += thing19* 9.99;
  
  if (thing20 == 1) priceTotal += thing20* 21.99;
  if (thing20 >= 2 && thing20 < 5) priceTotal += thing20* 20.99;
  if (thing20 >= 5 && thing20 <= 9) priceTotal += thing20* 19.99;
  if (thing20 >=10  && thing20 <= 29) priceTotal += thing20* 18.99;
  if (thing20 >= 30 && thing20 <= 49) priceTotal += thing20* 17.99;
  if (thing20 >= 50) priceTotal += thing20* 16.99;
  
  if (thing16 >=0 && thing16<=49) priceTotal += thing16* 0.99;
  if (thing16 >= 50 && thing16 < 99) priceTotal += thing16* 0.89;
  if (thing16 >= 100 && thing16 <= 199) priceTotal += thing16* 0.79;
  if (thing16 >=200  && thing16 <= 499) priceTotal += thing16* 0.59;
  if (thing16 >= 500) priceTotal += thing16* 0.49;
  
  if (thing17 >=0 && thing17<=49) priceTotal += thing17* 1.19;
  if (thing17 >= 50 && thing17 < 99) priceTotal += thing17* 0.99;
  if (thing17 >= 100 && thing17 <= 199) priceTotal += thing17* 0.89;
  if (thing17 >=200  && thing17 <= 499) priceTotal += thing17* 0.79;
  if (thing17 >= 500) priceTotal += thing17* 0.69;
  
  if (thing18>0) priceTotal += thing18* 450;
  
  if (thing4>0) priceTotal += thing4* 2.99;
  if (thing5>0) priceTotal += thing5* 9.99;
  if (thing6>0) priceTotal += thing6* 3.99;
  if (thing7>0) priceTotal += thing7* 24.99;
  
  if (thing11>0) priceTotal += thing11* 24.99;
  if (thing12>0) priceTotal += thing12* 29.99;
  if (thing13>0) priceTotal += thing13* 10;
  if (thing14>0) priceTotal += thing14* 3.99;
  if (thing15>0) priceTotal += thing15* 4.99;
  
  if (thing21>0) priceTotal += thing21* 9.99;
  if (thing22>0) priceTotal += thing22* 3.99;
 
  
  //priceTotal += Math.round((amountDiscs * multiplier) * 100) / 100;
  $("#txt_price").val('$' + parseFloat(priceTotal, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
  //$("#txt_price").val("$" + priceTotal);
    //$('#item-price').html("$"+priceTotal);
});
