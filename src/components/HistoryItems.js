import "../styles/historyitems.scss";

function HistoryItems() {
    return (
        <div className="history-item positive">
            <div className="history-circle-section">
                <div className="circle"></div>
            </div>
            <div className="history-title-section">
                <h5>Rs.500.00</h5>
                <h5>transaction one</h5>
            </div>
            <div className="history-delete-section">
                <div className="history-delete-btn"></div>
            </div>
        </div>
    )
}

export default HistoryItems
