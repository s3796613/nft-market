import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';


const FocusStatusBar = (props) => {
    const isFocus = useIsFocused();
    return isFocus ? <StatusBar animated={true} {...props} /> : null
}

export default FocusStatusBar