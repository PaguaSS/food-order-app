import Spinner from "../../UI/Spinner/Spinner";

const GlobalLoader = () => {
    return (
        <div className="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-white bg-opacity-50">
            <div className="flex h-full">
                <Spinner className="m-auto"/>
            </div>
        </div>
    );
};

export default GlobalLoader;