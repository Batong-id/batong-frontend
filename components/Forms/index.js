import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text
} from '@chakra-ui/react';
import { useState } from 'react';

import FilledInput from './Input';
import FilledTextarea from './TextArea';

export const InputText = ({
  name,
  register,
  validator,
  placeholder,
  errors,
  label,
  isOptional,
  ...properties
}) => {
  validator = { ...validator, strPattern: stringPattern };
  return (
    <FormControl {...properties} isInvalid={errors[name]}>
      <FormLabel fontWeight="bold" htmlFor={name}>
        {label}
        {isOptional && (
          <Text fontWeight="light" display="inline" ml="0.35rem">
            (optional)
          </Text>
        )}
      </FormLabel>
      <FilledInput
        name={name}
        placeholder={placeholder}
        validator={validator}
        register={register}
      />
      <FormErrorMessage fontWeight="medium" fontSize="sm">
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};

export const InputTextarea = ({
  name,
  register,
  validator,
  placeholder,
  errors,
  label,
  isOptional,
  ...properties
}) => {
  validator = { ...validator, strPattern: stringPattern };
  return (
    <FormControl {...properties} isInvalid={errors[name]}>
      <FormLabel fontWeight="bold" htmlFor={name}>
        {label}
        {isOptional && (
          <Text fontWeight="light" display="inline" ml="0.35rem">
            (optional)
          </Text>
        )}
      </FormLabel>
      <FilledTextarea
        name={name}
        placeholder={placeholder}
        validator={validator}
        register={register}
      />
      <FormErrorMessage fontWeight="medium" fontSize="sm">
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};

export const InputDate = ({
  name,
  register,
  validator,
  placeholder,
  errors,
  label,
  isOptional,
  ...properties
}) => {
  return (
    <FormControl {...properties} isInvalid={errors[name]}>
      <FormLabel fontWeight="bold" htmlFor={name}>
        {label}
        {isOptional && (
          <Text fontWeight="light" display="inline" ml="0.35rem">
            (optional)
          </Text>
        )}
      </FormLabel>
      <FilledInput
        min={getDateNow()}
        type="date"
        name={name}
        placeholder={placeholder}
        validator={validator}
        register={register}
      />
      <FormErrorMessage fontWeight="medium" fontSize="sm">
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};

export const InputPassword = ({
  name,
  register,
  validator,
  placeholder,
  errors,
  label,
  isOptional,
  ...properties
}) => {
  validator = { ...validator, strPattern: stringPattern };
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl {...properties} isInvalid={errors[name]}>
      <FormLabel fontWeight="bold" htmlFor={name}>
        {label}
        {isOptional && (
          <Text fontWeight="light" display="inline" ml="0.35rem">
            (optional)
          </Text>
        )}
      </FormLabel>
      <InputGroup size="md">
        <FilledInput
          name={name}
          placeholder={placeholder}
          validator={validator}
          register={register}
          type={show ? 'text' : 'password'}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? <ViewOffIcon /> : <ViewIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage fontWeight="medium" fontSize="sm">
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};

const getDateNow = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  const yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  today = yyyy + '-' + mm + '-' + dd;
  return today;
};

const stringPattern = {
  pattern: {
    value: /[\w+]/g,
    message: 'Masukkan tidak boleh space kosong'
  }
};
