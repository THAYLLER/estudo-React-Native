import React from 'react';
import ReacDOM  from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente';

const elemento = document.getElementById('root')
ReacDOM.render(

    <div>
        <PrimeiroComponente value= "thayller"></PrimeiroComponente>
    </div>
,elemento)