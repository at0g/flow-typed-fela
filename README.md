# An attempt to type react-fela with flow

In it's __current state__, this repo shows an example of using flow nicely
with react-fela.

The issue is that the flow type definitions exist within the relevant file.
Moving the type definitions outside of the file appears to change them to `any`.

It appears these issues have been reported:
- https://github.com/facebook/flow/issues/6414
- https://github.com/facebook/flow/issues/6415

## Contents

### App

[src/App.js](./src/App.js)

Imports the FelaConnectComponent and causes a flow error, as `children`
and `title` are omitted.

### FelaConnectComponent

[src/components/FelaConnectComponent.js](./src/components/FelaConnectComponent.js)

A component that contains the correct type data, with the additional
props from fela merged with it.

Lines 6-100 of this file contain the flow definitions.

### flow-typed libdef

[flow-typed/react-fela.js]((./flow-typed/react-fela.js)

Module definitions for react-fela, currently commented out.
The following will remove the flow error in App.js

1. Uncommenting this module
2. 1 + and removing the types from FelaConnectComponent.js
3. 1 + 2 + importing the types from `react-fela`

Additionally, I have tried the following, none of which have worked.
- removing `declare module` and making the types global
- declaring global types in a separate js file in src,
 then importing the file.
- as above, along with explictly exporting the types from this file and
 explicitly importing the types into FelaConnectComponent.js
