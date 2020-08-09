import React from 'react';

import Grid from './Grid.js';
import { isMobile } from "react-device-detect";

function GridWrapper(props){
	let columns = 4;
	if(isMobile)
		columns = 2;
	return <Grid
			extraFunc={props.extraFunc}
			gridId={"desktop"+props.gridId}
			thumbType={props.thumbType} 
			nof_columns={columns} 
			nof_thumbs={props.data.length} 
			data={props.data}
		/>;
}

export default GridWrapper;