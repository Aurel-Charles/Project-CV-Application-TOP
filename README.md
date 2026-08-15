# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and `[typescript-eslint](https://typescript-eslint.io)` in your project.

# template-react-app

Create a new React project.
Think about how to structure your application into components. Your application should include:
A section to add general information like name, email and phone number.
A section to add your educational experience (school name, title of study and date of study)
A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
Be sure to include an edit and submit button for each section or for the whole CV. The submit button should submit your form and display the value of your input fields in HTML elements. The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy use of state and props, so make sure you understood those concepts.
Create a components directory under your src directory and add your components.
Include a styles directory under your src directory for your CSS files. You’ll need to import these in the component files to use them.
Push the results and deploy them with any of the options mentioned below. At this point of the curriculum, it doesn’t matter which platform you choose as long as your project is live on the internet!