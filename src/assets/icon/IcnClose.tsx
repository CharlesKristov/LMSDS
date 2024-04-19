export default function IcnClose(props: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width || "1em"}
            height={props.height || "1em"}
            viewBox="0 0 413.348 413.348"
        >
            <path
                d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"
                fill={props.color || '#FFFFFF'}
            />
        </svg>
    );
}
