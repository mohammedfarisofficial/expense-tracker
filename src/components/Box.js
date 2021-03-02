import "../styles/box.scss";
import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import Graph from "./Graph";
import History from "./History";

function Box({ loadComponent }) {

    var renderCompo;
    
    if( loadComponent === "balance"){
        renderCompo = <Balance />;
    }else if( loadComponent === "history") {
        renderCompo = <History />;
    }else if ( loadComponent === "add-transaction"){
        renderCompo = <AddTransaction />
    }else{
        renderCompo = <Graph />;
    }

    return (
        <div className="box">
               {
                renderCompo
               }
        </div>
    )
}

export default Box
