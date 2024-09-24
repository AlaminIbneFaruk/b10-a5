// common function 1
function donating(donatetype){
  let donation,budget,addedDono,addedDonationtype;
  budget=parseFloat(document.getElementById('budget').innerText);
  if(donatetype=='feni-donate'){
    donation=parseFloat(document.getElementById('feni-in').value);
    addedDono=parseFloat(document.getElementById('dff-num').innerText)      
    addedDonationtype='dff-num';
    }
  else if(donatetype == 'noakhali-donate' ){
    donation=parseFloat(document.getElementById('noakhali-in').value);
    addedDono=parseFloat(document.getElementById('dfn-num').innerText);
    addedDonationtype='dfn-num';
    }
  else if(donatetype=='Quota-donate'){
    donation=parseFloat(document.getElementById('quota-in').value);
    addedDono=parseFloat(document.getElementById('aid-num').innerText)   ;
    addedDonationtype='aid-num';
    }
    else{
      alert('something is wrong');
    }
  if(!isNaN(donation)&&isFinite(donation) && donation > 0){
  if(budget>donation){
    let newBudget=budget-donation;
    document.getElementById('budget').innerText=newBudget;
    addedDono+=donation;
    document.getElementById(addedDonationtype).innerText=addedDono;
  }else{
      alert("You're exceeding your budget. Please check the donation amount.");
    }
  }
  else{
    alert('not a valid number');  
  }
}
// common function()2:
function donoAddToHistory(donotype){
  let donation,addedDonationtype;
  const history=document.getElementById('history-part');
  const currentDate = new Date().toLocaleDateString();  // Get current date
  const currentTime = new Date().toLocaleTimeString();
  if(donotype=='feni-donate'){
    donation=parseFloat(document.getElementById('feni-in').value);      
    addedDonationtype='dff-num';
    const newCard = `
    <div class="card card-side bg-base-100 shadow-xl m-4">
      <div class="card-body">
        <p>You donated ${donation} BDT to the ${document.getElementById('feni-title').innerText}.</p>
        <p>Date: ${currentDate} Time:${currentTime}</p> 
      </div>
    </div>
  `;
  history.innerHTML+=newCard;
    }
  else if(donotype == 'noakhali-donate' ){
    donation=parseFloat(document.getElementById('noakhali-in').value);
    addedHistorytype='dfn-num';
    const newCard = `
    <div class="card card-side bg-base-100 shadow-xl m-4">
      <div class="card-body">
        <p>You donated ${donation} BDT to the ${document.getElementById('noakhali-title').innerText}.</p>
        <p>Date: ${currentDate} Time:${currentTime}
        </p> 
      </div>
    </div>
  `;
  history.innerHTML+=newCard;
    }
  else if(donotype =='Quota-donate'){
    donation=parseFloat(document.getElementById('quota-in').value);
    addedDono=parseFloat(document.getElementById('aid-num').innerText)   ;
    addedDonationtype='aid-num';
    const newCard = `
    <div class="card card-side bg-base-100 shadow-xl m-4">
      <div class="card-body">
        <p>You donated ${donation} BDT to the ${document.getElementById('quota-title').innerText}</p>
        <p>Date: ${currentDate} Time:${currentTime}</p> <!-- Optionally add date -->
      </div>
    </div>
  `;
  history.innerHTML+=newCard;
  }
}