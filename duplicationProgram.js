$("#txt_price").val("$0");
$(document).on('keyup keypress change', function(e) {
    var amountDiscs = 0;
	var priceTotal = 0;
	var multiplier = 0;
	
	var setterDisc=0;
	var setterColor=0;
	var setterCase=0;
    amountDiscs = $("#discInputter").val();
    amountDiscs = (parseFloat(amountDiscs));
	
	if ($('#cd').is(':checked')) setterDisc=0;
    if ($('#dvd').is(':checked')) setterDisc=1;
	if ($('#dvd-DL').is(':checked')) setterDisc=2;
    if ($('#blu-ray').is(':checked')) setterDisc=3;
	
	if ($('#noprintButton').is(':checked')) setterColor=0;
	if ($('#bwButton').is(':checked')) setterColor=1;
	if ($('#colorButton').is(':checked')) setterColor=2;
	
	if ($('#noCase').is(':checked')) multiplier+=0.0;
	if ($('#wPaperSleeveCase').is(':checked')) multiplier+=0.1;
	if ($('#cPaperSleeveCase').is(':checked')) multiplier+=0.14;
	if ($('#jewelCase').is(':checked')) multiplier+=0.36;
	if ($('#slimJewelCase').is(':checked')) multiplier+=0.29;
	if ($('#plasticSquareCase').is(':checked')) multiplier+=0.26;
	if(setterDisc==2){
		multiplier+=1.6;
		setterDisc=1;
	}
	if(setterDisc==3){
		multiplier+=3.75;
		setterDisc=1;
	}
	if(setterDisc==1 && setterColor==0){
        if (amountDiscs == 1) multiplier += 4.99;
        if (amountDiscs >= 2 && amountDiscs <= 5) multiplier += 2.99;
        if (amountDiscs >= 6 && amountDiscs <= 9) multiplier += 2.49;
        if (amountDiscs >= 10 && amountDiscs <= 29) multiplier += 1.99;
        if (amountDiscs >= 30 && amountDiscs <= 49) multiplier += 1.25;
        if (amountDiscs >= 50 && amountDiscs <= 99) multiplier += 1.10;
        if (amountDiscs >= 100 && amountDiscs <= 199) multiplier += 0.99;
        if (amountDiscs >= 200 && amountDiscs <= 499) multiplier += 0.89;
        if (amountDiscs >= 500 && amountDiscs <= 999) multiplier += 0.79;
        if (amountDiscs >= 1000) multiplier += 0.69;
    }
	if(setterDisc==1 && setterColor==1){
        if (amountDiscs == 1) multiplier += 9.95;
        if (amountDiscs >= 2 && amountDiscs <= 5) multiplier += 5.49;
        if (amountDiscs >= 6 && amountDiscs <= 9) multiplier += 4.49;
        if (amountDiscs >= 10 && amountDiscs <= 29) multiplier += 3.49;
        if (amountDiscs >= 30 && amountDiscs <= 49) multiplier += 2.49;
        if (amountDiscs >= 50 && amountDiscs <= 99) multiplier += 1.99;
        if (amountDiscs >= 100 && amountDiscs <= 199) multiplier += 1.55;
        if (amountDiscs >= 200 && amountDiscs <= 299) multiplier += 1.24;
        if (amountDiscs >= 300 && amountDiscs <= 499) multiplier += 1.14;
        if (amountDiscs >= 500 && amountDiscs <= 999) multiplier += 0.94;
        if (amountDiscs >= 1000) multiplier += 0.87;
    }
	if(setterDisc==1 && setterColor==2){
        if (amountDiscs == 1) multiplier += 30;
        if (amountDiscs >= 2 && amountDiscs <= 5) multiplier += 14.95;
        if (amountDiscs >= 6 && amountDiscs <= 9) multiplier += 6;
        if (amountDiscs >= 10 && amountDiscs <= 29) multiplier += 4.99;
        if (amountDiscs >= 30 && amountDiscs <= 49) multiplier += 3.99;
        if (amountDiscs >= 50 && amountDiscs <= 99) multiplier += 2.49;
        if (amountDiscs >= 100 && amountDiscs <= 199) multiplier += 1.64;
        if (amountDiscs >= 200 && amountDiscs <= 299) multiplier += 1.29;
        if (amountDiscs >= 300 && amountDiscs <= 499) multiplier += 1.19;
        if (amountDiscs >= 500 && amountDiscs <= 999) multiplier += 1.04;
        if (amountDiscs >= 1000) multiplier += 0.92;
    }
	if(setterDisc==0 && setterColor==0){		
        if (amountDiscs == 1) multiplier += 4.99;
        if (amountDiscs >= 2 && amountDiscs <= 5) multiplier += 2.99;
        if (amountDiscs >= 6 && amountDiscs <= 9) multiplier += 2.49;
        if (amountDiscs >= 10 && amountDiscs <= 29) multiplier += 1.99;
        if (amountDiscs >= 30 && amountDiscs <= 49) multiplier += 1.25;
        if (amountDiscs >= 50 && amountDiscs <= 99) multiplier += 1.15;
        if (amountDiscs >= 100 && amountDiscs <= 199) multiplier += 0.99;
        if (amountDiscs >= 200 && amountDiscs <= 499) multiplier += 0.89;
        if (amountDiscs >= 500 && amountDiscs <= 999) multiplier += 0.79;
        if (amountDiscs >= 1000) multiplier += 0.69;
    }
	if(setterDisc==0 &&	setterColor==1){
        if (amountDiscs == 1) multiplier += 9.95;
        if (amountDiscs >= 2 && amountDiscs <= 5) multiplier += 5.49;
        if (amountDiscs >= 6 && amountDiscs <= 9) multiplier += 4.49;
        if (amountDiscs >= 10 && amountDiscs <= 29) multiplier += 3.49;
        if (amountDiscs >= 30 && amountDiscs <= 49) multiplier += 2.49;
        if (amountDiscs >= 50 && amountDiscs <= 99) multiplier += 1.99;
        if (amountDiscs >= 100 && amountDiscs <= 199) multiplier += 1.49;
        if (amountDiscs >= 200 && amountDiscs <= 299) multiplier += 1.19;
        if (amountDiscs >= 300 && amountDiscs <= 499) multiplier += 1.09;
        if (amountDiscs >= 500 && amountDiscs <= 999) multiplier += 0.89;
        if (amountDiscs >= 1000) multiplier += 0.82;
    }
	if(setterDisc==0 && setterColor==2){
        if (amountDiscs == 1) multiplier += 30;
        if (amountDiscs >= 2 && amountDiscs <= 5) multiplier += 14.95;
        if (amountDiscs >= 6 && amountDiscs <= 9) multiplier += 6;
        if (amountDiscs >= 10 && amountDiscs <= 29) multiplier += 4.99;
        if (amountDiscs >= 30 && amountDiscs <= 49) multiplier += 3.99;
        if (amountDiscs >= 50 && amountDiscs <= 99) multiplier += 2.99;
        if (amountDiscs >= 100 && amountDiscs <= 199) multiplier += 1.59;
        if (amountDiscs >= 200 && amountDiscs <= 299) multiplier += 1.24;
        if (amountDiscs >= 300 && amountDiscs <= 499) multiplier += 1.14;
        if (amountDiscs >= 500 && amountDiscs <= 999) multiplier += 0.99;
        if (amountDiscs >= 1000) multiplier += 0.87;
    }
    priceTotal = Math.round((amountDiscs * multiplier) * 100) / 100;
    $("#txt_price").val("$" + priceTotal)
        //$('#item-price').html("$"+priceTotal);
});
