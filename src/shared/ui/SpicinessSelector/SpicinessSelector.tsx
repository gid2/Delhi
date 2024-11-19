import { Box, IconButton, Button } from '@mui/material';
import chilliIcon from 'shared/assets/icons/chilliIcon.png';

interface SpicinessSelectorProps {
    spiciness: number | null;
    setSpiciness: (value: number) => void;
}

export const SpicinessSelector: React.FC<SpicinessSelectorProps> = ({ spiciness, setSpiciness }) => {
    const levels = ['не острый', 1, 2, 3];

    return (
        <Box display="flex" gap={1} flexWrap="wrap" justifyContent="flex-start">
            {levels.map((level, index) =>
                typeof level === 'number' ? (
                    <IconButton
                        key={level}
                        color="inherit"
                        onClick={() => setSpiciness(level)}
                        sx={{
                            backgroundColor: spiciness === level ? '#233400' : '#222225',
                            border: spiciness === level ? '2px solid #8AB800' : 'none',
                            boxShadow: 3,
                            borderRadius: 7,
                            height: '30px',
                            width: 'auto',
                            minWidth: '70px',
                        }}
                    >
                        {Array.from({ length: level }).map((_, index) => (
                            <img
                                key={index}
                                src={chilliIcon}
                                alt="Chilli Icon"
                                style={{
                                    height: '24px',
                                    width: '24px',
                                }}
                            />
                        ))}
                    </IconButton>
                ) : (
                    <Button
                        key={index}
                        color="inherit"
                        onClick={() => setSpiciness(0)}
                        sx={{
                            backgroundColor: spiciness === 0 ? '#233400' : '#222225',
                            border: spiciness === 0 ? '2px solid #8AB800' : 'none',
                            boxShadow: 3,
                            borderRadius: 7,
                            height: '30px',
                            width: '130px',
                            color: '#828289',
                            textTransform: 'none',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {level}
                    </Button>
                )
            )}
        </Box>
    );
};
