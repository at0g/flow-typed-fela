// @flow
import React, { type Node} from 'react'
import { createComponent, type StyleFn, type FelaInjectedProps, type FelaComponent } from 'react-fela'


// Our basic component props, without any fela guff.
type PropsType = {
    children: Node,
    color?: string
}

// Our style rules function, typed as such.
// passing PropsType ensures type checking against PropsType
const styleRules:StyleFn<PropsType> = ({ color = 'red' }) => ({
    color: color,
    display: 'block',
});

// The component that will be styled with fela.
// In the case of createComponent / createComponentWithProxy, a `className` prop is added by fela
// Note that `as` will probably not be set and setting a default during destructuring causes a flow error,
// hence the need to create the Component const inside the function body.
const MyComponent = ({ as, children, extend, ...props }: FelaInjectedProps<PropsType>) => {
    const Component = as || 'div'
    return (
        <Component {...props}>
            {children}
        </Component>
    )
};

// The "finished" component, with styles attached.
const StyledComponent: FelaComponent<PropsType> = createComponent(styleRules, MyComponent)

const node = <StyledComponent>Hello</StyledComponent>

export default StyledComponent