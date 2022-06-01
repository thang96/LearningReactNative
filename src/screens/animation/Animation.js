import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Easing from 'react-native/Libraries/Animated/Easing';
const Animation = () => {
  const topMotion = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    setTimeout(() => {
      Animated.timing(topMotion, {
        toValue: 600,
        duration: 4000,
        useNativeDriver: false,
        // 1. Di chuyển tịnh tiến đều
        // easing: Easing.linear,

        // 2. Di chuyển ban đầu chậm, nhanh dần về phía sau
        // easing: Easing.ease
        // easing: Easing.quad,
        // easing: Easing.cubic,
        // easing: Easing.poly(3),
        // easing: Easing.sin,
        // easing:Easing.circle

        // 3. Lùi lại 1 chút rồi di chuyển tới
        // easing: Easing.back(2),

        // 4. Di chuyển với vận tốc thay đổi
        easing: Easing.bezier(0.5, 0.1, 1, 0.1),
      }).start();
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Animated.View
          style={[styles.box, {marginTop: topMotion}]}></Animated.View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});
export default Animation;
