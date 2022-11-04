import React, {useState, useRef} from 'react';
import {Text, View} from 'react-native';
import ButtomCustom from '../components/ButtomCustom';
import {styles} from '../theme/appTheme';

enum Operators {
  add,
  substract,
  multiply,
  divide,
}

export const CalculatorScreen = () => {
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

  return (
    <View style={styles.calculatorContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.resultSmall}>{prevNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <ButtomCustom text="C" color="#9B9B9B" action={clean} />
        <ButtomCustom text="+/-" color="#9B9B9B" action={toggleSimbol} />
        <ButtomCustom text="del" color="#9B9B9B" action={handlerDelete} />
        <ButtomCustom text="/" color="#FF9427" action={handleDivide} />
      </View>
      <View style={styles.row}>
        <ButtomCustom text="7" action={buildNumber} />
        <ButtomCustom text="8" action={buildNumber} />
        <ButtomCustom text="9" action={buildNumber} />
        <ButtomCustom text="X" color="#FF9427" action={handleMultiply} />
      </View>
      <View style={styles.row}>
        <ButtomCustom text="4" action={buildNumber} />
        <ButtomCustom text="5" action={buildNumber} />
        <ButtomCustom text="6" action={buildNumber} />
        <ButtomCustom text="-" color="#FF9427" action={handleSubstract} />
      </View>
      <View style={styles.row}>
        <ButtomCustom text="1" action={buildNumber} />
        <ButtomCustom text="2" action={buildNumber} />
        <ButtomCustom text="3" action={buildNumber} />
        <ButtomCustom text="+" color="#FF9427" action={handleAdd} />
      </View>
      <View style={styles.row}>
        <ButtomCustom text="0" isWidth action={buildNumber} />
        <ButtomCustom text="." action={buildNumber} />
        <ButtomCustom text="=" color="#FF9427" action={clean} />
      </View>
    </View>
  );
};
