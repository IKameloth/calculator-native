import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wall: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'flex-end',
  },
  result: {
    fontSize: 60,
    color: 'white',
    textAlign: 'right',
  },
  resultSmall: {
    fontSize: 30,
    color: 'rgba(255,255,255, 0.5)',
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
