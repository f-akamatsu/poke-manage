import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@/components/ui/select';
import { createListCollection } from '@chakra-ui/react';
import { useRef } from 'react';

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
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={contentRef}>
      <SelectRoot
        name={name}
        value={value}
        onValueChange={({ value }) => onChange(value)}
        onInteractOutside={onBlur}
        collection={collection}
        width='220px'
      >
        <SelectTrigger>
          <SelectValueText placeholder='タイプを選択' />
        </SelectTrigger>
        <SelectContent portalRef={contentRef}>
          {collection.items.map((type) => (
            <SelectItem item={type} key={type.value}>
              {type.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    </div>
  );
}
