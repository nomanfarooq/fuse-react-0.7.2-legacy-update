import {styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';

export const InputSelect = styled(InputBase)(({theme}) => ({
    '& .MuiInputBase-input': {
        borderRadius: 8,
        position: 'relative',
        //backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        padding: '10px 12px 10px 12px',
        //transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            //borderColor: '#80bdff',
            //boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));


export const InputText = styled(TextField)(({theme}) => ({
    '& .muiltr-gd4v8q-MuiFormLabel-root-MuiInputLabel-root': {
        transform: 'translate(8px, 10px) scale(1)',
    },
    '& .MuiInputBase-input': {
        padding: '10px 12px 10px 12px',
    },

}));
