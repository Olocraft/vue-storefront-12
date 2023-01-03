import { VsfDialog } from '@storefront-ui/react/components/VsfDialog';
import { VsfButton } from '@storefront-ui/react/components/VsfButton';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'boolean',
        modelName: 'open',
        propDefaultValue: false,
      },
      {
        type: 'boolean',
        modelName: 'hideCloseButton',
        propDefaultValue: false,
      },
      {
        type: 'boolean',
        modelName: 'outsideClickClose',
        propDefaultValue: false,
      },
    ],
    {
      open: false,
      hideCloseButton: false,
      outsideClickClose: false,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfDialog
        open={state.get.open}
        hideCloseButton={state.get.hideCloseButton}
        outsideClickClose={state.get.outsideClickClose}
        onClose={(isClosed) => {
          state.set({ ...state.get, open: isClosed });
        }}
      >
        <section>
          Header
          <br />
          Some cool dialog text here
        </section>{' '}
        <menu>
          <div className="flex justify-between">
            <VsfButton
              autoFocus
              onClick={() => {
                state.set({ ...state.get, open: false });
                setTimeout(() => {
                  alert('Canceled');
                });
              }}
            >
              Close
            </VsfButton>
            <VsfButton
              onClick={() => {
                state.set({ ...state.get, open: false });
                setTimeout(() => {
                  alert('Accepted');
                });
              }}
            >
              Accept
            </VsfButton>
          </div>
        </menu>
      </VsfDialog>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
