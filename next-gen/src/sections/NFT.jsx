import Button from "../components/Button";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Title from "../components/Title";

const NFT = () => {
  return (
    <section id="nft" className="py-20">
        <Container>
            <Flex className={`flex-col`}>
                <Title title="Collect Some NFTs" />
            </Flex>
        </Container>
    </section>
  );
};

export default NFT;