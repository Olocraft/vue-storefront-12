import { VsfIconSizeEnum } from '@sfui/sfui/frameworks/react/components/VsfIcons/types';
import VsfIconArrowDown from '@sfui/sfui/frameworks/react/components/VsfIcons/VsfIconArrowDown';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        propDefaultValue: 'VsfIconSize.base',
        propType: 'VsfIconSize',
        options: Object.keys(VsfIconSizeEnum),
      },
      {
        type: 'select',
        modelName: 'color',
        description: 'Its not a prop just example that by setting color on parent, icons changes its color',
        options: ['black', 'red', 'blue', 'green'],
      },
    ],
    {
      size: VsfIconSizeEnum.base,
      color: 'black',
    },
  );
  return (
    <div className="e-page">
      <div className="e-page-component">
        <div>
          Icon imported directly from `@sfui/sfui/frameworks/react/VsfIcons` <br />
          <div style={{ color: state.get.color }}>
            <VsfIconArrowDown size={state.get.size} />
          </div>
        </div>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
