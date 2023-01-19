import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js'


function Graph({userData}) {
    console.log('inside graph',userData);
    return (
        <Bar data={userData}/>
    )
}

export default Graph