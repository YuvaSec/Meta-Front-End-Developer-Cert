
# Bootstrap Components Overview

- Bootstrap provides a set of pre-made UI elements and styles, known as components, to streamline website development.
- Examples of components include alert messages, navigation menus, and card elements for displaying content.

Implementing a New Dish on a Menu in Lesson 2.

- The example involves adding a new dish, "Fried Calamari," to a restaurant's menu, including its ingredients and an image.
```html
<div class="col-12 col-lg-6">
	<h2>Fried Calamari</h5>  
	<p>Squid, buttermilk.</p>  
	<img 
	src="assets/Fried%20Calamari.jpeg" 
	alt="Fried Calamari" 
	class="img- rounded"/>  
</div>
```
- A badge component is used to highlight the dish as "new," utilizing Bootstrap's contextual classes for styling.
```html
<h5 class="card-title">Fried Calamari 
	<span class="badge bg-success">New</span>
</h5>
```

Improving Visual Layout with Cards
- Card components are introduced to improve the visual presentation of each dish, allowing for better organization of titles, images, and descriptions.
```html
<div class="card">  
    <img 
    src="assets/Fried%20Calamari.jpeg" 
    alt="Fried Calamari" 
    class="card-img-top rounded"/>  
    <div class="card-body">  
        <h5 class="card-title">Fried Calamari 
	        <span class="badge bg-success">New</span>
        </h5>  
        <p class="card-text">Squid, buttermilk.</p>  
    </div>
</div>
```
- Responsive design is achieved by using Bootstrap's grid system, ensuring the layout adapts to different screen sizes.
```html
<h1>Our Menu</h1>
<div class="row">
  <div class="col-12 col-lg-6">
    <div class="card">
      <img src="assets/Fried%20Calamari.jpeg" 
      alt="Fried Calamari" class="card-img-top rounded" />
      <div class="card-body">
        <h5 class="card-title">Fried Calamari 
	        <span class="badge bg-success">New</span></h5>
        <p class="card-text">Squid, buttermilk.</p>
      </div>
    </div>
  </div>
  <div class="col-12 col-lg-6">
    <div class="card">
      <img src="assets/Falafel_balls.jpeg" 
      alt="Falafel" class="card-img-top rounded" />
      <div class="card-body">
        <h5 class="card-title">Falafel</h5>
        <p class="card-text">Chickpea, Herbs and Spices.</p>
      </div>
    </div>
  </div>
  <div class="col-12 col-lg-6">
    <div class="card">
      <img src="assets/salad.jpeg" 
      alt="Pasta Salad" class="card-img-top rounded" />
      <div class="card-body">
        <h5 class="card-title">Pasta Salad</h5>
        <p class="card-text">Lettuce, vegetables and mozzarella.</p>
      </div>
    </div>
  </div>
</div>
```
![[Screenshot 2025-11-28 at 19.14.58.png]]

Final Touches and Alerts
- The price for the new dish is added to a table, and an alert component is included to inform customers about the new offering.
- The alert is styled using Bootstrap classes to enhance visibility and user engagement.
```html
</table>  
<div class="alert alert-info" role="alert">  
        Try our new Calamari dish!  
</div>
```
![[Screenshot 2025-11-28 at 19.18.29.png]]
