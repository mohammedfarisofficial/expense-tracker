import { Line } from 'react-chartjs-2';
import "../styles/graph.scss";

function Graph() {
    const income = [ 44,65,46,33,3,63,10];
    const expense = [ 50.34,63,74,74,34,57];
    return (
        <div className="graph">
                    <Line
                        data={{
                            datasets: [{
                                label: 'income in graph',
                                data: income,
                                backgroundColor: "rgb(41,92,227)",
                                borderColor: "linear-gradient(90deg, rgba(41,92,227,1) 0%, rgba(91,143,249,1) 52%)",
                                borderWidth: 1
                            },
                                {
                                    label: 'expense in graph',
                                    data: expense,
                                    backgroundColor: "rgb(100,55,217)",
                                    borderColor: "linear-gradient(90deg, rgba(100,55,217,1) 0%, rgba(159,123,241,1) 67%)",
                                    borderWidth: 1
                                }
                            ]
                        }}
                        width={150}
                        height={70}
                        options={{ 
                            maintainAspectRatio: false , 
                            scales: { 
                                yAxes: [
                                    {
                                        ticks:{
                                            beginAtZero: true
                                        }
                                    }
                                ]
                             }
                        }}
                        />
        </div>
    )
}

export default Graph
