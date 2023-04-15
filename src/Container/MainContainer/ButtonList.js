import Button from "../../Component/UI/Button";

const btnClass = ['px-3', 'py-1', 'rounded', 'mx-2', 'mb-2', 'bg-black', 'text-white', 'bg-zinc-100'];
let btnClassApplied;
const btnName = ["Home", "Music", "Comedy", "News", "Gaming", "Cricket", "Computer programming"];

const allBtnLists =  btnName.map((name, key) => {

            if(name === 'Home') {
                const btnClass1 = btnClass.filter(val => val !== 'bg-zinc-100');
                btnClassApplied = [...btnClass1];
            }else{
                const btnClass1 = btnClass.filter(val => (val !== 'bg-black'));
                const btnClass2 =btnClass1.filter(val => (val !== 'text-white'));
                btnClassApplied = [...btnClass2];
            }
            return <Button key={key} cName={btnClassApplied.join(" ")}>{name}</Button>;
});

const ButtonList = () => {
    return (
        <div className="section-btnList">
            {allBtnLists}
        </div>
    )
}

export default ButtonList;