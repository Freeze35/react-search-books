import {Oval} from "react-loader-spinner";
import {FC} from "react";

interface Props {
    className?: string;
}

const SmallLoader: FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <Oval
                height={window.innerHeight/8}
                width={window.innerWidth/8}
                color = "#18c781"
                secondaryColor= '#56d3cc'
                ariaLabel = 'three-dots-loading'
                visible={true}
            />
        </div>
    );
};

export default SmallLoader;