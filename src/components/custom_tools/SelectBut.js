export const SelectBut = ({text, newclass}) => {
    return <div className={"but " + (newclass || "")}>{text}</div>
}