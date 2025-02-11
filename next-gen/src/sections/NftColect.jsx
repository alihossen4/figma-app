import Container from "../components/Container";
import Flex from "../components/Flex";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import Button from "../components/Button";
import LatestBlog from "./LatestBlog";
const NftColect = () => {
  return (
    <Container className='text-[#f7e3e3] '>
        <Flex className='justify-between my-5'>
        <h1 className="text-[56px] ">Our Latest Blog</h1>
        <Button text={'Read More Blogs'} className='my-5'/>
        </Flex>
        <Flex >
            <LatestBlog img={blog1} className="w-[400px] h-[500px] ">
                <div className="">
                    <p className="text-[#BC61F3] mx-10">Arts</p>
                    <h2 className="text-[#f2f2f2] max-w-[330px] ml-10 mb-[5px]">Best NFTs arts collections from best artists </h2>
                </div>
            </LatestBlog>
            <LatestBlog img={blog2} className="w-[400px] h-[500px] ">
             
                    <p className="text-[#BC61F3] mx-10">Design</p>
                    <h2 className="text-[#f2f2f2] max-w-[330px] ml-10 mb-[8px]"> Best NFTs arts collections from best artists </h2>
                
            </LatestBlog>
            <LatestBlog img={blog3} className="w-[400px] h-[500px] " >
                    <p className="text-[#BC61F3] mx-10">Nfts</p>
                    <h2 className="text-[#f2f2f2] max-w-[330px] ml-10">Best NFTs arts collections from best artists</h2>
               
            </LatestBlog>
            <LatestBlog img={blog4} className="w-[400px] h-[500px] "> 
                    <p className="text-[#BC61F3] mx-10">Arts</p>
                    <h2 className="text-[#f2f2f2] max-w-[330px] ml-10">Best NFTs arts collections from best artists</h2>
            </LatestBlog>
        </Flex>
    </Container>
  );
};

export default NftColect;
