import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho texto="Filho 1" numero={20} bool={true} />            
            <DiretaFilho texto="Filho 2" numero={23} bool={false} />            
            <DiretaFilho texto="Filho 3" numero={28} bool={true} />            
        </div>
    )
}