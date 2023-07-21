
import AnimatedLoader from 'react-native-animated-loader';
import {StyleSheet} from 'react-native';

export const LoadIndicator = ( {isLoading}) => {
    // console.log(title)
    return (
        
        <AnimatedLoader
        visible={isLoading}
        // overlayColor="rgba(255,255,255,0.75)"
        animationStyle={styles.lottie}
        speed={1}
        source={require("../assets/MyLoader.json")} // Add here
        />
    );
};


const styles = StyleSheet.create({
    lottie: {
        width: 80,
        height: 80,
    },
});