import { IRequest } from "../interfaces/IRequest";

export const requests: IRequest[] = [
    {
        id: 1,
        URL: 'http://example.com',
        returnType: 'json',
        format: 'json',
        status: 'activo',
        parameters: [
            {
                id: 1,
                name: 'param1',
                type: 'string',
                comment: 'Este es un parámetro de ejemplo',
                requestId: 1
            },
            {
                id: 2,
                name: 'param2',
                type: 'number',
                comment: 'Este es otro parámetro de ejemplo',
                requestId: 1
            }
        ]
    },
    {
        id: 2,
        URL: 'http://example.org',
        returnType: 'xml',
        format: 'xml',
        status: 'activo',
        parameters: [
            {
                id: 3,
                name: 'param3',
                type: 'boolean',
                comment: 'Este es un tercer parámetro de ejemplo',
                requestId: 2
            }
        ]
    },
    {
        id: 3,
        URL: 'http://example.net',
        returnType: 'text',
        format: 'text',
        status: 'activo',
        parameters: []
    }
];


function deleteRequest(requests: IRequest[], id: number, callback: (request: IRequest) => void) {
    const request = requests.find(r => r.id === id);
    if (request) {
        request.status = 'ELIMINADO';
        callback(request);
    }
}

deleteRequest(requests, 1, (request) => {
    console.log(request);
});