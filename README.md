# react-window-hooks

usefull window hooks for react (NextJS compatible)

## How to use

```javascript
import hooks from 'react-window-hooks'
```

## available hooks

### useClickOutside

```javascript
import React from 'react'
import { useClickOutside } from "react-window-hooks";

const App = () => {
    const [showComponent, setShowComponent] = useState(false);
    
    const handleClickOutside = (isOutside: boolean) => {
      if (isOutside) {
        setShowCart(false);
      }
    };

    const { ref } = useClickOutside(handleClickOutside);
    return (
        <div ref={ref}>
            component to detect if it's outside
        </div>
    )
}
```

### useScrollTo

```javascript
import React from "react";
import { useScrollTo } from "react-window-hooks";

const App = () => {
  const { elementRef, scrollToSection, scrollSmoothly } = useScrollTo();

  const goesDirectToTheSection = (event) => {
    event.preventDefault();
    scrollToSection();
  };

  const goesScrollingSmoothlyToSection = (event) => {
    event.preventDefault();
    scrollSmoothly();
  };

  return (
    <>
      <div ref={elementRef}>component to be scrolled into </div>;
      <div
        style={{
          height: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        go to the bottom of this section
      </div>
      <button onClick={goesDirectToTheSection}>Goes direct to</button>
      <button onClick={goesScrollingSmoothlyToSection}>Scroll Smoothly</button>
    </>
  );
};

```

### useWindow (NextJS or SSR)

```javascript
import React from "react";
import { useWindow } from "react-window-hooks";

const App = () => {
  const { window } = useWindow();

  //   shows window object without breaking process
  console.log(window);
  
  return <div>My Content Here</div>;
};
```

### useWindowResize

```javascript
import React from "react";
import { useWindowSize } from "react-window-hooks";

const App = () => {
  const { width, height } = useWindowSize();

  // you can resize the screen an the values will be updated automaticaly with the resize movement 
  console.log(width, height);

  return <div>My Content Here</div>;
};
```