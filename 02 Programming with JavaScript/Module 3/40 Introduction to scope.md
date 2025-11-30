

# Understanding Scope
![[index 7.mp4]]
#important Think of scope as==`two-way Mirror`== at Resturant, People outside can't see whats happening inside but the people inside can see whats happening outside 

# Types of Scope
- The two main types of scope discussed are 
	- Global scope (accessible throughout the code) and 
	- Local scope (restricted to the function where it is defined).
- Global scope refers to code outside of functions, while local scope pertains to variables defined within a function.
![[Screenshot 2025-11-30 at 12.54.40.png]]

# Scope Chain
![[Screenshot 2025-11-30 at 12.56.42.png]]
- Each function maintains a reference to its parent scope, creating a chain known as the scope chain.
- This chain allows functions to access variables from their parent scopes, similar to a two-way mirror where one side can see through while the other cannot.


