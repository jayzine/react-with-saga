import React from "react";
import {connect} from 'react-redux'
import { Button, Paper, Typography, Box, LinearProgress } from '@mui/material';
import styled from 'styled-components';
import { AddUserAction } from "./actions";

const User = ({ AddUserAction, counter }) => {
    const handleClick = (flag) => {
        AddUserAction({
            count: flag === "+" ? 1 : -1
        })
    }

    return (
    <Paper elevation={3}>
        <Box style={{ padding: 10}}>
            { counter?.loading && <LinearProgress />}
            <br/>
            <FlexSpaceBetween>
                <Typography>Action</Typography> 
                <Button variant="contained" onClick={() => handleClick("+")} size="small">
                    Click Me! for +
                </Button>
                <Button variant="contained" onClick={() => handleClick("-")} size="small">
                    Click Me! for -
                </Button>
            </FlexSpaceBetween>
            <BlockDiv>
                <FlexSpaceBetween>
                    <Typography variant="body1">Counter: {counter?.counter}</Typography>
                </FlexSpaceBetween>
            </BlockDiv>
        </Box>
    </Paper>)
}


const FlexSpaceBetween = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const BlockDiv = styled.div`
    display: block
`

const mapStateToProps = (state) =>({
    counter: state.userData
});

const mapDispatchToProps = ({
    AddUserAction
});

export default connect(mapStateToProps, mapDispatchToProps)(User);