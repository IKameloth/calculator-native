import React from 'react';
import {Text, View} from 'react-native';
import ButtomCustom from '../components/ButtomCustom';
import {styles} from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
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
  } = useCalculator();

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
        <ButtomCustom text="=" color="#FF9427" action={handleCalculator} />
      </View>
    </View>
  );
};
