## Installation

1. Clone the repository 
2. Navigate to the project directory
3. Install dependencies: `npm install`
4. Start the JSON server: `json-server --watch products.json --port 3000`
5. Start the Angular application: `ng serve`

## users & roles
- user/user to only dipslay the products
- admin/admin to add/edit/remove products

## Known Bugs and Improvements

### Known Bugs

1. **The sidenav does not update after user login**:
   - Description: When the user logs in, the sidebar navigation (sidenav) does not automatically update to reflect the login state.
   - Steps to reproduce:
     1. Log out of the application.
     2. Log back in as a user.
     3. Notice that the sidenav does not reflect the login state without a page reload. (admin item menu doesn't appear automatically)
   - Expected behavior: The sidenav should automatically update after the user logs in.

2. **Interface: The product modification and addition dialog needs improvement**:
   - Description: The dialogs for modifying and adding products are not intuitive or user-friendly.
   - Steps to reproduce:
     1. Go to the products page.
     2. Click the button to modify a product.
     3. Observe the interface issues in the modification dialog.
     4. Repeat for adding a new product.
   - Expected behavior: The modification and addition dialogs should be clear, intuitive, and easy to use.

3. **The display of the product list is not responsive**:
   - Description: The product list does not display correctly on different screen sizes.
   - Steps to reproduce:
     1. Access the products page.
     2. Resize the browser window to different screen sizes (e.g., mobile, tablet, desktop).
     3. Notice that the product list layout does not adapt properly.
   - Expected behavior: The product list should be responsive and display correctly on all screen sizes.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Json server

Run `npm install -g json-server` to mock backend using json-server.
Run ` json-server --watch src/assets/products.json --port 3000` to mock a json-server

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## serve a Build

$ npm i -g serve
$ cd dist/product-trial
\$ serve

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
