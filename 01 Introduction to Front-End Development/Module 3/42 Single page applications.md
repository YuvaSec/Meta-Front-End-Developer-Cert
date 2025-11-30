# Understanding SPAs

- SPAs provide a user-friendly and mobile-friendly experience by loading a single HTML page that updates dynamically as users interact with the application.
- Unlike traditional websites that reload entire pages, SPAs only update the necessary content, resulting in a faster and more responsive browsing experience.

# Resource Delivery Methods

- There are two main approaches for serving resources in SPAs: bundling and lazy loading.
- Bundling loads all necessary HTML, CSS, and JavaScript at once, while lazy loading only fetches the minimum required resources initially, downloading additional content as needed.

# Efficiency in User Interaction

- In SPAs, user interactions, such as clicking a button, can result in fetching data (like a movie suggestion) without reloading the entire page, making the experience more efficient.
- For applications with multiple views, SPAs use templates to update content dynamically, sending only the required data (e.g., user profile information) instead of entire pages.

# Choosing Between SPAs and Traditional Applications

- Developers should consider the complexity and bandwidth requirements of their applications when deciding between a traditional multi-page application and an SPA.
- SPAs can either deliver all resources immediately or load them dynamically, impacting performance based on the application's needs.