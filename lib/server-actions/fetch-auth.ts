'use server'

export default async function fetchData({
    path, method, data, cache, headers
}: { 
    path: string, 
    method: string, 
    data: object, 
    cache?: RequestCache
    headers?: object 
}) {
    const response = await fetch(path, {
        cache,
        method: method,
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const json = await response.json()
    console.log(json)
    
    return json
}