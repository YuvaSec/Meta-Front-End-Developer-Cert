
# Bootstrap Grid System

- Bootstrap utilizes a 12-column grid system to structure web page layouts with containers, rows, and columns.
![[Screenshot 2025-11-28 at 17.53.36.png]]

- The grid system allows for fluid or fixed layouts, adapting to different screen sizes.
![[Screenshot 2025-11-28 at 17.54.46.png]]



# Syntax structure 
![[Screenshot 2025-11-28 at 17.55.25.png]]
![[Screenshot 2025-11-28 at 17.57.53.png]]


## Responsive Design with Breakpoints

- Developers can control column widths using suffixes to specify how many column spaces each element should occupy.
- Breakpoint-specific CSS rules enable different layouts for mobile and desktop devices, ensuring content is displayed appropriately.

Practical Application

- An example demonstrates how to set up a responsive layout using Bootstrap, showcasing how columns can stack on mobile devices and display side by side on larger screens.
- The use of developer tools allows for testing and simulating different device views, highlighting Bootstrap's efficiency in responsive design.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>little Lemon</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    </head>
    <style>
        body{
            background-color: #F8F8F8;
        }
    </style>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-7">
                    <h1>Our Menu</h1>
                    <h2>Falafel</h2>
                    <p>Chickpea, Herbs and Spices.</p>
                    <img src="assets/Falafel_balls.jpeg" 
                    alt="Falafel" class="img-fluid rounded"/>
                    <h2>Pasta Salad</h2>
                    <p>Lettuce, vegetables and mozzarella.</p>
                    <img src="assets/salad.jpeg" 
                    alt="Pasta Salad" class="img-fluid rounded"/>
                </div>
                <div class="col-12 col-lg-5">
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

![[Screenshot 2025-11-28 at 18.21.13.png]]![[Screenshot 2025-11-28 at 18.21.32.png]]
