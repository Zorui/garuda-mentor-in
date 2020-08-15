import React from 'react';

import {JumbotronClassDetail, CommonFooter} from '../components/elements';
import ClassDetailContainer from '../components/ClassDetailContainer';


const ClassDetailScreen = () => {
    return(
        <>
            <JumbotronClassDetail/>
            <ClassDetailContainer/>
            <CommonFooter/>
        </>
    );
}

export default ClassDetailScreen;