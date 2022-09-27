import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { scrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItem="center" marginRight="1">
            <Icon 
            as={FaArrowAltCircleLeft}
            onclick={() => scrollPrev()}
            fontSize="2xl"
            pointer="cursor"
            />
        </Flex>
    )
}
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItem="center" marginLLeft="1">
            <Icon 
            as={FaArrowAltCircleRight}
            onclick={() => scrollNext()}
            fontSize="2xl"
            pointer="cursor"
            />
        </Flex>
    )
}

const ImageScrollbar = ({ data }) => (
    <ScrollMenu LeftArrow={LeftArrow} rightArrow={RightArrow} style={{overflow: 'hidden'}} >
        {data.map((item) => (
            <Box key={item.id} width="910px" itemId={item.id} overflow="hidden" p="1">
                <Image 
                    alt="property"
                    plalceholder="blur" 
                    blurDataURL={item.url} 
                    src={item.url} 
                    width={1000} 
                    height={500}
                    sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
                />
            </Box>
        ))}
    </ScrollMenu>
)

export default ImageScrollbar;