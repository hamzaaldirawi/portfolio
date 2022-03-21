import { 
    InputHolder,
    InputField,
    InputLabel
} from './styles'

const DashInputForm = ({ labelName, ...otherData}) => {
    return (
        <InputHolder>
            <InputLabel htmlFor={labelName}>{labelName}</InputLabel>
            <InputField {...otherData}></InputField>
        </InputHolder>
    )
}

export default DashInputForm;

