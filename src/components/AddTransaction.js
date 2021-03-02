import "../styles/addtransaction.scss";

function AddTransaction() {
    return (
        <div className="add-transaction">
            <div className="add-transaction-top">
                <div className="add-transaction-top-title">
                    <h4>add transaction</h4>
                    <div className="underline"></div>
                </div>
            </div>
            <div className="add-transaction-bottom">
                <div><label htmlFor="note">note</label></div>
                <div className="input-container">
                    <input type="text" placeholder="type either cost or income" name="note"/>
                    <input type="text" placeholder="Rs" name="note"/>
                </div>
                <div className="buttons">
                    <button type="submit">Add balance</button>
                    <button type="submit">Cost</button>
                </div>
            </div>
        </div>
    )
}
export default AddTransaction
