document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("enquiryForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const location = document.getElementById("location").value;
        
        let isValid = true;

        // Validate Full Name
        if (fullname.legth < 3) {
            alert("Full Name must be at least 3 characters long.");
            isValid = false;
        }
        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }
        // Validate Phone Number
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            isValid = false;
        }
        // Validate Location
        if (location === "") {
            alert("Please select a location.");
            isValid = false;
        }

        // If all validations pass, submit the form
          if (isValid) { alert("Thank you " + fullName + "! Quote request sent for " + location);form.reset();
  }
        }
    });
});