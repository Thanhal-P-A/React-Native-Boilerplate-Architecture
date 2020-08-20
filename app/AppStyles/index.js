import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

const AppStyles = {
  colors: {
    PRIMARY: '#1A2662',
    SECONDARY: '#84d8ed',
    BLACK: '#000000',
    WHITE: '#ffffff',
    GREY_TRANSPARENT: 'rgba(110,110,110,.5)',
    RED: '#c62929',
  },
  metrics: {
    SCREEN_WIDTH: width < height ? width : height,
    SCREEN_HEIGHT: width < height ? height : width,
    NAV_BAR_HEIGHT: Platform.OS === 'ios' ? 54 : 66,
  },
  fonts: {
    bold: Platform.OS === 'ios' ? 'AvenirNext-Bold' : 'Avenir Next Bold',
    demiBold:
      Platform.OS === 'ios' ? 'AvenirNext-DemiBold' : 'Avenir Next Demi Bold',
    medium: Platform.OS === 'ios' ? 'AvenirNext-Medium' : 'Avenir Next Medium',
    regular:
      Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Avenir Next Regular',
  },
};

export default AppStyles;
