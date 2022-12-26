import {
    Fragment,
    useEffect,
    useState
} from "react";

import Project from "@components/Project";

import { ProjectProps } from "@components/Project/types";
import { supabase } from "@lib/supabase";

export default function Work() {
    const [projects, setProjects] = useState<ProjectProps[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        const { data, error: err } = await supabase.from('projects').select();

        if (err) {
            return setError(err.message);
        }

        setProjects(data);
    };

    return (
        <Fragment>
            <div className='title'>Work</div>
            {error && <div className='error'>{error}</div>}
            {projects.map(project => (
                <Project key={project.id} {...project} />
            ))}
        </Fragment>
    );
}