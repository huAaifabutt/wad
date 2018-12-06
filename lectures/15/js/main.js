var currentBalance=1000000;
var balance=document.getElementById("balance");
function initialize() {
    var title= document.getElementById("title");
    title.innerText="Huzaifa Rizwan";
    balance.innerText=currentBalance;
    var currency=document.getElementById("currency");
    currency.innerText="PKR";
    document.getElementById("IBAN").innerText="85694";
}

initialize();
function takeInput(z) {
    if(z.key=="Enter")
    {
       var val=document.getElementById("deposit").value;
      if(! isNaN(val))
      {
          currentBalance= currentBalance+parseInt(val);
          balance.innerText=currentBalance;
          var tt=document.getElementById("transaction-table");
          tt.innerHTML+='<tr>'+
              '<th align="left" valign="middle" scope="col">'+new Date()+'</th>'+
              '<th align="left" valign="middle" scope="col">'+"Deposit"+'</th>'+
              '<th align="left" valign="middle" scope="col">'+ val+'</th>'+
              '</tr>';

      }
      else
      {
          document.getElementById("deposit-msg").innerText="Wrong Parameters";
      }
    }
}
function widrawInput(z) {
    if(z.key=="Enter")
    {
        var val=document.getElementById("withdraw").value;
        if(isNaN(val))
        {
            document.getElementById("withdraw-msg").innerText="Wrong Input";
        }
        else if(currentBalance < val)
        {
            document.getElementById("withdraw-msg").innerText="Don't have enough balance";
        }
        else
        {

            currentBalance= currentBalance-parseInt(val);
            balance.innerText=currentBalance;
            var tt=document.getElementById("transaction-table");
            tt.innerHTML+='<tr>'+
                '<th align="left" valign="middle" scope="col">'+new Date()+'</th>'+
                '<th align="left" valign="middle" scope="col">'+"Widthraw"+'</th>'+
                '<th align="left" valign="middle" scope="col">'+ val+'</th>'+
                '</tr>';
        }
    }
}


