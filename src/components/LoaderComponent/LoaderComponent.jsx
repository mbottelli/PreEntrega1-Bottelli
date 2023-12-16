import { lineWobble } from 'ldrs'

export const LoaderComponent = () => {
    lineWobble.register()
    return <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh"
    }}>
        <l-line-wobble
        size="300"
        stroke="5"
        bg-opacity="0.1"
        speed="1.75"
        color="white"
        ></l-line-wobble>
    </div>;
};