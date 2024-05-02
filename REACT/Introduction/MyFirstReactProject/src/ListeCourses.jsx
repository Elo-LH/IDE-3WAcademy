
function ListeCourses() {
    const items = ['Pain', 'Vin', 'Boursin'];
    
    return (
        <ul>
            {
                items.map((item, i) => <li key={i}>{item}</li>)
            }
        </ul>
    )
}

export default ListeCourses;
