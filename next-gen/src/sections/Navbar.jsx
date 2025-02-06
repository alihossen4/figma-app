import Container from "../components/Container";
import Flex from "../components/Flex";
import Button from "../components/Button";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
const menu = [
    {
        name : "Home",
        link : "/",
    },
    {
        name : "Marketplace",
        link:"/marketplace",
    },
    {
        name:"Artist",
        link:"/artist",
    },
    {
        name:"Community",
        link:"/community",
    }
]
const Navbar = ()=>{
    return(
        <nav >
            <Container >
                <Flex className="items-center justify-between">
                    <div>
                        <img src={logo}/>
                    </div>
                    <menu>
                        <ul className="flex gap-14 text-[#f0f0f0]">
                            {menu.map((item)=>(
                                <li key={item.name} className="font-medium">
                                    <NavLink to={item.link} className={` {({isActive }) => (isActive ? "activeItem" : "")} navItem`}>{item.name}</NavLink>
                                </li>
                            ))}
                          </ul>
                    </menu>
                    <Flex className='gap-4'>
                        <Button text={"Log in"} />
                            
                        <Button text={"Sign up"} bghow={false} />
                    </Flex>
    

                </Flex>
            </Container>
        </nav>
    );
};

export default Navbar;