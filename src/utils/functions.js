export const formatCash = n => {
    if (n < 1e3) return n;
    else if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    else if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    else if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    else return +(n / 1e12).toFixed(1) + "T";   //(n >= 1e12) condition applied
}

export const dateCalculation = publishDate => {
    let currentDate = new Date();
    let duration = +(currentDate.getTime() - new Date(publishDate).getTime());

    if(duration < (60 * 1000)) return duration.toFixed(0) + ` ${+duration === 1 ? "second" : "seconds"}`;
    else if(duration >= (60 * 1000) && duration < (60*60*1000)) return (duration/(60*1000)).toFixed(0) + ` ${+(duration/(60*1000)).toFixed(0) === 1 ? "minute" : "minutes"}`;
    else if(duration >= (60*60*1000) && duration < (24*60*60*1000)) return (duration/(60*60*1000)).toFixed(0) + ` ${+(duration/(60*60*1000)).toFixed(0) === 1 ? "hour" : "hours"}`;
    else if(duration >= (24*60*60*1000) && duration < (30*24*60*60*1000)) return (duration/(24*60*60*1000)).toFixed(0) + ` ${+(duration/(24*60*60*1000)).toFixed(0) === 1 ? "day" : "days"}`;
    else if(duration >= (30*24*60*60*1000) && duration < (365*24*60*60*1000)) return (duration/(30*24*60*60*1000)).toFixed(0) + ` ${ +(duration/(30*24*60*60*1000)).toFixed(0) === 1 ? "month" : "months"}`;
    else return (duration/365*24*60*60*1000).toFixed(0) + ` ${ +(duration/365*24*60*60*1000).toFixed(0) === 1 ? "year" : "years"}`;
}