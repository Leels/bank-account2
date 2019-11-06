// Business Logic

function BankAccount(firstName, lastName, balance) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.balance = balance
}

BankAccount.prototype.balanceDeposit = function(deposit){
  return this.balance += deposit;
};

BankAccount.prototype.balanceWithdraw = function(withdraw){
  return this.balance -= withdraw;
};

// Front-end Logic

$(document).ready(function(){
  $("form#register").submit(function(event){
    event.preventDefault();

    var firstNameInput = $("input#first-name").val();
    var lastNameInput = $("input#last-name").val();
    var balanceInput = parseInt($("input#balance").val());

    var bankAccount = new BankAccount(firstNameInput, lastNameInput, balanceInput);

    $("form#register").hide();
    $(".account-info").show();
    $(".name").text(bankAccount.firstName + " " + bankAccount.lastName);
    $(".balance").text("$" + bankAccount.balance.toFixed(2));

    $("form#activity").show();

    $("form#activity").submit(function(event) {
      event.preventDefault();

      var activityInput = $("input:radio[name=activity]:checked").val();
      var amountInput = parseInt($("input#dw").val());

      if (activityInput === "deposit") {
        bankAccount.balanceDeposit(amountInput);
      } else {
        bankAccount.balanceWithdraw(amountInput);
      }

      $(".balance").text("$" + bankAccount.balance.toFixed(2));

      document.getElementById("activity").reset();
    });
});

});
