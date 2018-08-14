$(document).ready(function() {
  $("#formOne").submit(function(event) {
  event.preventDefault();
  var input1 = parseInt($("#input1").val());
  var input2 = parseInt($("#input2").val());
  for (var index = input1; index <= input2; index += input1) {
    alert(index);
  }
  // $('#submit').click(function(){
    if($("#input1").val() == "" || $("#input2").val() == ""){
      alert("Please enter your values.");
    }

    if($("#input1").val() >= $("#input2").val()){
      console.log ("one")
      alert("Please enter a first number that is less than the second number.");
    }


  });
});
