import { useState } from 'react';

export const useTodoInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setInputValue(value);
  };

  const resetInputValue = () => {
    setInputValue('');
  };

  return {
    inputValue,
    handleInputValue,
    resetInputValue,
  };
};

export interface IUseTodoInputReturns extends ReturnType<typeof useTodoInput> {}
