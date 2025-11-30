
# HOW CAN BIG WEBSITE LOAD SOO QUICK?![[Intro how react works.mp4]]

# Understanding React's Virtual DOM (RECONCILIATION)
![[Reconciliation.mp4]]

**Step 1:** The virtual DOM is updated.

**Step 2:** The virtual DOM is compared to the previous version of the virtual DOM and checks which elements have changed.

**Step 3:** The changed elements are updated in the browser DOM.

**Step 4:** The displayed webpage updates to match the browser DOM.

# Reconciliation Process
- React updates the virtual DOM first and then compares it to the previous version to identify changes.
- Only the changed elements are updated in the browser DOM, minimizing performance costs.



# Benefits of Using REACT Virtual DOM (HOW IT WORKS)
![[How react works.mp4]]

- This approach ensures that applications remain fast and responsive to user interactions.
- By avoiding unnecessary updates to the entire page, React enhances user experience.