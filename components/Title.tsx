interface TitleProps {
  title: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title, className }) => {
  return <h2 className={`${className} text-[2.8rem] font-bold`}>{title}</h2>;
};

export default Title;
