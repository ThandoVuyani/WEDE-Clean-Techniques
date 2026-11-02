Task 2 

This is a website I created for my WEDE POE Task 1 & 2. The company is called Clean Techniques. They do eco friendly cleaning services for homes and businesses.

The goal was to make a simple website with 5 pages that looks professional and works on GitHub Pages.

Pages in the website
The website has 5 pages:
1.  Index.html (Home Page) - Has a hero image and welcome message
2. About.html (About Us) - Information about the company
3. Services.html (Services) - The 3 services we offer
4. Enquiry.html (Enquiry) - A form for customers to ask for a quote
5. Contact.html (Contact) - Our phone number, email and location

Features
	•	Navigation bar on all pages
	•	Hero image on the home page
	•	Service cards using CSS Grid
	•	Contact form
	•	Responsive layout for mobile
	•	Logo and images

Folder Structure
WEDE-Clean-Techniques

 index.html
 about.html
 services.html
 enquiry.html
 contact.html
 styles.css (main stylesheet)
 README.md
         images/
             Hero.jpeg (hero image)
			 hero2.jpeg
             logo.png (company logo)
			

# Changelog
30 Oct - 02 Nov 2026 - Form Validation & Dynamic Maps
Fixed - Enquiry Form Bypass Bug (Friday):

Form accepted invalid input like 11 for Full Name but still showed “Thank you”.
Root cause: main.js had a duplicate document.querySelector("form").addEventListener("submit") that called buttonSubmitted() with zero validation, hijacking enquiry.js.
Fix: Deleted form listener from main.js. main.js now only contains console.log and alert(). Changed prompt() to alert().
Added - Full Validation in enquiry.js:

Added novalidate to <form> to disable browser bubbles.
Implemented regex validation with error array:
Full Name: /^[A-Za-z ]{3,}$/ - min 3 letters only
Email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
Phone: /^\d{10}$/ - 10 digits
Location/Message: required
Logic: If errors exist -> alert("FIX THESE:\n" + errors.join("\n")) and stop submission. If pass -> Thank you [Name]. Quote request sent for [Location].
Test Result: 11 now blocks, Thando Shongwe / Johannesburg now passes and shows personalized alert.
Changed - Map Moved from HTML to JavaScript (Monday):

Requirement: Map must not be hard-coded in HTML.
Deleted static <iframe> from contact.html lines 52-60.
Replaced with placeholder: <div class="map-wrapper" id="map-wrapper"></div>.
Created maps.js to inject map dynamically via createElement() and appendChild() on DOMContentLoaded.
Converted user-provided Bing Maps location to Google Maps Embed:
Location: 158 5th Street, Sandton City
Coords: -26.108084, 28.052608
Embed SRC: https://maps.google.com/maps?q=-26.108084,28.052608&z=16&output=embed
Result: Map is now loaded from JavaScript, not HTML, showing Sandton branch.
Files Updated: main.js, enquiry.js, enquiry.html, contact.html, maps.js (new)

Technologies Used
* HTML5 - for the structure of the website
* CSS3 - for styling, colours and layout
* Git & GitHub - for version control
* GitHub Pages - to host the website online
