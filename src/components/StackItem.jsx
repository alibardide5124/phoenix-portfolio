import React from "react";

function StackItems({ name, imgUrl }) {
    return (
        <img alt={name} src={imgUrl} className="w-16 h-16 bg-stone-300 bg-opacity-30 rounded-md items-center justify-center p-3" />        
    )
}

export default StackItems;