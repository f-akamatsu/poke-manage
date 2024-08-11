import { Type } from '@packages/common-enum';
import { TypeSelectPresenter } from './TypeSelectPresenter';

export interface TypeSelectProps {
  value: string | null;
  onChange: (newValue: string | null) => void;
}

export function TypeSelect({ value, onChange }: TypeSelectProps) {
  const options = Type.values.map((t) => {
    return { value: t.id, label: t.name };
  });

  return <TypeSelectPresenter value={value} onChange={onChange} options={options} />;
}
