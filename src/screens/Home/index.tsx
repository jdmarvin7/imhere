import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import { useState } from "react";
import { Participant } from "../Events/Participant";
import { styles } from "./styles";

export default function Home() {
  const [participants, setParticipants] = useState(["Marvin"]);
  const [participantName, setParticipantsName] = useState("");

  const handleParticipanteAdd = () => {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante existe",
        "Já existe um partipante na lista com esse nome"
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantsName('');
  };

  function handleParticipanteRemove(name: string) {
    return Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          );
          Alert.alert("Deletado");
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.evenTitle}>Nome do Evento</Text>
      <Text style={styles.eventBody}>Sex 18 Set 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          keyboardType="email-address"
          onChangeText={setParticipantsName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipanteAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipanteRemove(item)}
            key={item}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            name={participant}
            onRemove={() => handleParticipanteRemove(participant)}
            key={participant}
          />
        ))}
      </ScrollView> */}
    </View>
  );
}
