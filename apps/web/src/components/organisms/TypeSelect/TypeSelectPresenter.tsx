import { SelectContent, SelectItem, SelectRoot } from '@/components/ui/select';
import { createListCollection } from '@chakra-ui/react';

export interface TypeSelectOptions {
  label: string;
  value: string;
}

export interface TypeSelectPresenterProps {
  name: string;
  value: string[];
  onChange: (newValue: string[]) => void;
  onBlur: () => void;
  types: TypeSelectOptions[];
  isInvalid: boolean;
}

export function TypeSelectPresenter({
  name,
  value,
  onChange,
  onBlur,
  types,
  isInvalid,
}: TypeSelectPresenterProps) {
  const collection = createListCollection({ items: types });
  return (
    <SelectRoot
      name={name}
      value={value}
      onValueChange={({ value }) => onChange(value)}
      onInteractOutside={onBlur}
      collection={collection}
      width='220px'
    >
      <SelectContent>
        {collection.items.map((type) => (
          <SelectItem item={type} key={type.value}>
            {type.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}
