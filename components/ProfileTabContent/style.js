import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

const { StyleSheet } = require('react-native');

const style = StyleSheet.create({
  profileTabContainer: {
    backgroundColor: '#FFFFFF',
  },
  profileTabContent: {
    paddingHorizontal: horizontalScale(21),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  image: {
    width: horizontalScale(150),
    height: verticalScale(90),
    marginTop: verticalScale(11),
  },
});

export default style;
