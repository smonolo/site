import { Fragment, useEffect, useState } from "react";

import Email from "../components/Email";

import { supabase } from "../lib/supabase";

interface Email {
    id: number;
    email: string;
}

export default function Contact() {
    const [emails, setEmails] = useState<Email[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetchEmails();
    }, []);

    const fetchEmails = async () => {
        const { data, error: err } = await supabase.from('emails').select();

        if (err) {
            return setError(err.message);
        }

        setEmails(data);
    };

    return (
        <Fragment>
            <div className='title'>Contact</div>
            {error && <div className='error'>{error}</div>}
            {emails.map(({ id, email }) => (
                <Email key={id} email={email} />
            ))}
        </Fragment>
    );
}