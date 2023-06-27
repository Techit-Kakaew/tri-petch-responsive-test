import { Fragment } from 'react'
import { Box, Container, Flex, Image, useMediaQuery } from '@chakra-ui/react'
import DetailItem from './components/DetailItem'
import PlusIcon from './components/PlusIcon'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import FootballPlayerImage from './assets/images/footballer.png'
import PlayerImage from './assets/images/player.png'

SwiperCore.use([Pagination])

const awStyles = (index) => {
  return {
    position: { base: 'relative', md: 'absolute' },
    top: { 
      md: index % 2 === 0 ? '60%' : '30%', 
      xl: index % 2 === 0 ? '20%' : 0
    },
    left: index % 2 === 0 ? { md: '-20%', lg: '-10%', xl: '2%', '2xl': '6%' } : 'unset',
    right: index % 2 === 0 ? 'unset' : { md: '-33%', lg: '-10%', xl: '-6%', '2xl': '6%' },
    zIndex: { base: 3, md: 'unset' }
  }
}

const dataSources = [
  {
    id: 1,
    title: 'ATHLETS',
    image: (index) => (
      <Box {...awStyles(index)}>
        <Box 
          position="relative"
          _before={{
            content: "''",
            position: "absolute",
            top: { base: '-16%', md: '12%' },
            right: { base: "unset", md: '12%' },
            left: { base: '50%', md: 'unset' },
            w: { base: '270px', md: '200px' },
            h: "5px",
            bg: "global.600",
            transform: { base: "rotate(-45deg) translateX(-75%)", md: "rotate(-45deg)" },
            visibility: { lg: 'hidden' }
          }}
        >
          <Image 
            position="relative"
            maxW={{ base: '200px', md: '498px', xl: '100%' }}
            mx={{ base: 'auto', md: 'unset' }}
            src={FootballPlayerImage}
            alt="ATHLETS"
            pointerEvents="none"
            userSelect="none"
          />
          <Box
            display={{ lg: 'none' }}
            position="absolute"
            top={{ base: "10%", md: "-2px" }}
            left={{ base: "50%" }}
            transform={{ base: "translateX(-650%)", md: "translateX(-250%)"  }}
          >
            <Box position="relative">
              <Box 
                position="absolute"
                top="-7.5px"
                left="calc(-15px - 7px)"
              >
                <PlusIcon opacity="0.3" />
              </Box>
              <Box>
                <PlusIcon />
              </Box>
            </Box>
          </Box>
      </Box>
    </Box>
    ),
    details: [
      {
        id: 1,
        title: 'CONNECTION',
        description: 'Connect with coaches directly, you can ping coaches to view profile.',
        theme: 'theme1'
      },
      {
        id: 2,
        title: 'COLLABORATION',
        description: 'Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.',
        theme: 'theme2'
      },
      {
        id: 3,
        title: 'GROWTH',
        description: 'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc',
        theme: 'theme3'
      }
    ],
  },
  {
    id: 2,
    title: 'PLAYERS',
    image: (index) => (
      <Box {...awStyles(index)}>
        <Box 
          position="relative"
          _before={{
            content: "''",
            position: "absolute",
            top: { base: '37%', md: '25%', lg: '30%' },
            right: { md: "4%", lg: "4%" },
            left: { base: '50%', md: 'unset' },
            w: { base: '120px', md: '250px', lg: '250px', xl: "350px" },
            h: "5px",
            bg: "global.600",
            transform: {base: "rotate(-45deg) translateX(30%)", md: "rotate(-45deg)"}
          }}
          _after={{
            content: "''",
            position: "absolute",
            bottom: { base: "83%", md: "30%", lg: "28%", xl: "25%" },
            left: { base: '50%', md: "10%" },
            w: { base: '150px', md: '300px', xl:"400px" },
            h: "5px",
            bg: "global.600",
            transform: {base: "rotate(-45deg) translateX(-130%)", md: "rotate(-45deg)"},
            zIndex: "-1"
          }}
        >
          <Image 
            position="relative"
            maxW={{ base: '300px', md: '670px', xl: '100%' }}
            mx={{ base: 'auto', md: 'unset' }}
            src={PlayerImage}
            alt="PLAYERS"
            pointerEvents="none"
            userSelect="none"
          />
          <Box
            position="absolute"
            top={{ base: "10%", md: '17%', xl: '19%' }}
            left={{ base: "50%" }}
            transform={{ base: "translateX(-650%)", md: "translateX(-790%)", xl: "translateX(-1200%)" }}
          >
            <Box position="relative">
              <Box 
                position="absolute"
                top="-7.5px"
                left="calc(-15px - 7px)"
              >
                <PlusIcon opacity={{ base: "0.3", md: "1" }} />
              </Box>
              <Box>
                <PlusIcon opacity={{ base: "1", md: "0.3" }} />
              </Box>
            </Box>
          </Box>
          <Box
            position="absolute"
            bottom={{ base: "47%" }}
            left="50%"
            transform={{ base: "translateX(114px)", md: "translateX(190px)", xl: "translateX(280px)" }}
          >
            <PlusIcon />
          </Box>
        </Box>
      </Box>
    ),
    details: [
      {
        id: 1,
        title: 'CONNECTION',
        description: 'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.',
        theme: 'theme1'
      },
      {
        id: 2,
        title: 'COLLABORATION',
        description: 'Work with recruiter to increase your chances of finding talented athlete.',
        theme: 'theme2'
      },
      {
        id: 3,
        title: 'GROWTH',
        description: 'Save your time, recruit proper athlets for your team.',
        theme: 'theme4'
      }
    ],
  },
]

