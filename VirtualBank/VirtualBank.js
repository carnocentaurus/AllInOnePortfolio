const pinSection = document.getElementById("pinSection");
const pinInput = document.getElementById("pinInput");

const bankDiv = document.getElementById("bankDiv");
const profileImgDisplay = document.getElementById("profileImgDisplay");
const fullNameDisplay = document.getElementById("fullNameDisplay");
const balanceDisplay = document.getElementById("balanceDisplay");

const withdrawDiv = document.getElementById("withdrawDiv");
const withdrawAmountInput = document.getElementById("withdrawAmountInput");

const depositDiv = document.getElementById("depositDiv");
const depositAmountInput = document.getElementById("depositAmountInput");

const editAccDiv = document.getElementById("editAccDiv");
const profileImgPreviewDisplay = document.getElementById("profileImgPreviewDisplay");
const profileImgInput = document.getElementById("profileImgInput");
const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");

const pin = "8356";
let balance = 0.00;


profileImgInput.addEventListener("change", function() {
  // get the first chosen img
  const chosenImg = this.files[0];
  const reader = new FileReader();
  
  // runs after img is fully read
  reader.onload = function() {
    // base64 - turns binary data (like img) to plain text
    const base64 = reader.result;
    
    localStorage.setItem("VirtualBankProfileImg", base64);
    profileImgPreviewDisplay.src = base64;
  }
  
  // convert chosen img to base64
  reader.readAsDataURL(chosenImg);
});


function formatBalance(balance) {
  // comma-seperated digits
  balance = balance.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
  return balance;
}


function verifyPin() {
  if (pinInput.value !== pin) {
    alert("Wrong PIN!");
    return;
  } 
  else {
    pinSection.style.display = "none";
    bankDiv.style.display = "block";

    const savedProfileImg = localStorage.getItem("VirtualBankProfileImg");
    profileImgDisplay.src = savedProfileImg || "DefaultProfile.png";

    const savedFullName = localStorage.getItem("FullName");
    fullNameDisplay.textContent = savedFullName || "No Name";

    let savedBalance = JSON.parse(localStorage.getItem("balance"));
    // assign balance to savedBalance only if savedBalance is a valid number otherwise assign 0
    balance = typeof savedBalance === "number" && !isNaN(savedBalance) ? savedBalance : 0;

    balanceDisplay.textContent = formatBalance(balance);
  }
}


class Withdraw {
  static openDiv() {
    bankDiv.style.display = "none";
    withdrawDiv.style.display = "block";
  }
  
  static confirmAction() {
    const withdrawAmount = Number(withdrawAmountInput.value);
    
    if (withdrawAmount < 1 || isNaN(withdrawAmount)) {
      alert("Enter valid withdraw amount!");
      return;
    }
    if (withdrawAmount > balance) {
      alert(`Withdraw amount can't be higher than your balance! Your balance is ${formatBalance(balance)}`);
      return;
    }
    
    const confirmWithdraw = confirm(`Withdraw ${withdrawAmount} from your balance of ${balance.toFixed(2)}?`);
    
    if (confirmWithdraw) {
      balance -= withdrawAmount;
      balanceDisplay.textContent = formatBalance(balance);
      localStorage.setItem("balance", JSON.stringify(balance));
      
      withdrawAmountInput.value = "";
      withdrawDiv.style.display = "none";
      bankDiv.style.display = "block";
    }
  }
  
  static cancel() {
    const confirmCancel = confirm("Cancel withdrawal? You will exit the page.");
    
    if (confirmCancel) {
      withdrawAmountInput.value = "";
      withdrawDiv.style.display = "none";
      bankDiv.style.display = "block";
    }
  }
}


class Deposit {
  static openDiv() {
    bankDiv.style.display = "none";
    depositDiv.style.display = "block";
  }
  
  static confirmAction() {
    const depositAmount = Number(depositAmountInput.value);
    
    if (depositAmount < 1 || isNaN(depositAmount)) {
      alert("Enter valid deposit amount!");
      return;
    }
    if (depositAmount > 1000000) {
      alert("You can't deposit more than 1 million!");
      return;
    }
    
    const confirmDeposit = confirm(`Deposit ${depositAmount} to your balance of ${formatBalance(balance)}?`);
    
    if (confirmDeposit) {
      
      // balance limit
      if (balance > 99000000) {
        alert("99 million is the balance limit! Consider your deposit amount.");
        return;
      }
      
      balance += depositAmount;
      balanceDisplay.textContent = formatBalance(balance);
      localStorage.setItem("balance", JSON.stringify(balance));
      
      depositAmountInput.value = "";
      depositDiv.style.display = "none";
      bankDiv.style.display = "block";
    }
  }
  
  static cancel() {
    const confirmCancel = confirm("Cancel deposit? You will exit the page.");
    
    if (confirmCancel) {
      depositAmountInput.value = "";
      depositDiv.style.display = "none";
      bankDiv.style.display = "block";
    }
  }
}


class EditAccount {
  static openDiv() {
    bankDiv.style.display = "none";
    editAccDiv.style.display = "block";
    
    // preview saved img
    const savedProfileImg = localStorage.getItem("VirtualBankProfileImg");
    profileImgPreviewDisplay.src = savedProfileImg || "DefaultProfile.png";
  }
  
  static formatName(firstName, lastName) {
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    
    return `${firstName} ${lastName}`;
  }
  
  static saveChanges() {
    const firstName = String(firstNameInput.value);
    const lastName = String(lastNameInput.value);
    
    if (firstName.trim() === "" || lastName.trim() === "") {
      alert("Enter both names!");
      return;
    }
    if (firstName.length > 20 || lastName.length > 20) {
      alert("20 characters is the limit!");
      return;
    }
    
    alert("Profile has been updated!");
    
    fullNameDisplay.textContent = EditAccount.formatName(firstName, lastName);
    localStorage.setItem("FullName", fullNameDisplay.textContent);

    const savedProfileImg = localStorage.getItem("VirtualBankProfileImg");
    profileImgDisplay.src = savedProfileImg || "DefaultProfile.png";
    
    editAccDiv.style.display = "none";
    bankDiv.style.display = "block";
  }
  
  static cancel() {
    const cancelEditAcc = confirm("Cancel account editing? You will exit the page.");
    
    if (cancelEditAcc) {
      firstNameInput.value = "";
      lastNameInput.value = "";
      
      editAccDiv.style.display = "none";
      bankDiv.style.display = "block";
    }
  }
}