import { 
    InputHolder,
    InputField,
    InputLabel
} from './styles'

const InputForm = ({ labelName, ...otherData}) => {
    return (
        <InputHolder>
            <InputField {...otherData}></InputField>
            <InputLabel>{labelName}</InputLabel>
        </InputHolder>
    )
}

export default InputForm;

