import {useState, useRef} from 'react';
import {Operators} from '../types';

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');
  const refOperator = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const buildNumber = (numText: string) => {
    // not available double decimal point
    if (number.includes('.') && numText === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // decimal
      if (numText === '.') {
        setNumber(number + numText);
      } else if (numText === '0' && number.includes('.')) {
        setNumber(number + numText);
      } else if (numText !== '0' && !numText.includes('0')) {
        setNumber(numText);
      } else if (numText === '0' && !numText.includes('.')) {
        setNumber(number);
      }
    } else {
      setNumber(number + numText);
    }
  };

  const toggleSimbol = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const handlerDelete = () => {
    let negative = '';
    let numTemp = number;

    if (number.includes('-')) {
      negative = '-';
      numTemp = number.substring(1);
    }

    if (numTemp.length > 1) {
      setNumber(negative + numTemp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const changePrevNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const handleDivide = () => {
    changePrevNumber();
    refOperator.current = Operators.divide;
  };

  const handleMultiply = () => {
    changePrevNumber();
    refOperator.current = Operators.multiply;
  };

  const handleAdd = () => {
    changePrevNumber();
    refOperator.current = Operators.add;
  };

  const handleSubstract = () => {
    changePrevNumber();
    refOperator.current = Operators.substract;
  };

  const handleCalculator = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (refOperator.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.substract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.divide:
        if (num1 === 0) {
          setNumber('0');
        } else {
          setNumber(`${num2 / num1}`);
        }
        break;
    }
    setPrevNumber('0');
  };

  return {
    prevNumber,
    number,
    clean,
    toggleSimbol,
    handlerDelete,
    handleDivide,
    buildNumber,
    handleMultiply,
    handleSubstract,
    handleAdd,
    handleCalculator,
  };
};
