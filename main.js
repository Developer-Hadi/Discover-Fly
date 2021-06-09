function handleTicketChange(isCrease, ticketClass){
    const ticketInput = document.getElementById(ticketClass+'-class-ticket');
    let ticketCount = parseInt(ticketInput.value);
    if(isCrease == true){
        ticketCount++;
    }
    if(isCrease == false && ticketCount>0){
        ticketCount--;
        if(ticketCount==0)
       { alert('Ticket can not be negative!!!')}
    }
    ticketInput.value = ticketCount;

    // Calculation ticket price
    function ticketInputValue(ticketClass){
        const ticketInput = document.getElementById(ticketClass+'-class-ticket');
        let ticketCount = parseInt(ticketInput.value);
        return ticketCount;
    }
    const subTotal = ticketInputValue('first')*150 + ticketInputValue('economy')*100;
    const subTotalInput = document.getElementById('sub-total');
    subTotalInput.innerHTML = '$ '+ subTotal;

    // VAT Calculation 
    const vat = subTotal *.1;
    document.getElementById('vat').innerHTML = '$ '+ vat;

    // Total Amount

    const totalAmount = subTotal + vat;
    document.getElementById('total-amount').innerHTML ='$ '+  totalAmount;

}




// const increase = document.getElementById('increase');
// increase.addEventListener('click', function(){
//     const ticketInput = document.getElementById('first-class-ticket');
//     const ticketCount = parseInt(ticketInput.value);
//     const ticketNewCount = ticketCount + 1;
//     ticketInput.value = ticketNewCount;
    
// });
// const decrease = document.getElementById('decrease');
// decrease.addEventListener('click', function(){
//     const ticketInput = document.getElementById('first-class-ticket');
//     const ticketCount = parseInt(ticketInput.value);
//     const ticketNewCount = ticketCount - 1;
//     ticketInput.value = ticketNewCount;
    
// });