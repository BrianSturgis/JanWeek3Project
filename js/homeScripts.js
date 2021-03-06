//BIZ logic
function getNumberRange(numbers)  {
  let numberRange = [];
  for (let i = 0; i <= numbers; i++)
    if (i.toString().includes("3")) {
      numberRange.push("Won't you be my neighbor?");
    } else if (i.toString().includes("2")){
      numberRange.push("boop");
    } else if (i.toString().includes("1")){
      numberRange.push("beep");
    } else {
      numberRange.push(" " + i);
    }
    return numberRange;
  }

//UI logic
$(document).ready(function(){
  $("#inputNumber").submit(function(event){
    event.preventDefault();
    let numbers = parseInt($("#numbers").val());
    let name = $("#nameOfPerson").val();
    let answer = getNumberRange(numbers);
    $(".nes-container-is-rounded").text("Thanks " + name + answer +" have a nice day!");
    $(".nes-container-is-rounded").show();
    $(".nes-field").hide();
  });
});