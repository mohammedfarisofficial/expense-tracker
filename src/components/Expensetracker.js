import "../styles/expensetracker.scss";
import Box from "./Box";

function Expensetracker() {
    return (
        <div className="expense-tracker">
            <div className="expense-title-container">
                <h2>Expense tracker</h2>
            </div>
            <div className="expense-body-container">
                <div className="expense-body-inner-container">
                    <Box loadComponent="balance" />
                    <Box loadComponent="history"/>
                    <Box loadComponent="add-transaction"/>
                    <Box loadComponent="graph"/>
                </div>
            </div>
        </div>
    )
}

export default Expensetracker
