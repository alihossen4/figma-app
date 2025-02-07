import TopCreatorContainer from "../components/top-creators/TopCreatorContainer"
import Title from "../components/Title"
import Container from "../components/Container"
import Button from "../components/Button"
import Flex from "../components/Flex"

const TopCreators = () => {
  return (
    <section>
        <Container >
            <Flex className={`flex-col`}>
            <Title title={"Top Creators"} className="text-center text-[#f2f2f2] font-black text-[56px] mb-6"/>
            <p className="text-xl text-[#f7e3e3] max-w-[678px] text-center m-auto mb-5">In commodo auctor eget congue sit. Ultrices eget pretium sit euismod mi id. Risus, aliquam odio posuere ac in in nisl sed augue. </p>
            
            <Button text={'View all creators'} className='text-center self-center'/>
            </Flex>
            <TopCreatorContainer />
        </Container>

    </section>
  )
}

export default TopCreators