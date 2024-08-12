import { useContext } from "react";
import { ColorContext, NameContext } from "../../Store/ContextStore";

export default function ContextAPIDemo() {
    const color = useContext(ColorContext);
    const name = useContext(NameContext);
    
    return (
        <>
            <h1 style={{color:color}}>From Context API Demo Component</h1>
            <h3>Company name = {name}</h3>
        </>
    );
}
