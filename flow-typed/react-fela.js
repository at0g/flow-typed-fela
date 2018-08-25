// @flow

// Blockers!
// https://github.com/facebook/flow/issues/6414
// https://github.com/facebook/flow/issues/6415

// import { type ComponentType, type Element, type Node } from 'react'
//
// declare module 'react-fela' {
//
//     declare type Rule = (props: *, renderer: Renderer) => FelaRuleType
//
//     declare type Renderer = {
//         renderRule: (
//             rule: Rule,
//             props?: {}
//         ) => string,
//         renderKeyframe: (
//             keyframe: Rule,
//             props?: {}
//         ) => string,
//         renderFont: (
//             family: string,
//             files: $ReadOnlyArray<string>,
//             props?: {}
//         ) => string,
//         renderStatic: (style: string) => void | (style: Object, selector:string) => void,
//         clear: () => void
//     }
//
//     /**
//      * The function that is called to generate the styles for this component.
//      * If a theme is being used, it is merged with the components props as a `theme` property.
//      * The merged props are provided as the first argument, and the fela renderer as the second.
//      */
//     declare export type StyleFn<PropsType> = (
//         props: FelaExpectedProps<PropsType> & { theme: {} },
//         renderer: Renderer
//     ) => FelaRuleType
//
//     /**
//      * The props that are injected into a component that has been decorated by fela.
//      */
//     declare export type FelaInjectedProps<PropsType: {}> =
//         PropsType & {
//         as?: string | ComponentType<*>,
//         className: string,
//         extend: StyleFn<PropsType>
//     }
//
//     /**
//      * When using { connect }, the injected props are very similar to { createComponent* }, with the following differences:
//      * - instead of a single className, each key from the styleRules function will become a key in the styles prop, just
//      *   like a css module.
//      * - a new rules prop is injected. Each key from the styleRules function will be a key in rules, the value being a
//      *   function used to generate css rules. Useful when extending an internal component as the applicable rules can be
//      *   further extended from the outside.
//      */
//     declare export type FelaInjectedConnectProps<PropsType: {}> =
//         $Diff<FelaInjectedProps<PropsType>, { className?: string }> & {
//         +rules: {
//             [key: string]: StyleFn<PropsType>
//         },
//         +styles: {
//             [key: string]: string
//         }
//     }
//
//     /**
//      * The return type of a component created (or wrapped) with createComponent or createComponentWithProxy
//      */
//     declare export type FelaComponent<PropsType: {}> = ComponentType<FelaExpectedProps<PropsType>>
//
//     /**
//      * The return type of a component wrapped with connect
//      */
//     declare export type FelaConnectComponent<PropsType: {}> = ComponentType<FelaExpectedProps<PropsType>>
//
//     /**
//      *  Basic style rule.
//      *  example: { color: 'red', margin: 0 }
//      *  example: {
//      *      color: 'red',
//      *      ':hover': {
//      *          color: 'blue',
//      *          ':after': { display: 'none' }
//      *      }
//      *  }
//      */
//     declare type FelaRuleType = {
//         [key: string]: string
//             | number
//             | FelaRuleType
//     }
//
//     /**
//      * The outward props expected to be supplied to the component.
//      * Fela makes `as`, `className` and `extend` all optional props when creating the node
//      */
//     declare type FelaExpectedProps<PropsType: {}> =
//         PropsType & {
//         as?: string | ComponentType<PropsType>,
//         className?: string,
//         extend?: StyleFn<PropsType>
//     }
//
//     declare export function Provider(props: { +theme: *, children: Element }): Element
//
//     declare export function createComponent<PropsType: {}>
//         (rules: StyleFn<PropsType>, component?: string | ComponentType<PropsType>)
//         :FelaComponent<PropsType>
//
//     declare export function connect<PropsType: {} | void>
//         (rules: StyleFn<PropsType>): (component: ComponentType<PropsType>) => FelaConnectComponent<PropsType>
// }
