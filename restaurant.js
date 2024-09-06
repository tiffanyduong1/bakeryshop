function gid(e){
  return document.getElementById(e);
}

function gtn(e){
  return document.getElementsByTagName(e);
}

function redbeanbun(){
  var order1 = gid("order1").value;
  if(order1 > 0){
    //this disables the button so the user cant add anything else to the input
    gid("order1").disabled = true;
    var total1 = order1 * 1.70;
    //pushes this item total to a global array to later add up each item total for the subtotal
    totals.push(total1);
    gid("ord1").innerHTML = "Red Bean Bun: " + order1;
    //pushes info on what was ordered to a global array for the second page
    receipt.push("Red Bean Bun: " + order1 + " = $" + total1);
    gid("invalid").innerHTML = "";
  }
  else{
    gid('invalid').innerHTML = "Invalid Selection for Red Bean Bun";
    gid('order1').value = "";
    var total1 = 0;
    totals.push(total1);
  }
}

function melonbun(){
  var order2 = gid("order2").value;
  if(order2 > 0){
    gid("order2").disabled = true;
    var total2 = order2 * 1.70;
    totals.push(total2);
    gid("ord2").innerHTML = "Melon Bun: " + order2;
    receipt.push("Melon Bun: " + order2 + " = $" + total2);
    gid("invalid").innerHTML = "";
  }
  else{
    gid('invalid').innerHTML = "Invalid Selection for Melon Bun";
    gid('order2').value = "";
    var total2 = 0;
    totals.push(total2);
  }
}

function chocolatecornet(){
  var order3 = gid("order3").value;
  if(order3 > 0){
    gid("order3").disabled = true;
    var total3 = order3 * 2.50;
    totals.push(total3);
    gid("ord3").innerHTML = "Chocolate Cornet: " + order3;
    receipt.push("Chocolate Cornet: " + order3 + " = $" + total3);
    gid("invalid").innerHTML = "";
  }
  else{
    gid('invalid').innerHTML = "Invalid Selection for Chocolate Cornet";
    gid('order3').value = "";
    var total3 = 0;
    totals.push(total3);
  }
}

function applestrudel(){
  var order4 = gid("order4").value;
  if(order4 > 0){
    gid("order4").disabled = true;
    var total4 = order4 * 2.50;
    totals.push(total4);
    gid("ord4").innerHTML = "Apple Strudel: " + order4;
    receipt.push("Apple Strudel: " + order4 + " = $" + total4);
    gid("invalid").innerHTML = "";
  }
  else{
    gid('invalid').innerHTML = "Invalid Selection for Apple Strudel";
    gid('order4').value = "";
    var total4 = 0;
    totals.push(total4);
  }
}

function cinnamonroll(){
  var order5 = gid("order5").value;
  if(order5 > 0){
    gid("order5").disabled = true;
    var total5 = order5 * 3.10;
    totals.push(total5);
    gid("ord5").innerHTML = "Cinnamon Roll: " + order5;
    receipt.push("Cinnamon Roll: " + order5 + " = $" + total5);
    gid("invalid").innerHTML = "";
  }
  else{
    gid('invalid').innerHTML = "Invalid Selection for Cinnamon Roll";
    gid('order5').value = "";
    var total5 = 0;
    totals.push(total5);
  }
}

function donuts(){
  var order6 = gid("order6").value;
  if(order6 > 0){
    gid("order6").disabled = true;
    var total6 = order6 * 1.70;
    totals.push(total6);
    gid("ord6").innerHTML = "Donuts: " + order6;
    receipt.push("Donuts: " + order6 + " = $" + total6);
    gid("invalid").innerHTML = "";
  }
  else{
    gid('invalid').innerHTML = "Invalid Selection for Donuts";
    gid('order6').value = "";
    var total6 = 0;
    totals.push(total6);
  }
}

//this array contains the total of each item, to add up later in pg1
var totals = [];

//this array just has the total w/tax in pg1
var finaltotal = [];

function runningtotal(){
  //start with 0 when adding up the totals
  var sum = 0;
  //console.log(totals);
  for(var i = 0; i < totals.length; i++){
    sum += totals[i];
    //rounds the sum to the decimal place that i want to show to the user
    var summ = sum.toFixed(2);
    //console.log(summ);
    gid("price").innerHTML = "$" + summ;
  }
}

function runningtotaltax(){
  var sum = 0;
  for(var i = 0; i < totals.length; i++){
    sum += totals[i];
    var tax = sum * 0.04712;
    var taxtotal = sum + tax;
    var taxtotall = taxtotal.toFixed(2);
    gid("tax").innerHTML = "$" + taxtotall;
  }
  finaltotal.push(taxtotall);
  //console.log(finaltotal);
  //console.log(receipt);
}

//all item name w/amount in pg1
var receipt = [];

function finalize(){
  //console.log(receipt);
  //sending receipt over to pg2
  localStorage.setItem("items", receipt);
  location.href = "restaurantpg2.html";
  //sending totals over to pg2
  localStorage.setItem("finaltotal", finaltotal);
  location.href = "restaurantpg2.html";
}

function showreceipt(){
  var r = localStorage.getItem("items");
  //KAM EDIT
  console.log(typeof(r));
  //convert string to array
  var str = r;
  //a new array called res
  var res = str.split(',');
  var parent = gid("everything");
  //output to parent
  parent.innerHTML = res.join("<br>");
}

function total(){
  var t = localStorage.getItem("finaltotal");
  gid("totall").innerHTML = "$" + t;
}


function tipplease(){
  var x = localStorage.getItem("finaltotal");
  var tip = gid("tip").value;
  if(tip > 0){
    var final = parseFloat(x) + parseFloat(tip);
    var finall = final.toFixed(2)
    gid("finalamount").innerHTML = "Final: $" + finall;
    gid("tip").disabled = true;
  }
  else{
    gid("finalamount").innerHTML = "Tip input is invalid. Final: $" + x;
  }
}