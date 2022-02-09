# Introduction to React

## Getting started

The best way to get started is to use something like [Create React App (CRA)](https://create-react-app.dev/). That will give you a bootstrapped project to start working in without having to understand how everything works under the covers. You might want to use a library like [Material UI](https://material-ui.com/) to give you some components that give you a lot of functionality.

I also recommend using [VSCode](https://code.visualstudio.com/) as your editor. It has a ton of built-in capabilities to work well with React projects.

## HTML vs React (JSX)

Generally everything is exactly the same as normal HTML. You can use all of the standard HTML elements as well as mix in components which use a similar HTML style, but they start with capital letter and are defined in a file using a Javascript `function`. You can pass javascript variables into attributes (both components and HTML elements) by using curly braces around the value:

```jsx
const myVar = 'Marc';

return <SomeComponent name={myVar}>...</SomeComponent>;
```

There are a few special attributes that aren't a one-to-one match. The most notable is probably the `class` attribute on HTML elements. That's typically used when assigned a class selector from CSS to the HTML element. The same can be done with React by using the `className` property:

```css
.my-cool-css-class {
	font-size: 14px;
}
```

Normally in HTML you would apply it like this:

```html
<div class="my-cool-css-class">Hello</div>
```

In React, it looks like this:

```jsx
<div className="my-cool-css-class">Hello</div>
```

Another property that acts a little different is the `style` attribute. Normally in HTML you could do this:

```html
<div style="font-size: 14px; font-weight: bold;">Hello</div>
```

In React/JSX, you need to use a JavaScript object and use "camel case" for the CSS property names:

```jsx
<div style={{ fontSize: '14px', fontWeight: 'bold' }}>Hello</div>
```

or

```jsx
const styles = {
	fontSize: '14px',
	fontWeight: 'bold'
};
return <div style={styles}>Hello</div>;
```

> NOTE: Sticking to just CSS classes or a library like _styled-components_ is probably the best option.

## Importing CSS/images

For CSS, add this to the top of a component file:

```javascript
import './Filename.css';
```

Alternatively, a package like _styled-components_ is great.

For images:

```javascript
import myImage from '../images/my-image.png';
```

The `myImage` variable can be used in the `src` attribute of an `img` tag.

## Additional reading

For more information, take a look at the [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html) and [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html) for more detailed information about how React works.
