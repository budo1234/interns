
function openTab(tabName) {
  var i, tabContent;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

// Calculate and update cart values
document.getElementById("booking-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var roomType = document.getElementById("room-type").value;
  var checkInDate = new Date(document.getElementById("check-in").value);
  var checkOutDate = new Date(document.getElementById("check-out").value);
  
  // Calculate price based on room type and duration
  var pricePerNight;
  switch (roomType) {
    case "single":
      pricePerNight = 100;
      break; 
    case "double":
      pricePerNight = 150;
      break;
    case "suite":
      pricePerNight = 250;
      break;
    default:
      pricePerNight = 300;
  }
  var numberOfNights = Math.floor((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
  var roomPrice = pricePerNight * numberOfNights;
  
  // Calculate VAT and total
  var vat = roomPrice * 0.15;
  var total = roomPrice + vat;
  
  // Update cart values
  document.getElementById("room-price").textContent = "Room Price: $" + roomPrice;
  document.getElementById("vat").textContent = "VAT (15%): $" + vat;
  document.getElementById("total").textContent = "Total: $" + total;
});

// Simulate payment processing
document.getElementById("booking-form").addEventListener("submit", function(event) {
  event.preventDefault();
  setTimeout(function() {
    alert("Payment processed successfully!");
  }, 2000);
});