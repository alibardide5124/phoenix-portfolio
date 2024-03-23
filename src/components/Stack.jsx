import React from "react";
import stack from "../data/stack";
import StackItems from "./StackItem";

function Stack() {
    return (
        <div className="flex flex-col p-8 items-center justify-center">
            <p className="font-semibold text-xl md:text-2xl">Technologies and Languages I use</p>
            <p className="text-base md:text-lg">Ummm... Let me see...</p>
            <div className="flex flex-wrap items-center justify-center gap-4 p-8">
                {stack.map(item => (
                    <StackItems
                        name={item.name}
                        imgUrl={item.imgUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default Stack;