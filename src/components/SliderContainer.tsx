import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DEFAULT_VALUE = 0.2;

const SliderContainer = (props: {
  caption: string;
  children: React.ReactElement;
  sliderValue?: Array<number>;
  trackMarks?: Array<number>;
  vertical?: boolean;
}) => {
  const {caption, sliderValue, trackMarks} = props;
  const [value, setValue] = React.useState(
    sliderValue ? sliderValue : DEFAULT_VALUE,
  );
  let renderTrackMarkComponent: any;

  if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
    renderTrackMarkComponent = (index: number) => {
      const currentMarkValue = trackMarks[index];
      const currentSliderValue =
        value || (Array.isArray(value) && value[0]) || 0;
      const style =
        currentMarkValue > Math.max(currentSliderValue)
          ? trackMarkStyles.activeMark
          : trackMarkStyles.inactiveMark;
      return <View style={style} />;
    };
  }

  const renderChildren = () => {
    return React.Children.map(props.children, (child: React.ReactElement) => {
      if (!!child && child.type === 'Slider') {
        return React.cloneElement(child, {
          onValueChange: setValue,
          renderTrackMarkComponent,
          trackMarks,
          value,
        });
      }

      return child;
    });
  };

  return (
    <View style={styles.sliderContainer}>
      <View style={styles.titleContainer}>
        <Text>{caption}</Text>
        <Text>{Array.isArray(value) ? value.join(' - ') : value}</Text>
      </View>
      {renderChildren()}
    </View>
  );
};

const trackMarkStyles = StyleSheet.create({
  activeMark: {
    borderColor: 'red',
    borderWith: 4,
    left: -4 / 2,
  },
  inactiveMark: {
    borderColor: 'grey',
    borderWidth: 4,
    left: -4 / 2,
  },
});

const styles = StyleSheet.create({
  sliderContainer: {
    paddingVertical: 16,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SliderContainer;
