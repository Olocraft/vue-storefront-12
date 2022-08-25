import VsfAlert, { VsfAlertTypes } from '../../output/blocks/VsfAlert/VsfAlert.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';

export default function VsfAlertExample() {
  const { state, controls } = prepareControls([
    {
      title: 'Type',
      type: 'select',
      modelName: 'typeModel',
      options: Object.keys(VsfAlertTypes),
      propDefaultValue: VsfAlertTypes.info,
      propType: 'VsfAlertTypes',
    },
    {
      title: 'Persistent',
      type: 'boolean',
      modelName: 'persistentModel',
      propDefaultValue: false,
      propType: 'boolean',
    },
    {
      title: 'Header',
      type: 'text',
      modelName: 'headerModel',
      propDefaultValue: '',
      propType: 'string',
    },
    {
      title: 'Description',
      type: 'text',
      modelName: 'descriptionModel',
      propDefaultValue: '',
      propType: 'string',
    },
    {
      title: 'DefaultIcon',
      type: 'boolean',
      modelName: 'defaultIconModel',
      propDefaultValue: true,
      propType: 'boolean',
    },
    {
      title: 'DefaultButton',
      type: 'boolean',
      modelName: 'defaultButtonModel',
      propDefaultValue: true,
      propType: 'boolean',
    },
    {
      title: 'SlotIcon',
      type: 'text',
      modelName: 'slotIconModel',
      propDefaultValue: '',
      propType: 'string',
    },
    {
      title: 'SlotButton',
      type: 'text',
      modelName: 'slotButtonModel',
      propDefaultValue: '',
      propType: 'string',
    },
  ], {
    typeModel: VsfAlertTypes.info,
    persistentModel: false,
    headerModel: '',
    descriptionModel: '',
    defaultIconModel: true,
    slotIconModel: '',
    defaultButtonModel: true,
    slotButtonModel: '',
  });
  
  const closeClick = () => console.log('Clicked 🥳');
  
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfAlert
          type={state.get.typeModel}
          persistent={state.get.persistentModel}
          header={state.get.headerModel}
          description={state.get.descriptionModel}
          defaultIcon={state.get.defaultIconModel}
          slotIcon={state.get.slotIconModel}
          defaultButton={state.get.defaultButtonModel}
          slotButton={state.get.slotButtonModel}
          handleCloseClick={closeClick}
        />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
