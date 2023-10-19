export interface IRequest {
    id: number;
    URL: string;
    returnType: string;
    format: string;
    status: string;
    parameters: IParameter[];
}

export interface IParameter {
    id: number;
    name: string;
    type: string;
    comment: string;
    requestId: number
}