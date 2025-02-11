import Container from "../components/Container";
import Flex from "../components/Flex";
import nftprofile1 from "../assets/nftprofile1.png";
import nftprofile2 from "../assets/nftprofile2.png";
import nftprofile3 from "../assets/nftprofile3.png";
import nftprofile4 from "../assets/nftprofile4.png";
const NftCollection = () => {
  return (
    <section className="section py-20 ">
        <div className="text-center py-6 mb-[8px]">
            <h1 className="text-[56px] text-[#F2F2F2] mb-[12px] extra-bold">NFTs collections</h1>
            <p className="text-[19px] mb-4">Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed augue.</p>
        </div>
        <Container>
            <Flex className='gap-5'>
                <div className="w-[400px] h-[500px] bg-[#16192A] rounded-full text-center border border-[#2E3150]">
                    <img src={nftprofile1} className="w-[330px] h-[330px] mb-6 m-auto"/>
                    <h3 className="extra-bold py-2 text-[22px]">Broken collection</h3>
                    <p className="text-[#BC61F3]">View Collection</p>
                </div>
                <div className="w-[400px] h-[500px] bg-[#16192A] rounded-full text-center border border border-[#2E3150]">
                    <img src={nftprofile2}  className="w-[330px] h-[330px] m-auto mb-6"/>
                    <h3 className="extra-bold py-2 text-[22px]">Broken collection</h3>
                    <p className="text-[#BC61F3]">View Collection</p>
                </div>
                <div className="w-[400px] h-[500px] bg-[#16192A] rounded-full text-center border border-[#2E3150]">
                    <img src={nftprofile3} className="w-[330px] h-[330px] m-auto mb-6" />
                    <h3 className="extra-bold py-2 text-[22px]">Broken collection</h3>
                    <p className="text-[#BC61F3]">View Collection</p>
                </div>
                <div className="w-[400px] h-[500px] bg-[#16192A] rounded-full text-center border border-[#2E3150] ">
                    <img src={nftprofile4} className="w-[330px] h-[330px] m-auto mb-6" />
                    <h3 className="extra-bold py-2 text-[22px]">Broken collection</h3>
                    <p className="text-[#BC61F3]">View Collection</p>
                </div>
            </Flex>
        </Container>
    </section>
  )
};

export default NftCollection;
