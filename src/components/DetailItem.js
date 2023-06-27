import { Box, Container, Flex, HStack, chakra } from '@chakra-ui/react';
import { theme } from '../assets/constants';

const DetailItem = ({ index, detail, ...rest }) => {
  return (
    <Box
      key={detail.id}
      bg={{ base: theme['theme2'].bgColor, md: theme[detail.theme].bgColor }}
      px={{ base: 0, md: 6 }}
      py={{ base: 6, xl: 14 }}
      {...rest}
    >
      <Container maxW="8xl">
        <Flex>
          <Box 
            display={{ base: 'none', md: 'block' }}
            w={{ base: 'full', md: '40%', xl: "50%" }}
            order={index % 2 === 0 ? 0 : 1}
          />
          <Box 
            w={{ base: 'full', md: '60%', xl: "50%" }}
            order={index % 2 === 0 ? 1 : 0}
          >
            <HStack letterSpacing="1.5px">
              <Box 
                position="relative"
                top="-4px"
              >
                <Box
                  fontSize={{ base: '0.875rem', md: '1rem' }}
                  color={{ base: theme['theme2'].indexColor, md: theme[detail.theme].indexColor }}
                  _after={{
                    content: "''",
                    position: 'absolute',
                    bottom: '-4px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    h: '5px',
                    w: '18px',
                    bg: { base: theme['theme2'].indexBarColor, md: theme[detail.theme].indexBarColor },
                    borderRadius: '2.5px'
                  }}
                >
                  0{detail.id}
                </Box>
              </Box>
              <Box
                fontSize={{ base: '1.75rem', md: '2.25rem' }}
                color="header2"
              >
                {detail.title}
              </Box>
            </HStack>
            <Box
              as="p"
              fontSize={{ base: '0.938rem', md: '1.125rem', xl: '1.25rem' }}
              color={{ base: theme['theme2'].color, md: theme[detail.theme].color }}
              mt={{ base: '1.25rem', md: "1.313rem", lg: "1.938rem" }}
            >
              {detail.description}
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default chakra(DetailItem)