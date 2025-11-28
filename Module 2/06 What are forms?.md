
# Understanding HTML Forms

- **HTML forms allow users to submit data to a server via an HTTP request.**
- Forms are defined using the 
	- `<form>` tag, with an optional 
	- `action` attribute specifying the submission URL.

## Form Input Types

- Various input types can be used, including 
	- text fields, 
	- password fields, 
	- checkboxes, and 
	- radio buttons.

## Creating User-Friendly Forms

- Labels can be added using the 
	- `<label>` tag to enhance usability.
- A submit button is created with the 
	- `submit` input type, 
	- which sends the form data to the server upon clicking.


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
	    <!-- ANCHOR TAG -->
        <a href="location.html">Our Location</a>  
        <!-- TABLES -->
        <table>  
		    <tr>        
			    <th>Dish</th>  
		        <th>Price</th>  
		    </tr>    
		    <tr>        
			    <td>Falafel</td>  
			    <td>$10.00</td>  
		    </tr>    
		    <tr>        
			    <td>Pasta Salad</td>  
		        <td>$12.00</td>  
		    </tr>
		</table>
		
    </body>
</html>
```

# Form Action (imp) ![[Form - action.mp4]]
# Form Methods (imp)![[form method.mp4]]
# Form Input![[Form input.mp4]]
# Form CheckBox![[Form checkbox.mp4]]
# Form Radio & Other input types
![[form radio and other inputs.mp4]]

# Form Textarea & Select.![[form textarea and select.mp4]]
