export enum VsfRadioGroupDirections {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

export enum VsfRadioAlignments {
  leading = 'leading',
  trailing = 'trailing',
}

export type VsfRadioProps = {
  id: string;
  name?: string;
  label?: string;
  value?: string;
  alignment?: VsfRadioAlignments;
  disabled?: boolean;
  required?: boolean;
  helpText?: string;
};

export type VsfRadioGroupProps = {
  id: string;
  legend?: string;
  direction?: VsfRadioGroupDirections;
  required?: boolean;
  invalid?: boolean;
  errorText?: string;
  helpText?: string;
  requiredText?: string;
};