const App = () => {
  const [isLargerThan767] = useMediaQuery('(min-width: 767px)')

  return (
    dataSources.map((dataSource, index) =>
      <Fragment key={dataSource.id}>
        <Box
          position="relative"
          top={{ base: index % 2 === 0 ? 0 : '-58px', md: 0 }}
          bg="white"
          px={{ base: 0, md: 6 }}
          pt={index > 0 ? { base: 4, md: 14, xl: 28 } : { base: 4, md: 14, xl: 0 }}
          zIndex={index === 0 ? 1 : 0}
        >
          <Container maxW="8xl">
            <Flex>
              <Box 
                display={{ base: 'none', md: 'block' }}
                w={{ base: '40%', xl: "50%" }}
                order={index % 2 === 0 ? 0 : 1}
              />
              <Box
                w={{ base: 'full', md: '60%', xl: "50%" }}
                order={index % 2 === 0 ? 1 : 0}
                fontSize={{ base: '3.125rem', md: '5.625rem' }}
                color="header1"
              >
                {dataSource.title}
              </Box>
            </Flex>
          </Container>
          
          {isLargerThan767 && (
            dataSource.image(index)
          )}
        </Box>
        {!isLargerThan767 &&
          <Box
            position="relative"
            top={index % 2 === 0 ? 0 : '-58px'}
          >
            {dataSource.image(index)}
            <Box
              position="relative"
              top={index % 2 === 0 ? "-58px" : '-38px'}
              zIndex="2"
            >
              <Swiper
                initialSlide={0}
                autoHeight
                observer
                observeParents
                grabCursor={true}
                pagination={{
                  el: '.slide-pagination',
                  clickable: true
                }}
                className="slide"
              >
                {dataSource.details.map(detail => 
                  <SwiperSlide key={detail.id}>
                    <DetailItem 
                      index={index}
                      detail={detail}
                      py="70px"
                    />
                  </SwiperSlide>
                )}
                <Box className="custom-bullets">
                  <Box 
                    className="slide-pagination"
                    position="absolute"
                    textAlign="center"
                    zIndex="overlay"
                  />
                </Box>
              </Swiper>
            </Box>
          </Box>
        }
        {isLargerThan767 && dataSource.details.map(detail => 
          <DetailItem 
            key={detail.id}
            index={index}
            detail={detail}
          />
        )}
      </Fragment>
    )
  )
}

export default App;
