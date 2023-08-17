

const Title = ({Heading, SubHeading}) => {
    return (
        <div className="mt-10">
            <h3 className="text-center font-bold text-3xl mb-4">-----{Heading}-----</h3>
            <p className="text-center">{SubHeading}</p>
        </div>
    );
};

export default Title;