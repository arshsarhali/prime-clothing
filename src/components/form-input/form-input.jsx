

import { GroupContainer, InputContainer, LabelContainer } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) =>
(

    <GroupContainer>
        <InputContainer onChange={handleChange} {...otherProps}></InputContainer>

        {
            label ?
                (<LabelContainer {...otherProps } className='form-input-label'>
                    { label}
                </LabelContainer>)
                : null

        }
    </GroupContainer>
)

export default FormInput;