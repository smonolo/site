import { Fragment } from "react";

import Card from "@components/Card";

export default function Legal() {
    return (
        <Fragment>
            <div className='title'>Legal</div>
            <Card>
                <div className='map-flex'>
                    <div>
                        <div className='card-title'>About the company</div>
                        <div className='top'>Stefano Monolo</div>
                        <div>Corso America, 5, 20020</div>
                        <div>Arconate (MI), Lombardia, Italia</div>
                        <div>IT11729910965</div>
                    </div>
                    <iframe
                        className='map'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.5601253396076!
                        d8845053915956406!3d45.53905667910191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13
                        1!3m3!1m2!1s0x4786f36882cbb46b%3A0x6d22b1601cc9e88c!2sCorso%20America%2C%2
                        5%2C%2020020%20Arconate%20MI!5e0!3m2!1sen!2sit!4v1668869074158!5m2!1sen!2sit"
                        width="300"
                        height="150"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </Card>
            <Card>
                <div className='card-title'>Emails</div>
                <div className='top'>stefano@smnl.it</div>
                <div>s.monolo@pec.smnl.it</div>
            </Card>
        </Fragment>
    );
}