import Banner from "../sections/Banner";
import Brand from "../sections/Brand";
import NFT from "../sections/NFT";
import NftColect from "../sections/NftColect";
import NftCollection from "../sections/NftCollection";
import TopCreators from "../sections/TopCreators";

const Home = () =>{
    return (<>
        <Banner />
        <Brand />
        <NFT />
        <TopCreators />
        {/* <NftCollection /> */}
        <NftColect />
    </>);
};

export default Home;