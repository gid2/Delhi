import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';

export const Switcher = styled((props: SwitchProps) => (
    <Switch
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        {...props}
    />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#EE6315',
            '& + .MuiSwitch-track': {
                backgroundColor: '#2B1910',
                opacity: 1,
                border: '1px solid #EE6315',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 20,
        height: 20,
    },
    '& .MuiSwitch-track': {
        borderRadius: 13,
        backgroundColor: '#222225',
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border'], {
            duration: 500,
        }),
    },
}));
