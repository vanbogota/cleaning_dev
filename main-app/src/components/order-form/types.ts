export type OrderFormProps = {    
    onSubmit: (formData: FormData) => void,
}

export type FormData = {
    name: string,
    address: string,
    option: string,
    phone: string,
    email: string,
    date: string,
    note: string
}