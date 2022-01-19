
import { createTheme } from '@material-ui/core/styles';

const arcBlue="#0B75B9";
const arcOrange="#FFA500";
const Theme = createTheme({
    palette: {
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab:{
            disableGutters:true,
            fontFamily:"Raleway",
            fontSize:"1rem",
            textTransform:"none",
            color:"white"
        },
        estimateButton:{
            fontFamily:"Raleway",
            textTransform:"none",
            fontSize:"1rem",
            color:"white"
        },
    }
});

export default Theme;
