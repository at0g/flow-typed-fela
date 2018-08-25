// @flow
import React, { type ComponentType, type Element, type Node } from 'react'
import { connect } from 'react-fela'
import ChildComponent from './FelaComponent'

type Rule = (props: *, renderer: Renderer) => FelaRuleType

type Renderer = {
    renderRule: (
        rule: Rule,
        props?: {}
    ) => string,
    renderKeyframe: (
        keyframe: Rule,
        props?: {}
    ) => string,
    renderFont: (
        family: string,
        files: $ReadOnlyArray<string>,
        props?: {}
    ) => string,
    renderStatic: (style: string) => void | (style: Object, selector:string) => void,
    clear: () => void
}

/**
 * The function that is called to generate the styles for this component.
 * If a theme is being used, it is merged with the components props as a `theme` property.
 * The merged props are provided as the first argument, and the fela renderer as the second.
 */
type StyleFn<PropsType> = (
    props: FelaExpectedProps<PropsType> & { theme: {} },
    renderer: Renderer
) => FelaRuleType

/**
 * The props that are injected into a component that has been decorated by fela.
 */
type FelaInjectedProps<PropsType: {}> =
    PropsType & {
    as?: string | ComponentType<*>,
    className: string,
    extend: StyleFn<PropsType>
}

/**
 * When using { connect }, the injected props are very similar to { createComponent* }, with the following differences:
 * - instead of a single className, each key from the styleRules function will become a key in the styles prop, just
 *   like a css module.
 * - a new rules prop is injected. Each key from the styleRules function will be a key in rules, the value being a
 *   function used to generate css rules. Useful when extending an internal component as the applicable rules can be
 *   further extended from the outside.
 */
type FelaInjectedConnectProps<PropsType: {}> =
    $Diff<FelaInjectedProps<PropsType>, { className?: string }> & {
    +rules: {
        [key: string]: StyleFn<PropsType>
    },
    +styles: {
        [key: string]: string
    }
}

/**
 * The return type of a component created (or wrapped) with createComponent or createComponentWithProxy
 */
type FelaComponent<PropsType: {}> = ComponentType<FelaExpectedProps<PropsType>>

/**
 * The return type of a component wrapped with connect
 */
type FelaConnectComponent<PropsType: {}> = ComponentType<FelaExpectedProps<PropsType>>

/**
 *  Basic style rule.
 *  example: { color: 'red', margin: 0 }
 *  example: {
 *      color: 'red',
 *      ':hover': {
 *          color: 'blue',
 *          ':after': { display: 'none' }
 *      }
 *  }
 */
declare type FelaRuleType = {
    [key: string]: string
        | number
        | FelaRuleType
}

/**
 * The outward props expected to be supplied to the component.
 * Fela makes `as`, `className` and `extend` all optional props when creating the node
 */
declare type FelaExpectedProps<PropsType: {}> =
    PropsType & {
    as?: string | ComponentType<PropsType>,
    className?: string,
    extend?: StyleFn<PropsType>
}















type PropTypes = {
    title: Node,
    subTitle?: Node,
    children: Node,
}

const styleRules:StyleFn<PropTypes> = ({ subTitle }) => ({
    title: {
        borderLeft: '1em solid papayawhip',
        color: 'papayawhip',
        textIndent: '20px',
        ...(() => {
            if (subTitle) {
                return {
                    marginBottom: 0,
                }
            }
            return {}
        })()
    },
    subTitle: {
        backgroundColor: 'papayawhip',
        color: 'rebeccapurple',
        marginTop: 0
    }
})

const MyComponent = ({ as, children, rules, styles, subTitle, title }: FelaInjectedConnectProps<PropTypes>) => {
    const Component = as || 'section'

    return (
        <Component>
            <header>
                <ChildComponent as="h1" extend={(...args) => rules.title(...args)}>
                    {title}
                </ChildComponent>
                {!!subTitle && (
                    <React.Fragment>
                        <hr key="hr" />
                        <ChildComponent as="h2" key="subTitle" extend={(...args) => rules.subTitle(...args)}>
                            {subTitle}
                        </ChildComponent>
                    </React.Fragment>
                )}
            </header>
            {children}
        </Component>
    )
}

const StyledComponent:FelaConnectComponent<PropTypes> = connect(styleRules)(MyComponent)

export default StyledComponent