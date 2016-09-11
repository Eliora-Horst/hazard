//Grabs data from URL string
    var locate = window.location;
    document.hazardData.data.value = locate;
    var text = document.hazardData.data.value;

    //Finds first entry
    function delineate(str){
        theleft = str.indexOf("=") + 1;
        theright = str.lastIndexOf("&");
        return(str.substring(theleft, theright));
    }
    //Finds second entry
    function delineate2(str){
    point = str.lastIndexOf("=");
    return(str.substring(point+1,str.length));
    }
    //Replaces + and %2C
    function makePretty(finalStr){
    var strSansSpace = finalStr.replace(/\+/g, " ");
    var strSansComma = strSansSpace.replace(/%2C/g, ",");
    return strSansComma;
    }

    var newStr = delineate(text);
    var questions = makePretty(newStr);

    var newStr2 = delineate2(text);
    var answers = makePretty(newStr2);

    //Displays nice data to IDs
    document.getElementById("demo").innerHTML = (questions);
    document.getElementById("demo2").innerHTML = (answers);