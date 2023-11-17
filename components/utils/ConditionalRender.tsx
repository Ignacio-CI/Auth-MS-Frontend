import { ReactNode } from "react";

export default function conditionalRender({
    showWhen,
    children
}: {
    showWhen: boolean,
    children: ReactNode
}) {
    return showWhen ? <>{children}</> : <></>
}