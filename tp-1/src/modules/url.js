function parsearURL (url) {
    try {
    let urln = new URL(url);
    urln= {
    "host": urln.hostname,
    "pathname": urln.pathname,
    "parametros": urln.searchParams,
    }
    return urln;
    }
    catch(error) {
        console.error(error);
    }
    
}
export {parsearURL};