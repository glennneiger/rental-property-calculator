# Rental Property Calculator

[Website](https://secure-plateau-58035.herokuapp.com/)

## Description

Rental Property Calculator is a web app that is useful for analyzing rental properties for investing purposes. It allows you to see your property's value, cash flow, equity buildup, return on investment, return on equity, and cash on cash return for years during your mortgage and after the property is paid off.

The application has a login system to save and view your analysis in the future.

Eventually the calculator will also support exporting analyses in Excel and PDF formats and further flexibility in how the user can analyze their rental properties.

The front end tech stack includes [React](https://github.com/facebook/react), [Redux](https://github.com/reduxjs/redux), [Webpack](https://github.com/webpack/webpack), and [Babel](https://github.com/babel/babel).

The server is written using [Express](https://github.com/expressjs/express).

Testing is done using [Jest](https://github.com/facebook/jest) and [Chai](https://github.com/chaijs/chai).

## How to run

1. Clone or download this repository.  Navigate to the project root.
2. Install dependencies: `npm i`
3. In one terminal window, start the server: `npm run start`
4. In another terminal window, start the client: `npm run client`


## Testing

Run tests: `npm test`

Tests can also be run and debugged inside VS Code using the **vscode-jest-tests** configuration (open the Debug panel from the Activity Bar and select that configuration in the dropdown at the top).