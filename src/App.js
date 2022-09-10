import React, { useState } from 'react'
// Import component just built from colorblock.js
import ColorBlock from './ColorBlock'

function App(){
    let colors = [
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ]
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })

    return (
      <div className="App">
        {colorMap}
      </div>
    )
}

export default App;
