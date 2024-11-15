import { Type } from '@packages/common-enum';
import { TypeSelectPresenter } from './TypeSelectPresenter';

export interface TypeSelectProps {
  name: string;
  value: string[];
  onChange: (newValue: string[]) => void;
  onBlur: () => void;
  isInvalid?: boolean;
}

export function TypeSelect({ name, value, onChange, onBlur, isInvalid = false }: TypeSelectProps) {
  const options = Type.values.map((t) => {
    return { value: t.id, label: t.name };
  });

  return (
    <TypeSelectPresenter
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      types={options}
      isInvalid={isInvalid}
    />
  );
}
