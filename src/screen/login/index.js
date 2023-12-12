import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, Button, View, TextInput, Image } from 'react-native';
import { styles } from './style';

export default function App() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.FormImg}
                source={require('../../../assets/adaptive-icon.png')}
            />
            <TextInput
                style={styles.input}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                autoCapitalize='none'
                secureTextEntry
            />
            <Button
                title="Acessar"
                color={'#032D78'}
                accessibilityLabel="Learn more about this purple button"
            />
        </View>

    );
}