import { Icon, HStack, Text } from '@chakra-ui/react'
import {
  FaRegClock,
  FaThumbsUp,
  FaConciergeBell,
  FaMortarPestle,
} from 'react-icons/fa'

function IconMasak({ times, portion, dificulty }) {
  return (
    <HStack spacing='4' color='gray.600' align='center'>
      <HStack>
        <Icon as={FaRegClock} />
        <Text>{times}</Text>
      </HStack>
      <HStack>
        <Icon as={FaConciergeBell} />
        <Text>{portion}</Text>
      </HStack>
      <HStack>
        <Icon as={dificulty === 'Mudah' ? FaThumbsUp : FaMortarPestle} />
        <Text>{dificulty}</Text>
      </HStack>
    </HStack>
  )
}

export default IconMasak
