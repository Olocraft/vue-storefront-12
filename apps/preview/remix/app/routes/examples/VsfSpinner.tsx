import VsfSpinner, { VsfSpinnerTypes, VsfSpinnerVariants } from '~/output/blocks/VsfSpinner/VsfSpinner.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';

export default function VsfSpinnerExample() {
  const { state, controls } = prepareControls([
    {
      title: 'Type',
      type: 'select',
      modelName: 'typeModel',
      options: Object.keys(VsfSpinnerTypes),
      propDefaultValue: VsfSpinnerTypes.base,
      propType: 'VsfSpinnerTypes'
    },
    {
      title: 'Variant',
      type: 'select',
      modelName: 'variantModel',
      options: Object.keys(VsfSpinnerVariants),
      propDefaultValue: VsfSpinnerVariants.base,
      propType: 'VsfSpinnerVariants'
    },
  ], {
    typeModel: VsfSpinnerTypes.base,
    variantModel: VsfSpinnerVariants.base,
  });
  
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfSpinner
          type={state.get.typeModel}
          variant={state.get.variantModel}
        />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
