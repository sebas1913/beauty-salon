"use client";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { ICreateServiceRequest } from "@/app/core/application/dto/services-salon/services-request.dto";
import { ErrorResponse, FieldError } from "@/app/core/application/dto/common/error-response.dto";
import { FormField } from "@/ui/molecules";
import { yupResolver } from "@hookform/resolvers/yup";
import Title from "@/ui/atoms/Title";
import Button from "@/ui/atoms/button/Button";

const servicesSechema = yup.object().shape({
    name: yup
        .string()
        .required("El nombre del servicio es obligatorio"),

    description: yup
        .string()
        .required("La descripción del servicio es obligatoria"),

    price: yup
        .number()
        .required("El precio es obligatorio")
        .positive("El precio debe ser un valor positivo")
        .min(0.01, "El precio debe ser mayor a 0.01")
});


const ServicesForm = () => {
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors }

    } = useForm<ICreateServiceRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(servicesSechema)
    })

    const handleService = async (data: ICreateServiceRequest) => {
        try {
            const response = await fetch('/api/services/create',{
                method: "POST",
                body: JSON.stringify(data),
            });

            if (!response) {
                console.log('Error el enviar el formulario :(');
                
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleService)}>
                <Title level={2}>Servicio</Title>

                <FormField<ICreateServiceRequest>
                    control={control}
                    type="text"
                    label="Nombre"
                    name="name"
                    error={errors.name}
                    placeholder="Ingresa el nombre del servicio"
                />

                <FormField<ICreateServiceRequest>
                    control={control}
                    type="text"
                    label="Descripción"
                    name="description"
                    error={errors.description}
                    placeholder="Ingresa la descripción del servicio"
                />

                <FormField<ICreateServiceRequest>
                    control={control}
                    type="number"
                    label="Precio"
                    name="price"
                    error={errors.price}
                    placeholder="Ingresa el valor del servicio"
                />

                <Button className="primary" type="submit">Enviar</Button>
            </form>
        </div>
    )
}


export default ServicesForm;
