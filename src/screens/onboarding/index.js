/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import {styles} from './style';
import {normalColors as colors} from '../../colors';
import {sharedImages} from '../../images';
import {deviceWidth} from '../../shared/responsive-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Onboarding = ({navigation: {navigate}}) => {
  const [sliderState, setSliderState] = useState({currentPage: 0});

  const setSliderPage = event => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / deviceWidth);
    console.log(indexOfNextScreen);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const {currentPage: pageIndex} = sliderState;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        pagingEnabled={true}
        onScroll={event => {
          setSliderPage(event);
        }}>
        <View style={styles.contentContainer}>
          <Image
            source={sharedImages.wallet}
            resizeMode="contain"
            style={styles.imageStyle}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Say goodbye 👋{'\n'} to paper receipts
            </Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Image
            source={sharedImages.chart}
            resizeMode="contain"
            style={styles.imageStyle}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Monitor your{'\n'}daily spending</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Image
            source={sharedImages.location}
            resizeMode="contain"
            style={styles.imageStyle}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Easily access your{'\n'}receipts anywhere
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.paginationWrapper}>
        {Array.from(Array(3).keys()).map((key, index) => (
          <View
            style={[
              styles.paginationDots,
              {opacity: pageIndex === index ? 1 : 0.2},
            ]}
            key={index}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigate('Register')}
          style={styles.registerButton}>
          <Text style={styles.loginText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.7}
          onPress={() => navigate('Login')}>
          <Text style={styles.registerText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
