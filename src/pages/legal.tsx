import { Fragment } from "react";

import Card from "../components/Card";

export default function Legal() {
    return (
        <Fragment>
            <div className='title'>Legal</div>
            <Card>
                <div className='card-title'>About the company</div>
                <div className='top'>Stefano Monolo</div>
                <div>Corso America, 5, 20020</div>
                <div>Arconate (MI), Lombardia, Italia</div>
                <div>IT11729910965</div>
                <div>stefano@smnl.it</div>
            </Card>
            <Card>
                <div className='card-title'>Certified email</div>
                <div className='top'>s.monolo@pec.smnl.it</div>
            </Card>
        </Fragment>
    );
}