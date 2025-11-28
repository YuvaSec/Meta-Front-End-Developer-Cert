# Adding Images in HTML

- The image tag (IMG) is used to link to image files, creating a placeholder for images on a webpage.
- The source attribute (src) specifies the path to the image file, such as "falafel.jpeg" and "salad.jpeg".

# Setting Image Size

- You can set the dimensions of an image using the width and height attributes directly in the image tag.
- For example, setting width to 240 pixels and height to 135 pixels adjusts the image size appropriately.

# Improving Accessibility

- It is important to include alternative text (alt attribute) for images, which aids accessibility for users with assistive technologies.
- The alt text is not displayed on the site but is read by screen readers, providing context for visually impaired users.


# index.html
```html
<!DOCTYPE html>  
<html lang="en">  
    <head>        
	    <meta charset="UTF-8">  
        <title>little Lemon</title>  
    </head>    
    <body>        
	    <h1>Our Menu</h1>  
        <h2>Falafel</h2>  
            <p>Chickpea, Herbs and Spices.</p>  
            <img src="assets/Falafel_balls.jpg" 
            width="240" height="135"  alt="Falafel">  
        <h2>Pasta Salad</h2>  
            <p>Lettuce, vegetables and mozzarella.</p>  
            <img src="assets/salad.jpeg" 
            width="240" height="135" alt="Pasta Salad">  
            
        <a href="location.html">Our Location</a>  
    </body>
    </html>
```