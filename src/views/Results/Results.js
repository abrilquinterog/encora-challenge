

export const Results = ({personalInfo}) => {

    personalInfo.map((e) => {
        return (
            <>
            <div>{e.key}</div>
            <div>{e.value}</div>
            </>
        )
    });
}
