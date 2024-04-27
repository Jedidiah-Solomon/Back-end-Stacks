# NOIRUNITED INTERNATIONAL WEBSITE DETAILS

### DNS DETAILS

URL: [Domain Name](https://noir-united.org/)
**IP Address: 154.62.106.206, 191.96.144.15, 84.32.84.219 etc.
**Name Servers:\*\* ns1.dns-parking.com, ns2.dns-parking.com

### CSS STYLE AND TYPOGRAPHY

--Primary color: #5B2E23
--Secondary color: #FFFFFF
--Text color: #FFFFFF $ #000000
-- Font Family: Lora

### PLUGINS

#### INSTALLED AND USED

- Royal - Theme
- Elementor - Page Bulider
- GTRANSLATE - Multi-lingual Translator
- Depicter -Slider Media
- MC4WP - For Mailchimp form
- Contact Form 7 - Additional Forms
- Ultimate Addons For Contact Forms - Database for wordpress forms, or connect Contact Form 7 with Mailchip
- Redirection - For redirction of URL by John Godley

#### NOT INSTALLED YET

- Rank Math - SEO (Needs Google My BUSINESS LISTING)
- GiveWP or Forminator or Paypal – Donation Plugin and Fundraising Platform

Mailchip key from my account
da7ec9c08b3d26338a4d44817a95bbc4-us10

### Mailchimp Form

#### /_ HTML _/

````
<script src="https://kit.fontawesome.com/46951e84a1.js" crossorigin="anonymous"></script>


<div class="contact-container">
        <div class="contact-left">

            <div class="contact-left-title">
                <h2>Get regular updates from us</h2>
                <hr>
            </div>

            <input type="text" name="FName" placeholder="Your Name" class="contact-inputs" required>
            <input type="email" name="EMAIL" placeholder="Your Email" class="contact-inputs" required>
            <textarea name="message" placeholder="Your Message" class="contact-inputs" required></textarea>
            <button type="submit" id="submit-btn">Subscribe <img src="https://noir-united.org/wp-content/uploads/   2024/03/arrow_icon.png" alt="">
            </button>

            <span class="social-icons">
               <a href="https://www.facebook.com/NoirUnited" target="_blank"> <i class="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/NoirUnitedIntl" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.youtube.com/channel/UCI0h0BheK6NuNLq5LseAh3g/videos" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                <a href="https://www.instagram.com/noirunited/?hl=en" target="_blank"><i class="fa-brands fa-instagram"></i></a>

            </span>

        </div>

        <div class="contact-right">
            <img src="https://noir-united.org/wp-content/uploads/2024/03/right_img.png" alt="">

        </div>
    </div>
```


#### /* CSS */
 ```
.contact-container {
    font-family: 'outfit';
    background: linear-gradient(#ffdad5, #fff7f9 );
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.contact-left {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
}

.contact-left-title h2 {
   font-weight: 600;
   color: #5B2E23;
   font-size: 40px;
   margin-bottom: 5px;
}

.contact-left-title hr {
    border: none;
    width: 120px;
    height: 5px;
    background-color: #5B2E23;
    border-radius: 10px;
    margin-bottom: 20px;
}

.contact-inputs {
    width: 400px;
    height: 50px;
    border: none;
    outline: none;
    padding-left: 25px;
    font-weight: 500;
    color: #666;
    border-radius: 50px;
}

.contact-inputs:focus{
    border:2px solid #ff994f;
}

.contact-inputs::placeholder {
    color: #a9a9a9 ;
}

.contact-left textarea {
    height: 140px;
    padding-top: 15px;
    border-radius: 20px;
    resize: none;
}

.contact-left button {
    display: flex;
    align-items: center;
    padding: 15px 30px;
    font-size: 16px;
    color: #fff;
    gap: 10px;
    border: none;
    background: linear-gradient(270deg, #ff994f, #fa6d86);
    cursor: pointer;
    transition: border-radius 0.3s ease, opacity 0.3s ease;
}

.contact-left button:hover {
    opacity: 0.7;
    border-radius: 50px;
    background-color: #5B2E23 !important; color: #ffffff !important;
}

.contact-left button img {
    height: 15px;
}

.contact-right img {
    width: 500px;
}


.contact-left span {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 15px;
    font-size: 28px;
}

.contact-left span a .fa-facebook {
    color: rgb(49, 49, 101);
}

.contact-left span a .fa-x-twitter {
    color: #000000;
}

.contact-left span a .fa-youtube {
    color: red;
}

.contact-left span a .fa-instagram {
    color: black;
}

@media (max-width:800px) {
    .contact-inputs {
        width: 80vw;
    }
    .contact-right {
        display: none;
    }
    .contact-left-title h2 {
        font-size: 30px;
    }
}

````

### Contac Form 7 Form

```
<label>First Name
    [text* first-name autocomplete:name]
</label>

<label>Last Name
    [text* last-name autocomplete:name]
</label>

<label>Email
    [email* your-email autocomplete:email]
</label>

<label>Subject
    [text* your-subject]
</label>

<label>Message (optional)
    [textarea your-message]
</label>

[submit "Submit"]
```

#### /_ CSS _/

##### /_ Work With Us Form _/

```
/* Add bottom border with your color to all input fields */
.wpcf7-form input[type="text"],
.wpcf7-form input[type="email"],
.wpcf7-form textarea {
    border: none;
    border-bottom: 1px solid #5B2E23; /* Your color */
    transition: border-bottom 0.3s ease; /* Add transition for smooth effect */
}

/* Add full border with your color on focus */
.wpcf7-form input[type="text"]:focus,
.wpcf7-form input[type="email"]:focus,
.wpcf7-form textarea:focus {
    border-bottom: 2px solid #5B2E23; /* Your color */
}


/* Style the submit button */
.wpcf7-form input[type="submit"] {
    border-radius: 0; /* Border radius of 50px */
    background-color: #5B2E23; /* Your color */
    color: #FFFFFF; /* Text color */
    padding: 10px 20px; /* Increase padding to add space */
    cursor: pointer; /* Cursor style */
    border: none; /* Remove border */
    transition: all 0.3s ease; /* Smooth transition */
    margin-top: 20px; /* Add margin-top to create space */
}


/* Hover effect for the submit button */
.wpcf7-form input[type="submit"]:hover {
    opacity: 0.7; /* Reduce opacity */
}

/* Add a 2px solid border to the form */
.wpcf7-form {
    border: 2px solid #5B2E23; /* Border color */
    padding: 20px; /* Add padding for better spacing */
}



/* Adjust margin or padding for the text area */
.wpcf7-form textarea {
    margin-top: 10px; /* Example margin-top */
    padding: 10px; /* Example padding */
    height: 70px; /* Example height */
    resize: vertical; /* Allow vertical resizing */
}
```

#### Side Bar Styles

```
a.wp-block-latest-posts__post-title {
    color: #5B2E23;
    font-weight: 700;
    text-decoration: underline;
}

.wp-block-search__inside-wrapper {
  position: relative;
  width: 100%;
}
.wp-block-search__input {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 100px;
  padding: 10px 100px 10px 20px;
  line-height: 1;
  box-sizing: border-box;
  outline: none;

}
.wp-block-search__button {
  position: absolute;
  right: 3px;
  top: 3px;
  bottom: 3px;
  border: 0;
  background: #5B2E23 !important;
  color: #fff;
  outline: none;
  margin: 0;
  padding: 0 10px;
  border-radius: 50px !important;
  padding: 0 20px !important;
  z-index: 2;

}


ul.wp-block-social-links  {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: -25px;
}

li.wp-social-link svg {
    height: 80px;
    width: 50px;

}


li.wp-social-link-facebook  {
color: blue !important;
}

li.wp-social-link-facebook path  {
fill: blue;
}

li.wp-social-link-instagram  path  {
fill: #000000;
}

li.wp-social-link-twitter  path  {
fill: #000000;
}

li.wp-social-link-youtube  path  {
fill: red;
}
```

### Fluent code Snippet added to theme to add side bar

```
function my_custom_sidebar() {
	register_sidebar(
		array (
			'name' => __( 'Custom Sidebar Area', 'your-theme-domain' ),
			'id' => 'custom-side-bar',
			'description' => __( 'This is the custom sidebar that you registered using the code snippet. You can change this text by editing this section in the code.', 'your-theme-domain' ),
			'before_widget' => '<div class="widget-content">',
			'after_widget' => "</div>",
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>',
		)
	);
}
add_action( 'widgets_init', 'my_custom_sidebar' );

```

##### Mailchimp API = da7ec9c08b3d26338a4d44817a95bbc4-us10 /_ For the "Work With Us" form_/

##### QUESTIONS TO BE ANSWERED

1. Donate gateway and link - Done
2. Newsletter and work with us forms - Done
3. Map address for the Atlanta GA Map if available - Done
4. Store - Done
5. Blog - Done
6. Social Media of Leadership Facebook, Linkedin and Twitter - Done

### NEW QUESTIONS

1. Let all links in the donation page link to the new page
