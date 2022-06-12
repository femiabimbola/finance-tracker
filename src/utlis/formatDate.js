const formatDate = (d) => {
    const date = new Date(d);
    let month = `${date.getMonth()} + 1`;
    let day = `${date.get()}`;
    const year = d.getFullYear();

    if (month < 2) month =`0${month}`
    if (day < 2) day=`0${day}`
    return [day, month, year].join("-")
}


export default formatDate;