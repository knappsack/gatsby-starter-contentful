type ReactJSXIntrinsicElements = JSX.IntrinsicElements
export type JSXIntrinsicElements = keyof ReactJSXIntrinsicElements

/**
 * Get any IntrinsicElements Prop Types
 * @example type Component = GetTypesOf['div']
 */
export type GetTypesOf = {
  [K in JSXIntrinsicElements]: ReactJSXIntrinsicElements[K] & {
    /**
     * Specify that a standard HTML element should behave like a defined custom built-in element
     * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
     */
    is?: JSXIntrinsicElements
  }
}
