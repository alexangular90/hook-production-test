import {StyledRowInfo} from "./StyledRowInfo";

const RowInfo = ({name, value, promocode,info}) => {
    return (
        <StyledRowInfo promocode={promocode} info={info}>
            <span>{name}</span>
            <span>{value}</span>
        </StyledRowInfo>
    )
}
export default RowInfo