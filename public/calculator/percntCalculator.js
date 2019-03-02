function Data(fullName,idNumber,subOne,subTwo,subThree,subFour,subFive){
    this.name = fullName;
    this.idNo = idNumber;
    this.chemistry = subOne;
    this.english = subTwo;
    this.mathematics = subThree;
    this.biology = subFour;
    this.history = subFive;
}


var dataArray = [];

function myFunc(){
    var fullName = document.getElementById("input1").value;
    var idNumber = document.getElementById("input2").value;
    subOne = Number(document.getElementById("input3").value);
    subTwo = Number(document.getElementById("input4").value);
    subThree = Number(document.getElementById("input5").value);
    subFour = Number(document.getElementById("input6").value);
    subFive = Number(document.getElementById("input7").value);
   var totalData = new Data(fullName,idNumber,subOne,subTwo,subThree,subFour,subFive);
    dataArray.push(totalData);
    console.log(dataArray);
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
    document.getElementById("input5").value = "";
    document.getElementById("input6").value = "";
    document.getElementById("input7").value = "";
}
// console.log(dataArray[0].idNo);
function idSearch(){
    var inputSearch = document.getElementById("input8").value;
    var flag = "no";
    for(var i = 0; i < dataArray.length; i++){
        if(inputSearch === dataArray[i].idNo){
            flag = "yes";
            var totalPerc = (subOne + subTwo + subThree + subFour + subFive)*100/500 + "%";
           document.getElementById("input9").value = dataArray[i].name;
           document.getElementById("input10").value = dataArray[i].idNo;
           document.getElementById("input11").value = dataArray[i].chemistry;
           document.getElementById("input12").value = dataArray[i].english;
           document.getElementById("input13").value = dataArray[i].mathematics;
           document.getElementById("input14").value = dataArray[i].biology;
           document.getElementById("input15").value = dataArray[i].history;
           document.getElementById("input16").value = totalPerc;
            // alert("correct");
        }
    }
    if(flag === "no"){
        alert("Sorry Roll number is not found");
    }
}

var logData = localStorage.getItem("data");
logData = JSON.parse(logData);
var logData1 = logData.email.slice(0,logData.email.length-10);
var userName = document.getElementById("input1");
userName.setAttribute("value",logData1);
function logOut(){
    window.location.href = "../index.html";
    localStorage.removeItem("data");
}
