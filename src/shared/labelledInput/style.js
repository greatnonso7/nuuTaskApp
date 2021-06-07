import {StyleSheet} from 'react-native';
import {wp, hp, getBottomSpace} from '../responsive-dimension';
import {normalColors as colors} from '../../colors';
import {globalStyle} from '../../style';

const {main} = globalStyle(colors);

export const styles = StyleSheet.create({
  eyeIcon: {
    height: wp(24),
    width: wp(24),
    tintColor: 'rgba(0, 141, 203, 0.5)',
  },
  rightIconContainer: {
    position: 'absolute',
    right: wp(10),
  },
  subtitleText: {
    paddingTop: hp(20),
    ...main.regularText16,
    marginBottom: hp(15),
    padding: 0,
  },
  labelText: {
    ...main.lightText16,
    color: colors.grey600,
    paddingBottom: hp(5),
  },
  multilineContainer: {
    height: hp(56 * 2),
  },
  multilineInput: {
    height: hp(56 * 1.5),
  },
  container: {
    width: wp(327),
    height: hp(56),
    paddingHorizontal: wp(12),
    marginBottom: hp(16),
    borderBottomColor: colors.dark,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomRightRadius: hp(10),
    borderTopLeftRadius: hp(10),
    borderTopRightRadius: hp(10),
    paddingVertical: hp(8),
  },
  inputBox: {
    height: hp(30),
    // borderWidth: 1,
    padding: 0,
    width: '100%',
    ...main.regularText16,
  },

  //------drop-down styles-------//
  androidPicker: {
    backgroundColor: 'transparent',
    width: '100%',
    height: hp(50),
    opacity: 0,
    // borderWidth: 1,
  },
  iOSpicker: {
    width: '100%',
    height: hp(100),
    marginBottom: 100,
  },
  pickerWrapper: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    height: hp(50),
  },
  arrowIcon: {
    height: wp(20),
    width: wp(20),
    position: 'absolute',
    right: wp(20),
    top: hp(43),
  },
  buttonTextOne: {
    ...main.regularText16,
    color: colors.red500,
  },
  buttonTextTwo: {
    ...main.regularText16,
    color: colors.white,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: hp(16),
  },
  secondaryButton: {
    width: wp(187),
    height: hp(56),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red500,
  },
  primaryButton: {
    width: wp(188),
    height: hp(56),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalBody: {
    width: '100%',
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
    borderBottomWidth: getBottomSpace(),
    borderBottomColor: colors.white,
  },
});
