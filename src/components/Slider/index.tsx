/* eslint-disable import/first */
import { Flex, Heading, Text } from '@chakra-ui/react';

// Import Swiper React components and Styles
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([Pagination]);

// Custom Styles
import './slider-dots.scss'
import { Link } from 'react-router-dom';

const images = process.env.PUBLIC_URL + '/images/slide/'

interface City {
    name: string;
    country: string;
    country_code: string;
    flag: string;
    image: string;
}

export interface SlideItemDefinition {
    slug: string;
    imgPath: string;
    title: string;
    desc: string;
    resume: string;
    languages: number;
    countries: number;
    cities: number;
    someCities: City[];
}

const newSlideObject: SlideItemDefinition[] = [
    {
        slug: 'america-do-sul',
        imgPath: images + 'america-do-sul.webp',
        title: 'América do Sul',
        desc: 'Desvende as belezas ocultas.',
        resume: 'Etiam at placerat velit. Nullam molestie, orci a placerat molestie, lacus enim varius urna, nec interdum sapien sapien sed nisi. Phasellus lorem turpis, aliquam eget justo in, auctor consectetur dolor. Phasellus felis neque, sagittis et luctus nec, fermentum pretium ipsum. Mauris in est ultricies, sollicitudin turpis et, maximus tortor.',
        languages: 1,
        countries: 13,
        cities: 1000,
        someCities: [
            {
                country: 'Brazil',
                country_code: 'BR',
                flag: 'https://static.todamateria.com.br/upload/ba/nd/bandeira-do-brasil-og.jpg',
                name: 'Marabá',
                image: 'https://pebinhadeacucar.com.br/v2018/wp-content/uploads/2018/07/11296764_1629498557334217_1465555109_n-1024x767.jpg',
            },
            {
                country: 'Perú',
                country_code: 'PE',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Peru_flag_with_coat_of_arms_300.PNG',
                name: 'Lima',
                image: 'https://ckturistando.com.br/wp-content/uploads/2019/08/dicas-o-que-fazer-em-lima-capital-do-peru-ckturistando.jpg',
            },
        ]
    },
    {
        slug: 'africa',
        imgPath: images + 'africa.webp',
        title: 'Africa',
        desc: 'Beleza sem igual.',
        resume: 'Etiam at placerat velit. Nullam molestie, orci a placerat molestie, lacus enim varius urna, nec interdum sapien sapien sed nisi. Phasellus lorem turpis, aliquam eget justo in, auctor consectetur dolor. Phasellus felis neque, sagittis et luctus nec, fermentum pretium ipsum. Mauris in est ultricies, sollicitudin turpis et, maximus tortor.',
        languages: 1,
        countries: 13,
        cities: 1000,
        someCities: [
            {
                country: 'Angola',
                country_code: 'AO',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/900px-Flag_of_Angola.svg.png',
                name: 'Luanda',
                image: 'https://www.vaticannews.va/content/dam/vaticannews/multimedia/2019/01/31/CIDADE%20DE%20LUANDA.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.750.422.jpeg',
            }
        ]
    },
    {
        slug: 'asia',
        imgPath: images + 'asia.webp',
        title: 'Ásia',
        desc: 'Terras de muita fé.',
        resume: 'Etiam at placerat velit. Nullam molestie, orci a placerat molestie, lacus enim varius urna, nec interdum sapien sapien sed nisi. Phasellus lorem turpis, aliquam eget justo in, auctor consectetur dolor. Phasellus felis neque, sagittis et luctus nec, fermentum pretium ipsum. Mauris in est ultricies, sollicitudin turpis et, maximus tortor.',
        languages: 1,
        countries: 13,
        cities: 1000,
        someCities: [
            {
                country: 'South Korea',
                country_code: 'KR',
                flag: 'https://media.istockphoto.com/vectors/south-korea-flag-vector-illustration-eps10-vector-id1152496697?k=6&m=1152496697&s=612x612&w=0&h=oekpAxilJEkH3QOdUY2QxJdSN4jQwnUrseXwfeaJ3UM=',
                name: 'Seul',
                image: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2020/05/passagens-aereas-seul-capa2019-01.jpg',
            }
        ]
    },
]

export function Slider() {
    return (
        <Flex
            width="100%"
            height="450px"
            maxWidth="1240px"
            marginX="auto"
            marginBottom={["5", "10"]}>
            <Swiper
                pagination={{ clickable: true }}
                slidesPerView={1}
                style={{ width: '100%', flex: '1' }}
            >
                {
                    newSlideObject.map(item => (
                        <SwiperSlide key={item.slug}>
                            <Flex
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                                background={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('${item.imgPath}')`}
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                textAlign="center"
                                height="100%"
                            >

                                <Link to={{
                                    pathname: `/continente/${item.slug}`,
                                    state: {
                                        continente: item
                                    }
                                }}>
                                    <Heading
                                        fontSize={["2xl", "5xl"]}
                                        color="gray.50"
                                        fontWeight="700"
                                    >
                                        {item.title}
                                    </Heading>
                                    <Text
                                        fontWeight="bold"
                                        color="gray.100"
                                        fontSize={["sm", "2xl"]}
                                        mt={["12px", "4"]}
                                    >
                                        {item.desc}
                                    </Text>
                                </Link>
                            </Flex>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Flex>
    )
}