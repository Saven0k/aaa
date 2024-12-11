import { Link } from "react-router-dom"
import SelectionComp from "../components/SelectionComponent/SelectionComp";
import BigTitle from '../components/BigTitle/BigTitle'

const SelectionPage = () => {
    return (
        <>
            <BigTitle>Добро пожаловать</BigTitle>
            <SelectionComp />
        </>
    )
}

export default SelectionPage;