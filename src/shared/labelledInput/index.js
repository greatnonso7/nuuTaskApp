import React, {useState} from 'react';
import {TextInput, Text, Image, TouchableOpacity} from 'react-native';
import {View, ViewStyle, TextStyle, TextInputProps} from 'react-native';
import {normalColors as colors} from '../../colors';
import {sharedImages} from '../../images';
import {styles} from './style';

interface LabelledInputProps {
  label: string;
  labelStyle: TextStyle;
  containerStyle: ViewStyle;
  inputStyle: ViewStyle;
  value: string;
  onPress: Function;
}
type Props = LabelledInputProps & TextInputProps;

const LabelledInput: React.FC<Props> = React.forwardRef(
  (
    {
      label,
      labelStyle,
      onPress,
      containerStyle,
      inputStyle,
      multiline,
      value,
      secureTextEntry,
      ...rest
    },
    ref,
  ) => {
    const [isTyping, setTypingState] = useState(false);
    const [isTextVisible, setTextVisible] = useState(false);
    let showLabel = value || isTyping;
    return (
      <>
        <Text style={styles.labelText}>{label}</Text>

        <View
          style={[
            styles.container,
            multiline && styles.multilineContainer,
            containerStyle,
          ]}>
          <TextInput
            placeholder={!isTyping ? label : ''}
            placeholderTextColor={colors.grey700}
            onFocus={() => setTypingState(true)}
            onBlur={() => setTypingState(false)}
            underlineColorAndroid="transparent"
            value={value}
            style={[
              styles.inputBox,
              multiline && styles.multilineInput,
              inputStyle,
            ]}
            ref={ref}
            multiline={multiline}
            secureTextEntry={secureTextEntry && !isTextVisible}
            {...rest}
          />
          {secureTextEntry && (
            <TouchableOpacity
              style={styles.rightIconContainer}
              onPress={() => setTextVisible(!isTextVisible)}>
              <Image
                style={styles.eyeIcon}
                source={!isTextVisible ? sharedImages.eye : null}
              />
            </TouchableOpacity>
          )}
        </View>
      </>
    );
  },
);

export default LabelledInput;
