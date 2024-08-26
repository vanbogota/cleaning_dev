export type OrderFormProps = {    
    onSubmit: (formData: CustomFormData) => void,
}

export type CustomFormData = {
    name: string,
    address: string,
    option: string,
    phone: string,
    email: string,
    date: string,
    note: string
}