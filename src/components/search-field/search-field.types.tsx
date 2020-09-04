import { TextFieldProps } from '@material-ui/core';

export type SearchFieldProps = Readonly<
  Pick<TextFieldProps, 'label' | 'placeholder' | 'disabled' | 'className'> & {
    value?: string;
    onSearch: (value: string) => void;
  }
>;
