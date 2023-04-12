import { TouchableOpacity } from "react-native";
import { Heading, HStack, Text, VStack, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import { useAuth } from "@hooks/useAuth";

import { api } from "@services/api";

import defaulUserPhotoImg from "@assets/userPhotoDefault.png";

import { UserPhoto } from "./UserPhoto";
import { SafeAreaView } from "react-native-safe-area-context";

export function HomeHeader() {
  const { user, signOut } = useAuth();

  return (
    <SafeAreaView>
      <HStack px={8} pt={3} alignItems='center'>
        <UserPhoto
          source={
            user.avatar
              ? { uri: `${api.defaults.baseURL}/avatar/${user.avatar}` }
              : defaulUserPhotoImg
          }
          size={14}
          alt='Imagem do usuário'
          mr={4}
        />

        <VStack flex={1}>
          <Text color='gray.100' fontSize='md'>
            Olá,
          </Text>

          <Heading color='gray.100' fontSize='md' fontFamily='heading'>
            {user.name}
          </Heading>
        </VStack>

        <TouchableOpacity onPress={signOut}>
          <Icon as={MaterialIcons} name='logout' color='gray.200' size={7} />
        </TouchableOpacity>
      </HStack>
    </SafeAreaView>
  );
}
