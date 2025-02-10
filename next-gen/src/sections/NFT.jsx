// import Button from "../components/Button";
import Container from "../components/Container";
import Flex from "../components/Flex";
import SliderComponent from "../components/Slider";
import Title from "../components/Title";
import nftImg1 from "../assets/nft-img1.png";
import nftImg2 from "../assets/nft-img2.png";
import nftImg3 from "../assets/nft-img3.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import Button from "../components/Button";

const NFT = () => {
  return (
    <section id="nft" className="relative z-50">
        <Container >
            <Flex className={`item-center text-center m-auto`}>
                <Title title="Collect Some NFTs" className='m-auto text-[40px] mb-20' />
            </Flex>
            <SliderComponent settings = {{
    arrows : false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: dots => (
      <div className="my-4 mt-[-5px]"
      >
        <ul style={{ margin: "20px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (

        <div className="mt-[-35px] h-6 w-6 bg-[#d9d8e2] rounded-full"></div>
    )
  }}>
                  <div className=" px-[30px]">
                    <img src={nftImg1} alt="nftimage" className="object-cover" />
                    <div className="bg-white p-6 max-w-[80%] m-auto rounded-[25px] shadow-lg translate-y-[-50%]">
                    <Flex className="justify-between flex-col">
                      <Flex className="justify-between mt-1 text-primaryBg extra-bold">
                        <h4>Lighting Axe</h4>
                        <h4>0.36 eth</h4>
                      </Flex>
                      <Flex className="ml-[-8px] my-2 semi-bold text-black">
                        <img src={profile1} alt="" className="max-w-[40px] h-auto"/>
                        <h6>Loura chin</h6>
                      </Flex>
                    </Flex>
                      <Button text={'Buy it now'} className="w-full block text-center mt-1" />
                    </div>
                  </div>
                  <div className=" px-[30px]">
                    <img src={nftImg2} alt="nftimage" className="" />

                    <div className="bg-white p-6 max-w-[80%] m-auto rounded-[25px] shadow-lg translate-y-[-50%]">
                    <Flex className="justify-between flex-col">
                      <Flex className="justify-between mt-1 text-primaryBg extra-bold">
                        <h4>Lighting Axe</h4>
                        <h4>0.36 eth</h4>
                      </Flex>
                      <Flex className="ml-[-8px] my-2 semi-bold text-black my-2 semi-bold text-black">
                        <img src={profile2}className="max-w-[40px] h-auto" />
                        <h6>Loura chin</h6>
                      </Flex>
                    </Flex>
                      <Button text={'Buy it now'} className="w-full block text-center mt-1" />
                    </div>
                  </div>
                  <div className=" px-[30px]">
                    <img src={nftImg3} alt="nftimage" className="" />
                    <div className="bg-white p-6 max-w-[80%] m-auto rounded-[25px] shadow-lg translate-y-[-50%]">
                    <Flex className="justify-between flex-col">
                      <Flex className="justify-between mt-1 text-primaryBg extra-bold">
                        <h4>Lighting Axe</h4>
                        <h4>0.36 eth</h4>
                      </Flex>
                      <Flex className="ml-[-8px] my-2 semi-bold text-black">
                        <img src={profile3} className="max-w-[40px] h-auto" />
                        <h6>Loura chin</h6>
                      </Flex>
                    </Flex>
                      <Button text={'Buy it now'} className="w-full block text-center mt-1" />
                    </div>
                  </div>
            
              </SliderComponent>
        </Container>
    </section>
  );
};

export default NFT;