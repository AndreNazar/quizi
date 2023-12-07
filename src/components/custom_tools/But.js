export const But = ({text, newclass, func}) => {
    return <div onClick={func} className={"but " + (newclass || "")}>{text}</div>
}