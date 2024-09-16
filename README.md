# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





      notes:---
// jsk is a combination of html and javascript
// real mechanism of creating react element
//React.createElement('h2',null,"saumya is a boy");

// reactcreateElement---> react virtual DOM/element ---->DOM
// each jsx expresion must have a one parent element , whic means if u trying to return multiple element react will throw error
// every jsx tags needs to be closed you can self-closing tags for elements that donot have a children  eg img tag

// component is a function that return jsx.
// types of components ---> class based components are outdated  function based components are used now a days 


// component--->
/*const Netflixseries=()=>{
  <div>
    <div>
      saumya
    </div>
    <div>harsh</div>
 
  </div>
}

//react fragment--> <>  block of code   </>*/
// you can add any variable of your component in jsx using {}syntax
/* variable--> you can add any javascript variable with in jsx using curely braces{} the balue 
of the variable will be inserted into the DOM at the respective location.
 Expressions --> jsx allows you to write js expressions inside curely braces{} this inclyudes operations ,
 functions calls and other javascript expressions that produce a value*/ 
 // using function also--->
 /* const Netflixseries = () => {
  const name = "chandu"
  const fun =()=>{
    const n="saa";
    return n; 
  }
  return (

    <div>
      <div><h1>saunya {name} {1+2+3} </h1></div>
      <div><h2>Saumya {fun()}</h2></div>
    </div>
  );
}; 

dynamic values in react-->
you can use either a jsx esrly you use ternary operator for conditionals in ract
<button>{age>=18?"watch now":"not available"}</button>*/

/*const canwatch=()=>{
  if(age>=18)return "watch now";
  return "not available";
}--> using function */

//basic greeting machine-->
/*function Greeting() {
  // Function to get greeting based on the current time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Good Morning';
    } else if (hour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const name = event.target.elements.name.value;
    const greetingMessage = name ? `${getGreeting()} ${name}!` : `${getGreeting()} Guest!`;
    document.getElementById('greeting').innerText = greetingMessage;
  };

  return (
    <div>
      <h1 id="greeting">{getGreeting()} Guest!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
      <p id="conditionalMessage">Please enter your name to receive a personalized greeting.</p>
    </div>
  );
}

export default Greeting;*/

/* display the color
const ColorForm = () => {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the form from reloading the page
    const getColor = document.getElementById('colorInput').value;
    console.log(getColor); // Log the input value or use it as needed
  };

  return (
    <div>
      <h1>Enter a Color</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="colorInput">Color:</label>
        <input
          id="colorInput"
          type="text"
          placeholder="Type a color"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ColorForm;
import React from 'react';

const ColorForm = () => {
  // Initial counter value
  let counter = 0;

  // Function to handle form submission
  const getNumber = (e) => {
    e.preventDefault(); // Prevents the form from reloading the page
    const inputValue = document.getElementById('count').value;
    console.log(inputValue); // Logs the input value
  };

  // Function to handle increment
  const incrementCounter = () => {
    counter += 1; // Increase counter
    document.getElementById('counterDisplay').textContent = counter; // Update the display
  };

  // Function to handle decrement
  const decrementCounter = () => {
    counter -= 1; // Decrease counter
    document.getElementById('counterDisplay').textContent = counter; // Update the display
  };

  return (
    <>
      <h1>Enter a Count</h1>
      <form onSubmit={getNumber}> 
        <label htmlFor="count">
          Count:
          <input type="number" id="count" name="count" />
        </label>
        <button type="submit">Submit</button> {/* Set button type to submit */
        /*</form>
        <div id="counterDisplay">0</div> {/* Display the counter value */
       /* <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </>
    );
  };*/

### Notes: Displaying Images in React

1. **Displaying Images from the `public` Folder:**
   - When the image is located in the `public` folder, you do **not** need to import it.
   - You can reference the image directly using its path relative to the `public` folder.
   
   **Example:**
   ```jsx
   <img src="/logo.png" alt="Logo" />
   ```
   - Here, `/logo.png` refers to the `logo.png` image in the `public` folder.
   
2. **Displaying Images from the `src` Folder:**
   - When the image is in the `src` folder or inside another folder like `src/assets`, you must **import** it first.
   
   **Example:**
   ```jsx
   import logo from './assets/logo.png'; // Adjust the path accordingly
   <img src={logo} alt="App Logo" />
   ```

3. **Best Practices:**
   - Use the `public` folder for assets like images that don’t change or need to be referenced by URL paths.
   - Use the `src` folder and import images when the image is part of a component or might be optimized during the build process.
   
4. **Vite-Specific Case:**
   - For Vite projects, images from `src` are often imported:
     ```jsx
     import viteLogo from '/vite.svg';
     <img src={viteLogo} alt="Vite Logo" />
     ```

5. **Hard Refresh to See Changes:**
   - Sometimes, browser caching can prevent changes from showing up. If an image isn't loading, perform a hard refresh:
     - Windows: `Ctrl + Shift + R`
     - Mac: `Cmd + Shift + R`

By following these steps, you can ensure proper image rendering in React applications.
### Notes on the `map()` Function in JavaScript and React

#### What is `map()`?
- The `map()` function is a method in JavaScript used to iterate over arrays.
- It applies a provided callback function to each element of the array and creates a new array based on the returned values of the callback.
- It is a **non-mutating** function, meaning the original array remains unchanged.
  
#### Syntax:
```javascript
array.map((element, index, array) => {
  // Return value to be added to the new array
})
```
- **`element`**: The current element being processed in the array.
- **`index`** (optional): The index of the current element.
- **`array`** (optional): The array on which `map()` is called.

#### Example:
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8]
```
- In this example, each element in `numbers` is doubled, and a new array `[2, 4, 6, 8]` is returned.

#### Key Characteristics:
1. **Creates a new array**: The function doesn’t modify the original array but returns a new one.
2. **Pure function**: Each element is processed independently without affecting the original array.
3. **Callback function**: The callback function contains the logic to transform each element.

---

### `map()` in React

The `map()` function is frequently used in React for rendering lists dynamically. It allows us to render a list of JSX elements, such as `div` or `li`, based on an array of data.

#### Example:
```javascript
const names = ['Alice', 'Bob', 'Charlie'];

const NameList = () => {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};
```

#### Key Points in React:
1. **Dynamic rendering**: `map()` helps render a list of components dynamically based on an array.
2. **Key prop**: When rendering a list, each element must have a unique `key` prop for efficient rendering and updating in React. The `key` helps React keep track of which elements have changed, been added, or removed.
3. **Reusable component**: The result of the `map()` function is usually wrapped inside JSX tags (e.g., `<li>`, `<div>`), making it easy to create dynamic lists from array data.

---

### Summary:
- The `map()` function is essential for creating new arrays in JavaScript based on existing ones.
- In React, `map()` is widely used to render lists dynamically, ensuring each item has a unique `key`.
