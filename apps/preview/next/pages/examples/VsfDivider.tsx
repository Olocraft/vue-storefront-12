import VsfDivider from '@sfui/sfui/frameworks/react/components/VsfDivider';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

const Example = () => {
  const { state, controls } = prepareControls([], {});
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfDivider />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
};

Example.getLayout = ExamplePageLayout;
export default Example;
