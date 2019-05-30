import React, { Component } from 'react';
//import DateRangePicker from 'react-bootstrap-daterangepicker';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-daterangepicker/daterangepicker.css';




class Grupo extends Component {
    render() {
        return (
            <div className="vista">
                <div className="grupo">
                    <h4 className="titulo_formulario"><b>Consulte</b></h4>
                    <form>
                        <div className="center3">
                            <div>
                                <i className="material-icons">swap_horiz</i>
                            </div>
                            
                            <div className="center">
                                <input type="text" />
                            </div>

                            <button type="submit" className="waves-effect waves-light btn-small ">Elegir fecha</button>
                        </div>

                    </form>
                </div>

            </div>
        );

    }
}

export default Grupo;