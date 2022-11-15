import { ReactNode } from "react";

import { StyledCard } from "./styles";

export default function Card({ children }: { children: ReactNode }) {
    return (
        <StyledCard>{children}</StyledCard>
    );
}