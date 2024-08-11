import { Type } from '@packages/common-enum';
import { TypeSelectOptions, TypeSelectPresenter } from './TypeSelectPresenter';

export interface TypeSelectProps {
  value: TypeSelectOptions | null;
  onChange: (newValue: TypeSelectOptions | null) => void;
  isInvalid?: boolean;
}

export function TypeSelect({ value, onChange, isInvalid = false }: TypeSelectProps) {
  const options = Type.values.map((t) => {
    return { value: t.id, label: t.name };
  });

  return (
    <TypeSelectPresenter
      value={value}
      onChange={onChange}
      options={options}
      isInvalid={isInvalid}
    />
  );
}
