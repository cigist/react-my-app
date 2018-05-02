import React from 'react';
import '../App.css';

export default class ListEmploye extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <table className="tabel-custome">
                    <tr>
                        <th>Employee Name</th>
                    </tr>
                    {this.props.employee.map(emp => {
                        return (
                            <tr>
                                <td>
                                    {emp}
                                </td>
                            </tr>
                        )
                    })}

                </table>
            </div>
        )
    }
}