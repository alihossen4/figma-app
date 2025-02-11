import Container from "../components/Container";

const LatestBlog = ({className,children,img}) => {
  return (
    <section className={`flex ${className}`}>
            <div className={`border border-[#2E3150] rounded-xl bg-[#16192A] m-auto gap-[10px] ${className}`}>
                <img src={img} alt="" />
                {children}
            </div>
        
    </section>
  )
};

export default LatestBlog;
