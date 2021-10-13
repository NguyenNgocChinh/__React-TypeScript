import { Box } from "@mui/system";

interface WelcomeMessageProps{
    position: string,
    country?: string,
}

export default function WelcomeMessage({position, country="Vietnam"} : WelcomeMessageProps) {
    return (
        <div>
            <Box mb={1}>
                Welcome {position} from {country}
            </Box>
        </div>
    )
}
