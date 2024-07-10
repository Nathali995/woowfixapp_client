
export const getYearList = ()=>{
    const years = [];
    var n = (new Date()).getFullYear()+1
for (let index = n; index >= 1920; index--) {
    years.push({value: index, label: index});  
}
    return years;
}