import {StyleSheet} from 'react-native';
import {wp, hp, deviceWidth} from '../../shared/responsive-dimension';
import {globalStyle} from '../../style';
import {normalColors as colors} from '../../colors';

const {main} = globalStyle(colors);

export const styles = StyleSheet.create({
  imageStyle: {
    height: hp(300),
    width: wp(360),
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    width: deviceWidth,
    height: hp(600),
    marginTop: hp(100),
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: hp(280),
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: hp(5),
    width: wp(15),
    borderRadius: 10 / 2,
    backgroundColor: colors.blue,
    marginLeft: 10,
  },
  textContainer: {
    marginTop: hp(20),
    marginHorizontal: hp(30),
  },
  text: {
    ...main.semiBoldText20,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonContainer: {
    marginHorizontal: hp(25),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: hp(100),
  },
  loginButton: {
    width: wp(328),
    height: hp(60),
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(10),
    marginBottom: hp(20),
  },
  loginText: {
    ...main.semiBoldText20,
    color: colors.white,
  },
  registerText: {
    ...main.semiBoldText20,
    color: colors.blue,
  },
  registerButton: {
    width: wp(328),
    height: hp(60),
    backgroundColor: colors.white,
    borderWidth: hp(3),
    borderColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(10),
  },
  buttonStyle: {
    marginTop: hp(30),
  },
});
