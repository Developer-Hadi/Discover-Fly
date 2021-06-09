function handleTicketChange(isCrease, ticketClass){
    const ticketInput = document.getElementById(ticketClass+'-class-ticket');
    let ticketCount = parseInt(ticketInput.value);
    if(isCrease == true){
        ticketCount++;
    }
    if(isCrease == false && ticketCount>0){
        ticketCount--;
        if(ticketCount==0)
       { alert('আরে হাবলু নাকি ? টিকিট কি কখনও ঋণাত্মক হয়!!!')}
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

document.getElementById('book').addEventListener('click', function(){
    const mainContent = document.getElementById('main-content');
    const orderCompleted = document.getElementById('order-complete');
    mainContent.style.display = 'none';
    orderCompleted.style.display = 'block';
})