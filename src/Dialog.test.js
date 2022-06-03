import { render, screen, waitFor } from '@testing-library/svelte';
import TestComponent from "./TestComponent.svelte";
import Dialog from './Dialog.svelte';

describe('Dialog', () => {

    test('should open', async () => {

        // 'TestComponent' ist just a helper, because otherwise it is not possible to insert slot-content
        const rendered = render(TestComponent, {
            props: {
                component: Dialog,
                properties: {dataTestId: 'dialog'},
                slot: `<div class="mdc-dialog__actions">
                         <button class="mdc-button mdc-dialog__button">
                           <span class="mdc-button__label">Button text</span>
                         </button>
                       </div>`
            }
        });

        // The instance of the `Dialog.svelte` component
        const dialogComponent = rendered.component.child;

        // The actual dom element
        const dialogElement = screen.getByTestId('dialog');

        // print the dom element as html to console
        rendered.debug(dialogElement);

        // `open()` function of `Dialog.svelte` (opens the mdc-dialog)
        dialogComponent.open();

        // Just wait long enough for the error to occur
        await waitFor(() => expect(dialogElement.classList.contains('something')).toBeTruthy());
    });

});
