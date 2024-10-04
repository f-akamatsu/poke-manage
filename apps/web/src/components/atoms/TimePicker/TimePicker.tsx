import { TimeIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

// 参考にしたい
// https://mui.com/x/react-date-pickers/time-picker/
// https://developer.mozilla.org/ja/docs/Web/HTML/Element/input/time

export type TimePickerProps = {
  value: string;
  onChange: (newValue: string) => void;
  step?: 1 | 5 | 10 | 15;
  min?: string;
  max?: string;
};

export function TimePicker({
  value,
  onChange,
  step = 5,
  min = '00:00',
  max = '23:59',
}: TimePickerProps) {
  const [minHour, minMinute] = min.split(':').map(Number);
  const [maxHour, maxMinute] = max.split(':').map(Number);
  let hour: number | undefined = undefined;
  let minute: number | undefined = undefined;
  if (isTimeFormat(value)) {
    [hour, minute] = value.split(':').map(Number);
  }

  const hourList = Array.from({ length: 24 }, (_, i) => i).filter(
    (h) => h >= minHour && h <= maxHour
  );
  const minuteList = Array.from({ length: 60 / step }, (_, i) => i * step);

  const [isShownList, setIsShownList] = useState<boolean>(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (!el.contains(e.target as Node)) {
        setIsShownList(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [listRef]);

  return (
    <Box position='relative'>
      <InputGroup w='102px'>
        <Input
          type='time'
          sx={{
            '::-webkit-calendar-picker-indicator': {
              display: 'none',
            },
          }}
          step={step * 60}
          min={min}
          max={max}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        <InputRightElement>
          <TimeIcon
            cursor='pointer'
            onClick={(e) => {
              e.stopPropagation();
              setIsShownList(!isShownList);
            }}
          />
        </InputRightElement>
      </InputGroup>
      <Flex
        position='absolute'
        borderStyle='solid'
        borderWidth='1px'
        borderColor='gray.200'
        borderRadius='5px'
        hidden={!isShownList}
        ref={listRef}
      >
        <PickerList
          value={hour}
          list={hourList}
          onChange={(newHour) => {
            const newMinute = minute ?? minuteList[0];
            onChange(toTimeFormat(newHour, newMinute));
          }}
        />
        <PickerList
          value={minute}
          list={minuteList}
          onChange={(newMinute) => {
            const newHour = hour ?? hourList[0];
            onChange(toTimeFormat(newHour, newMinute));
          }}
        />
      </Flex>
    </Box>
  );
}

type PickerListProps = {
  value?: number;
  list: number[];
  onChange: (newValue: number) => void;
};

function PickerList({ value, list, onChange }: PickerListProps) {
  return (
    <UnorderedList
      styleType='none'
      margin='auto'
      w='50px'
      mt='0'
      h='200px'
      overflowY='auto'
      sx={{
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
      p={1}
    >
      {list.map((v, i) => (
        <ListItem
          key={i}
          justifyContent='center'
          h='32px'
          alignItems='center'
          display='flex'
          cursor='pointer'
          {...(v !== value && { _hover: { bg: 'teal.50' } })}
          {...(v === value && { bg: 'teal.100' })}
          onClick={() => {
            onChange(v);
          }}
        >
          {v.toString().padStart(2, '0')}
        </ListItem>
      ))}
    </UnorderedList>
  );
}

const isTimeFormat = (value: string) => {
  const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return regex.test(value);
};

const toTimeFormat = (hour: number, minute: number) => {
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
};
