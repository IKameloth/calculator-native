import React from 'react';
import {Text, View} from 'react-native';
import ButtomCustom from '../components/ButtomCustom';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultSmall}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>
      <View style={styles.row}>
        <ButtomCustom text="C" color="#9B9B9B" />
        <ButtomCustom text="+/-" color="#9B9B9B" />
        <ButtomCustom text="del" color="#9B9B9B" />
        <ButtomCustom text="/" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtomCustom text="C" />
        <ButtomCustom text="+/-" />
        <ButtomCustom text="del" />
        <ButtomCustom text="/" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtomCustom text="C" />
        <ButtomCustom text="+/-" />
        <ButtomCustom text="del" />
        <ButtomCustom text="/" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtomCustom text="C" />
        <ButtomCustom text="+/-" />
        <ButtomCustom text="del" />
        <ButtomCustom text="/" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtomCustom text="0" isWidth />
        <ButtomCustom text="." />
        <ButtomCustom text="=" color="#FF9427" />
      </View>
    </View>
  );
};
