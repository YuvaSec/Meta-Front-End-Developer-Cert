# Setting Up the Layout

- Begin by adding container elements using HTML divs and applying the Bootstrap container CSS class.
- Create a row for content with another div using the row CSS class, and add two columns for menu items and prices using divs with the col CSS class.

Adding Content

- In the first column, add headings for the menu items and list dishes with their ingredients and images using H2 and paragraph tags.
- Use the IMG tag with the SRC attribute to link images, applying the IMG-fluid class to ensure proper scaling.

Creating a Price Table

- Under the price column, add an HTML table with the Bootstrap table class, including rows for each dish and their prices using table row (tr) and table data (td) tags.
- Save and preview the webpage to see the structured layout and styled table using Bootstrap.


```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>little Lemon</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    </head>

    <body>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>Our Menu</h1>
                    <h2>Falafel</h2>
                    <p>Chickpea, Herbs and Spices.</p>
                    <img 
                    src="assets/Falafel_balls.jpg" 
                    alt="Falafel" class="img-fluid"/>
                    <h2>Pasta Salad</h2>
                    <p>Lettuce, vegetables and mozzarella.</p>
                    <img 
                    src="assets/salad.jpeg" 
                    alt="Pasta Salad" class="img-fluid"/>
                    <a href="location.html">Our Location</a>
                </div>
                <div class="col">
                    <h2>Prices</h2>
                    <table class="table">
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
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
    </body>
</html>

```


css bootstrap:
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
```
js bootstrap:
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
```

https://getbootstrap.com/
