// Button Toggle
document.getElementById('history').addEventListener('click',function(){
  hideShow('history');
});
document.getElementById('donation').addEventListener('click',function(){
  hideShow('donation');
});
function hideShow(ID){
  document.getElementById(ID);
  if(ID=='donation'){
    document.getElementById('history-part').style.display='none';
    document.getElementById('donation-part').style.display='block';
    document.getElementById(ID).style.backgroundColor='rgb(171,239,93)';
    document.getElementById('history').style.backgroundColor='rgb(242,242,242)';
  }else{
    document.getElementById('donation-part').style.display='none';
    document.getElementById('history-part').style.display='block';
    document.getElementById(ID).style.backgroundColor='rgb(171,239,93)';
    document.getElementById('donation').style.backgroundColor='rgb(242,242,242)';

  } 
}
// function called
 //  Quota-donate noakhali-donate Feni-donate
 document.getElementById('feni-donate').addEventListener('click',function(){
  donating('feni-donate');
  donoAddToHistory('feni-donate');
})
document.getElementById('noakhali-donate').addEventListener('click',function(){
  donating('noakhali-donate');
  donoAddToHistory('noakhali-donate');
})
document.getElementById('Quota-donate').addEventListener('click',function(){
  donating('Quota-donate');
  donoAddToHistory('Quota-donate');
})
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
// finished