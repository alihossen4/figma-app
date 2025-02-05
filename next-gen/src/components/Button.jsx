import { Link } from "react-router";


const Button = ({text,link="/",className,bghow=true}) =>{
    return (
        <Link to={link} className={`cursor-pointer  ${bghow ?"btnLinear":"gradient-border"} py-3 px-11 ${className}`}>{text}</Link>
    );
};
export default Button;