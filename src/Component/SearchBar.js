import InputTextField from "./UI/InputTextField";
import Button from "./UI/Button";

const SearchBar = () => {
    return (
        <div>
            <InputTextField
                type="text"
                name="search-bar"
                cName="border-2 border-zinc-300 p-2 mt-1.5 w-10/12 rounded-l-3xl"
                onChange={(e) => console.log(e.target.value)}
            />
            <Button cName="border-r-2 border-y-2 border-zinc-300 p-2 rounded-r-3xl w-[64px]"><i className="fa-solid fa-magnifying-glass"></i></Button>
        </div>
    );
}

export default SearchBar;