A simple React app to browse products, add them to a cart, switch between grid/table views, and persist cart items using localStorage.
Setup Instructions:
Clone the repo:git clone https://github.com/Jay8303/product-cart-app.git;      cd react-cart-app;
Install dependencies: npm install
Run the app: npm start
The app will be available at http://localhost:3000

Approach:

Product Fetching: Products are fetched from DummyJSON API once on component mount.

Views: Users can toggle between grid and table views using the header toggle.

Cart Functionality:

        Items can be added multiple times (increasing quantity).

        Cart state is saved in localStorage to persist on reloads.

        Total price and quantity are calculated and displayed in the cart view.

Search: A search bar filters products by title in real-time.


Assumptions:

The product thumbnail, title, price, and stock fields are always available from the API.
All products are considered "addable" regardless of stock value.
Cart removal/editing is limited to increasing quantity (removal would be implemented later).
