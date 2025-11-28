

# Element Selectors
```css
'<p>Once upon a time...</p>'

p {
	color: blue;
}
```

# ID Selectors
```css
'<span id="latest">New!</span>'

#latest {
	background-color: purple;
}
```

# Class Selectors
```css
'<a class="navigation">Go Back</a>'
'<p class="navigation">Go Forward</p>'

p.introduction {
	margin: 2px;
}
```

# Descendant Selectors
```html
<div id="blog">
	<h1>Latest News</h1>
	<p>Subscribe for more news</p>
	<div>
		<h1>Today's Weather</h1>
		<p>The weather will be sunny</p>
	</div>
</div>

<div>
	<h1>Archives</h1>
</div>
```

```css
#blog h1 {
	color: blue;
}
```
![[Screenshot 2025-11-28 at 13.05.02.png]]

---
# Child Selectors
```html
<div id="blog">
	<h1>Latest News</h1>
	<div>
		<h1>Today's Weather</h1>
		<p>The weather will be sunny</p>
	</div>
	<p>Subscribe for more news</p>
</div>
```

```css
#blog > h1 {
	color: blue;
}
```
![[Screenshot 2025-11-28 at 13.07.05.png]]

---
# :hover Pseudo-Class

```css
a:hover {
	color: orange;
}
```

