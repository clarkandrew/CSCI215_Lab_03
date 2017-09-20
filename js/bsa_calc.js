

function calculate() {
    

    var female = document.getElementsByName("sex")[1].checked;
    var male = document.getElementsByName("sex")[0].checked;

    var weight = document.getElementsByName("weight")[0].value;
    var height = document.getElementsByName("height")[0].value;

    console.log( 'Male = ' + male );
    console.log( 'Weight = ' + weight );
    console.log( 'Height = ' + height );
    
    
    
    function inToCm(inches) {
        var cm = inches * 2.54;
        return cm;
    }
    
    function poundsToKg(pounds) {
        var kg = pounds * 0.45359237;
        return kg;
    }
    
    function inchesToMeters(inches) {
        var meters = inches * 0.0254;
        return meters;
    }

    // -------------------------------
    // Conversions
    // -------------------------------
    // lbs to kg: 1 lb = 0.454 kg
    // inch to meter: 1 in = 0.0254 m
    // inch to cm: 1 in = 2.54 cm

    // ==========================================
    // Todo: Perform conversion calculations here

    // -------------------------------
    // Body Surface Area (BSA)
    // -------------------------------

    var BSA = 0;
    BSA = Math.sqrt((inToCm(height) * poundsToKg(weight))/3600);
    // ==========================================
    // Todo: Perform BSA calculation here

    // -------------------------------
    // Ideal Body Weight (IBW)
    // -------------------------------

    var IBW = 0;

    if ( female ) {
        IBW = 45.5+2.3*(height - 60);
        // ==========================================
        // Todo: Perform female IBW calculation here


    } else if ( male ) {
        
        IBW = 50+2.3*(height - 60);

        // ==========================================
        // Todo: Perform male IBW calculation here

    }

    // -------------------------------
    // Body Mass Index (BMI)
    // -------------------------------

    var BMI = 0;
    
    BMI = poundsToKg(weight)/Math.pow(inchesToMeters(height),2);

    // ==========================================
    // Todo: Perform BMI calculation here



    // Do not modify this function call
    display( BSA, IBW, BMI );

}

// ------------------------------------
// Do not modify this function
function display( BSA, IBW, BMI ) {

    var message = 'Body Surface Area = ' + BSA.toPrecision(4) + ' m^2\nIdeal Body Weight = ' + IBW.toPrecision(4) + ' kg\nBody Mass Index = ' + BMI.toPrecision(4) + ' kg/m^2';

    document.getElementById("output").innerHTML=message;

}