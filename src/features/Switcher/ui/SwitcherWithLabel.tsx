import { Box, Typography } from '@mui/material';
import { SwitchProps } from '@mui/material/Switch';
import { Switcher } from 'features/Switcher/ui/Switcher';

interface SwitcherProps extends SwitchProps {
    garnish?: string;
}
export const SwitcherWithLabel: React.FC<SwitcherProps> = ({ garnish = 'Рис', ...props }) => (
    <Box display={'flex'} gap={1}>
    <Box>
        <Typography textAlign={'start'} color="white">Добавить дополнительный {garnish} ?</Typography>
    </Box>
        <Switcher {...props} />
    </Box>
);
