import Container from "../components/Container";
import Flex from "../components/Flex";
import brand1 from "../assets/brand1.png"
import brand2 from  "../assets/brand2.png"
import brand3 from  "../assets/brand3.png"
import brand4 from  "../assets/brand4.png"
import brand5 from  "../assets/brand5.png"
const brandImage = [
    {
        src : brand1,
        alt : "brand1"
    },
    {
        src : brand2,
        alt : "brand2"
    },
    {
        src : brand3,
        alt : "brand3"
    },
    {
        src : brand4,
        alt : "brand4"
    },
    {
        src : brand5,
        alt : "brand5"
    },
]
const Brand = () => {
  return (
    <section className="py-38 text-center">
        <Container>
            <Flex className={`${brandImage >5 && 'flex-wrap'} gap-28 `}>
                {brandImage.map( ({src,alt}) =>(
                    <div key={alt} className="w-fit">
                        <img src={src} alt={alt} />
                    </div>
                ))}
            </Flex>
        </Container>
    </section>
  );
}

export default Brand;