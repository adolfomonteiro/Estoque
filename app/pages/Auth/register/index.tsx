import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export  const Register = () =>{
    return(   
        <View style={styles.container}>
            <Text style={styles.textLogo}>Logo</Text>
            <View style={styles.card}>
                <View style={styles.form}>
                <Text style={styles.welcome}>Welcome Back 👋</Text>
                <Text style={styles.textEmail}>Email</Text>
                <TextInput
                 placeholder="Enter your email"
                 style={styles.inputText} />
                </View>
            </View>
        </View>

    )
}
