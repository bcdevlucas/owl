import { Box, Button, Icon } from '@material-ui/core';
import './style.scss';

export interface ScrollToBottomProps {
    onClick: () => void;
}

export const ScrollToBottom = ({ onClick = () => {} }: ScrollToBottomProps) => {
    return (
        <Button className="scroll-to-bottom">
            <Box className="circle" display="flex" justifyContent="center" alignItems="center" onClick={onClick}>
                <Icon>arrow_downward</Icon>
            </Box>
        </Button>
    );
}

