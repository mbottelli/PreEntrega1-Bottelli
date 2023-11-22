import { lineWobble } from 'ldrs'

export const LoaderComponent = () => {
    lineWobble.register()
    return <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh"
    }}>
        <l-line-wobble
        size="150"
        stroke="5"
        bg-opacity="0.1"
        speed="1.75"
        color="white"
        ></l-line-wobble>
    </div>;
};