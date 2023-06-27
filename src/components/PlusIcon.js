import { Box, chakra } from "@chakra-ui/react"

const PlusIcon = ({ ...rest }) => (
  <Box 
    position="relative"
    w="15px"
    h="15px"
    _after={{
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      bg: "global.700",
      borderRadius: '4px',
      w: "15px",
      h: "1px"
    }}
    _before={{
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      bg: "global.700",
      borderRadius: '4px',
      w: "15px",
      h: "1px",
      transform: "rotate(90deg)"
    }}
    {...rest}
  >
    <Box 
      position="absolute"
      top="-1px"
      left="53%"
      bg="global.800"
      borderRadius="4px"
      w="17px"
      h="3px"
      transform="translateX(-53%)"
    />
    <Box 
      position="absolute"
      top="-1px"
      left="53%"
      bg="global.800"
      borderRadius="4px"
      w="17px"
      h="3px"
      transform="translateX(-53%) rotate(90deg)"
      zIndex={-1}
    />
    <Box 
      position="absolute"
      top="0"
      left="53%"
      bg="global.700"
      w="15px"
      h="1px"
      transform="translateX(-53%) rotate(90deg)"
    />
  </Box>
)

export default chakra(PlusIcon)