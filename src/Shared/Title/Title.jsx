

const Title = ({Heading, SubHeading}) => {
    return (
        <div className="mt-10 mb-4 text-yellow-50">
                  <p className="text-center mt-4">--------------------------------------------------------</p>
            <h3 className="text-center font-bold text-3xl m-4">----- {Heading} -----</h3>
            <p className="text-center">{SubHeading}</p>
            <p className="text-center mt-4">--------------------------------------------------------</p>
        </div>
    );
};

export default Title;