import React, { Component } from 'react';


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
                            <b>CODIGO:</b>
                            <div className="center">
                                <input type="text" />
                            </div>

                            <button type="submit" className="waves-effect waves-light btn-small ">CONSULTAR</button>
                        </div>

                    </form>
                </div>

            </div>
        );

    }
}

export default Grupo;