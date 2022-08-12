export interface ErrorMessage {
    [key: string]: string
}

export const errorMessage: ErrorMessage = {
    required: 'this field is not empty',
    email: 'enail is not valid',
    min: 'this field is min'
}