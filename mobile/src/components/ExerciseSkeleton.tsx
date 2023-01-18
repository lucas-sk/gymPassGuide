import { Center, VStack, Skeleton, HStack } from "native-base";
import { Platform } from "react-native";

export function ExerciseSkeleton() {
  return (
    <Center w="100%" mt={Platform.OS === "android" ? 10 : 70}>
      <VStack
        w="90%"
        maxW="400"
        borderWidth="1"
        space={8}
        overflow="hidden"
        rounded="md"
        _dark={{
          borderColor: "coolGray.500",
        }}
        _light={{
          borderColor: "coolGray.200",
        }}
      >
        <Skeleton h="80" startColor="green.200" />
        <HStack justifyContent="space-evenly">
          <HStack>
            <Skeleton
              mb="3"
              w="4"
              h={4}
              mr="1"
              rounded="full"
              startColor="green.500"
            />
            <Skeleton mb="3" w="20" h={4} rounded="20" startColor="green.500" />
          </HStack>
          <HStack>
            <Skeleton
              mb="3"
              w="4"
              h={4}
              mr="1"
              rounded="full"
              startColor="green.500"
            />
            <Skeleton mb="3" w="20" h={4} rounded="20" startColor="green.500" />
          </HStack>
        </HStack>
        <Skeleton
          alignSelf="center"
          w={85 * 3}
          my="4"
          rounded="md"
          startColor="green.500"
        />
      </VStack>
    </Center>
  );
}
