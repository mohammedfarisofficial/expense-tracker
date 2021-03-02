import HistoryItems from "./HistoryItems";
import "../styles/history.scss";

function History() {
    return (
        <div className="history">
            <div className="history-top-section">
                <div><h4 className="history-title">transaction history</h4></div>
                <div className="underline"></div>
            </div>
            <div className="history-bottom-section">
                <div className="history-list-container">
                    <HistoryItems />
                    <HistoryItems />
                    <HistoryItems />
                    <HistoryItems />
                    <HistoryItems />
                    <HistoryItems />
                    <HistoryItems />
                    <HistoryItems />
                    <HistoryItems />
                    <HistoryItems />
                    <HistoryItems />
                    <HistoryItems />
                </div>
            </div>
        </div>    
    )
}

export default History
