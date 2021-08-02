import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import './CustomPagination.css';


const darkTheme = createMuiTheme({
    palette:{
        type:'dark'
    }
})


const customPagination = ({setPage, numOfPages = 50}) => {
    const handlePageChange = (page) =>{
        setPage(page);
        window.scroll(0,0);
    };

    return (
    <div>
        <ThemeProvider theme={darkTheme}>
            <Pagination 
            className="paginationStyles"
            count={numOfPages}
            onChange = {(e) => handlePageChange(e.target.textContent)}
            variant="outlined"
            shape="rounded"
            color="primary"
            // hideNextButton
            // hidePrevButton
            />
        </ThemeProvider>
    </div>
    );
};

export default customPagination;