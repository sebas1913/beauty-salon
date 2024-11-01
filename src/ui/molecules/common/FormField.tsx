"use client";

import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import { Input } from "../../atoms/Input/Input";

interface IPropsFormField<T extends FieldValues> {
    label: string;
    type: string;
    name: Path<T>;
    control: Control<T>
    error?: FieldError;
    id?: string;
    placeholder?: string;
}

export const FormField = <T extends FieldValues>({
    label, type, name, control, error, id, placeholder
}: IPropsFormField<T>) => {
    return (
        <div className="">
            <label htmlFor={id || label.toLowerCase()} className="">{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input 
                        id={id || label.toLowerCase()}
                        type={type}
                        error={error?.message}
                        placeholder={placeholder || `Ingresa tu ${label.toLowerCase()}`}
                        {...field}
                    />
                )}
            />
        </div>
    )
}