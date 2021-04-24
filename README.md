# react-window-hooks

usefull window hooks for react (NextJS compatible)

## How to use

```javascript
import hooks from 'react-window-hooks'
```

## available hooks

### useClickOutside

```javascript
import React, { useState } from 'react'
import { useClickOutside } from "react-window-hooks";

const ExampleUseClickOutside = () => {
  const [showComponent, setShowComponent] = useState(true)

  const handleClickOutside = (isOutside: boolean) => {
    if (isOutside) {
      setShowComponent(false)
    }
  }

  const { ref } = useClickOutside(handleClickOutside)
  
  return (
    <div>
      <p>Outside component</p>
      {showComponent && (
        <div ref={ref}>
          component to detect if it's outside
        </div>
      )}
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

export const ExampleUseWindowSize = () => {
  const { width, height } = useWindowSize()
  return (
    <>
      <div>height: {height}px</div>
      <div>width: {width}px</div>
    </>
  )
}
```

### useLocalStorageState 

```javascript
import { useLocalStorageState } from "react-window-hooks";
type ProfileT = {
  email: string
  avatar: string
}

const ExampleUseLocalStorage = () => {
  const [profile, setProfile] = useLocalStorageState<ProfileT>('profile', {
    email: '',
    avatar: '',
  })

  return (
    <div>
      <h1> {profile.email} </h1>
      <img src={profile.avatar} />
    </div>
  )
}

```
### useQueryState 

```javascript
import { useQueryState } from "react-window-hooks";

type ProfileT = {
  email: string
  avatar: string
}

const ExampleUseQueryState = () => {
  const [profile, setProfile] = useQueryState<ProfileT>('profile', {
    email: '',
    avatar: '',
  })
  
  return (
    <div>
      <h1> {profile.email} </h1>
      <img src={profile.avatar} />
    </div>
  )
}

```