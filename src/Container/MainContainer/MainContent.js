import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContent = () => {
    return (
        <main className=" container mx-auto p-4 col-span-5">
            <ButtonList/>
            <VideoContainer/>
        </main>
    )
}

export default MainContent;