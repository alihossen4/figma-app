import Container from "../components/Container";
import Flex from "../components/Flex";
import Button from "../components/Button"
import bannerImg from "../assets/banner.png"
const Banner = () =>{
    return (
    <section>
        <Container>
            <Flex>
                <div className="max-w-[806px] mt-30">
                    <h1 className="font-black text-white text-8xl banner-heading mt-20">Best NFTs 
                    Marketplace.</h1>
                    <p className="text-xl mt-8 mb-4 text-secondary max-w-[600px]">Ultrices eget pretium sit euismod mi id. In commodo auctor eget congue sit. Risus, aliquam odio posuere ac in in nisl sed augue. Porta aenean egestas malesuada in pulvinar enim viverra.</p>
                    <Flex className='gap-4 text-white my-15'>
                        <Button text={"Get started"} />
                        <Button text={'Create NFTs'} bghow={false}/>
                    </Flex>
                </div>
                <Flex className='relative justify-center w-[650px] h-[650px] overflow-hidden mt-20'>
                    <img src={bannerImg} className="rounded-full border-[4px] border-[#535488]"/>
                    <div className="absolute banner-image-overlay w-full h-full"></div>
                </Flex>
            </Flex>
        </Container>
    </section>
    );
}
export default Banner;