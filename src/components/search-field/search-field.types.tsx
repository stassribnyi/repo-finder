import { TextFieldProps } from '@material-ui/core';

export type SearchFieldProps = Readonly<
  Pick<TextFieldProps, 'label' | 'placeholder' | 'disabled'> & {
    value?: string;
    searchText: string;
    onSearch: (value: string) => void;
  }
>;