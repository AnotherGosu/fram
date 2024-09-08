declare namespace Cypress {
  interface Chainable {
    /**
     * Get element by `data-test` attribute.
     *
     * @param value - `data-test` attribute value
     */
    getByData(
      value: string,
      options?: Partial<
        Cypress.Loggable &
          Cypress.Timeoutable &
          Cypress.Withinable &
          Cypress.Shadow
      >,
    ): Chainable<JQuery<HTMLElement>>;
    /**
     * Validate if current pathname matches provided value.
     *
     * @param value - value that should match current pathname
     */
    validatePathname(value: string): Chainable<string>;
    /**
     * Validate if external link has correct `href` attribute and returns `200` status.
     *
     * @param value - external link `href` value
     */
    validateExternalLink(value: string): Chainable<JQuery<HTMLElement>>;
    /**
     * Validate if input label has correct text and `htmlFor` attribute value.
     *
     * @param text - label text
     * @param htmlFor - `htmlFor` attribute value of label
     */
    validateInputLabel(
      label: string,
      htmlFor: string,
    ): Chainable<JQuery<HTMLLabelElement>>;
    /**
     * Validate input has correct id and `type` attribute value.
     *
     * @param id - input id
     * @param type - `type` attribute value of input
     */
    validateInput(id: string, type: string): Chainable<JQuery<HTMLElement>>;
    /**
     * Creates a sign-in session.
     */
    signIn(): void;
  }
}
