$("#txt_price").val("$0");
$(document).on('keyup keypress change', function(e) {
  priceValue = 0;
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

  thing1Price = 0;
  thing2Price = 0;
  thing3Price = 0;
  thing4Price = 0;
  thing5Price = 0;
  thing6Price = 0;
  thing7Price = 0;
  thing8Price = 0;
  thing9Price = 0;
  thing10Price = 0;
  thing11Price = 0;
  thing12Price = 0;
  thing13Price = 0;
  thing14Price = 0;
  thing15Price = 0;
  thing16Price = 0;
  thing17Price = 0;
  thing18Price = 0;
  thing19Price = 0;
  thing20Price = 0;
  thing21Price = 0;
  thing22Price = 0;

  if (thing1 >= 3){thing1Price = thing1 * 12.95;}
  else if (thing1 > 0){thing1Price = thing1 * 27.99;}
  if (thing2 >= 3){thing1Price = thing2 * 7.95;}
  else if (thing2 > 0){thing1Price = thing2 * 14.99;}
  if (thing3 >= 3){thing1Price = thing3 * 7.95;}
  else if (thing3 > 0){thing1Price = thing3 * 16.99;}
  if (thing4 > 0) thing4Price = thing4 * 2.99;
  if (thing5 > 0) thing5Price = thing5 * 9.99;
  if (thing6 > 0) thing6Price = thing6 * 3.99;
  if (thing7 > 0) thing7Price = thing7 * 24.99;
  if (thing8 > 0) thing8Price = thing8 * 6.5;
  if (thing9 > 0) thing9Price = thing9 * 12.5;
  if (thing10 > 0) thing10Price = thing10 * 14.99;
  if (thing11 > 0) thing11Price = thing11 * 24.99;
  if (thing12 > 0) thing12Price = thing12 * 29.99;
  if (thing13 > 0) thing13Price = thing13 * 10;
  if (thing14 > 0) thing14Price = thing14 * 3.99;
  if (thing15 > 0) thing15Price = thing15 * 4.99;
  if (thing16 > 0) thing16Price = thing16 * 0.45;
  if (thing17 > 0) thing17Price = thing17 * 0.55;
  if (thing18 > 0) thing18Price = thing18 * 450;
  if (thing19 > 0) thing19Price = thing19 * 13.75;
  if (thing20 > 0) thing20Price = thing20 * 18.75;
  if (thing21 > 0) thing21Price = thing21 * 9.99;
  if (thing22 > 0) thing22Price = thing22 * 3.99;
  priceValue = thing1Price + thing2Price + thing3Price + thing4Price + thing5Price + thing6Price + thing7Price + thing8Price + thing9Price + thing10Price + thing11Price + thing12Price + thing13Price + thing14Price + thing15Price + thing16Price + thing17Price + thing18Price + thing19Price + thing20Price + thing21Price + thing22Price;
  //thingPrice += Math.round((amountDiscs * multiplier) * 100) / 100;
  $("#txt_price").val('$' + parseFloat(priceValue, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
  //$("#txt_price").val("$" + thingPrice);
  //$('#item-price').html("$"+thingPrice);
});
