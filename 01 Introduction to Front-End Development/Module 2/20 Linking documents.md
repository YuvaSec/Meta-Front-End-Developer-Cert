
# Creating Links Between Webpages:

- We learned how to link different webpages together to form a complete website. 
- Think of a website like a book, where each webpage is a page in that book. 
- To move from one page to another, we use something called an 
	- anchor tag, 
	- which creates **hyperlinks**. 
- These links allow users to click and jump to different pages, just like flipping to a new page in a book.

# For example, 
- if you have a webpage about a restaurant, you might want to create another page that shows the restaurant's location. 
- You would create a new file for the location and then add a link on the restaurant page that says "Our Location." 
- When someone clicks on that link, they are taken directly to the location page. 
- This makes it easy for visitors to navigate your website and find the information they need!


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
        <h2>Pasta Salad</h2>  
            <p>Lettuce, vegetables and mozzarella.</p>  
            
        <a href="location.html">Our Location</a>
    </body>
</html>
```

# location.html
```html
<!DOCTYPE html>  
<html lang="en">  
    <head>        
	    <meta charset="UTF-8">  
        <title>little Lemon</title>  
    </head>    
    <body>       
	    <h1>Our Location</h1>  
	        <p>123 Home Road, Main District, Capital City.</p>  
    </body>
</html>
```