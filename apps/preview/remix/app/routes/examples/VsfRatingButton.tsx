import VsfRatingButton, { VsfRatingButtonVariants } from '~/output/blocks/VsfRatingButton/VsfRatingButton.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';

export default function VsfRatingButtonExample() {
  const { state, controls } = prepareControls(
    [
      {
        title: 'size',
        type: 'select',
        modelName: 'sizeModel',
        propDefaultValue: VsfRatingButtonVariants.base,
        options: Object.keys(VsfRatingButtonVariants),
        propType: "VsfRatingButtonVariants",
      },
      {
        title: 'max',
        type: 'range',
        modelName: 'maxModel',
        propDefaultValue: 5,
        propType: "Number",
        options: [{
          bind: {
            min: 3,
            max: 10,
          },
        }],
      },
      {
        title: 'disabled',
        type: 'boolean',
        modelName: 'disabledModel',
        propType: "Boolean",
        propDefaultValue: false,
      },
      {
        title: 'modelValue',
        type: 'number',
        modelName: 'valueModel',
        propDefaultValue: 0,
        propType: "Number",
        description: "v-model prop",
        options: [
        {
          bind: {
            min: 0,
          },
        },
      ],
      },
    ],
    {
      sizeModel: VsfRatingButtonVariants.base,
      disabledModel: false,
      maxModel: 5,
      valueModel: 1,
    },
  );
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfRatingButton
          onChange={(e) => state.set({ ...state.get, valueModel: e })}
          size={state.get.sizeModel}
          max={state.get.maxModel}
          disabled={state.get.disabledModel}
          modelValue={state.get.valueModel}
        />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
