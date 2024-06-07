import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export  const Login = () =>{
    return(  
        <>
        <View style={styles.container}>
            <Text style={styles.textLogo}>Logo</Text>
            <View style={styles.card}>
                <View style={styles.form}>
                <Text style={styles.welcome}>Welcome Back 👋</Text>
                <Text style={styles.textEmail}>Email</Text>
                <TextInput
                 placeholder="Enter your email"
                 style={styles.inputText} />
                   <Text style={styles.textPassword}>Password</Text>
                <TextInput
                 placeholder="Enter your email"
                 style={styles.inputText} />
                 <input type="checkbox" style={styles.checkbox}  />
                 <Text style={styles.textCheck}>Keep me logged in </Text>
                 <Text style={styles.forgot} >Forgot password?</Text>
                 <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign in</Text>
                 </TouchableOpacity>
                 <View  style={styles.span}>
                 <Text style={styles.member}>Not a member yet?</Text>
                 <Text style={styles.register}>Register now</Text>
                 </View>
                </View>
                </View>
            </View>
        </>

    )
}
