import {useSelector} from "react-redux";
import {StyledWrapper} from "./StyledTrashPopup";

const TrashPopup = () => {
    const totalCount = useSelector(state => state.trashData.totalCount)

    return (
        <>{totalCount ? <StyledWrapper>{totalCount}</StyledWrapper> : <></>}</>
    )
}
export default TrashPopup