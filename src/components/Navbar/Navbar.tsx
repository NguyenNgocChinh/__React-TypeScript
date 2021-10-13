import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    FormControl,
    Select,
    MenuItem,
    SelectChangeEvent,
    Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
    positionSelect: {
        color: 'white !important',
        borderBottom: '1px solid white',
    },
    white_text: {
        color: 'white',
    },
});

export default function Navbar() {
    const classes = useStyles();
    //state
    const [position, setPosition] = useState<string>('Fullstack developer');
    const [time, setTime] = useState<Date>(() => new Date(Date.now()));
    //use Effect
    useEffect(() => {
        const timer = setInterval(() => setTime(() => new Date(Date.now())), 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    //handler
    const handlePositionChange = (event: SelectChangeEvent<string>) => {
        setPosition(event.target.value);
    };
    return (
        <div>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Box display="flex" justifyContent="space-between" alignItems="center" width={1} py={1}>
                        <Typography variant="h6">My movies</Typography>
                        <Box textAlign="center">
                            <WelcomeMessage position={position} />
                            <Box mt={1}>
                                <FormControl variant="standard">
                                    <Select
                                        className={classes.positionSelect}
                                        value={position}
                                        onChange={handlePositionChange}
                                    >
                                        <MenuItem value={'Fullstack developer'}>Fullstack developer</MenuItem>
                                        <MenuItem value={'Frontend developer'}>Frontend developer</MenuItem>
                                        <MenuItem value={'Backend developer'}>Backend developer</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                        <Box textAlign="center">
                            <Typography variant="h6">{time.toUTCString()}</Typography>
                            <Button variant="contained" color="success">
                                Login
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}
