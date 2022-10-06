import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 16
    },
    evenTitle: {
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
    },
    eventBody: {
      fontSize: 16,
      color: '#6B6B6B',
      marginBottom: 5
    },
    input: {
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 16,
        flex: 1,
        marginRight: 7
    },
    buttonText: {
      color: '#FFF',
      fontSize: 24
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31CF67',
      justifyContent: "center",
      alignItems: 'center',
      flexDirection: 'row'
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42
    },
    listEmptyText: {
      color: '#fff',
      fontSize: 14,
      textAlign: "center"
    }
  })