import React, { InputHTMLAttributes } from 'react'
import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/core';
import { useField } from 'formik';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
}

export const InputField: React.FC<InputFieldProps> = ({ props }) => {
  const [] = useField(props);

  return (
    <FormControl isInvalid={form.errors.name && form.touched.name}>
      <FormLabel htmlFor="name">First name</FormLabel>
      <Input {...field} id="name" placeholder="name" />
      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
    </FormControl>
  );
}