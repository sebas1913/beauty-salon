"use client";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ICreateServiceRequest } from "@/app/core/application/dto/services-salon/services-request.dto";
import { FormField } from "@/ui/molecules";
import { yupResolver } from "@hookform/resolvers/yup";
import { Content } from "@/app/core/application/dto/services-salon/services-response.dto";
import styles from './form.module.scss';
import Title from "@/ui/atoms/Title";
import Button from "@/ui/atoms/button/Button";

interface IProps {
    closeModal: () => void;
    serviceID?: number;
}

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


const ServicesForm = ({ serviceID, closeModal }: IProps) => {
    const router = useRouter()

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue

    } = useForm<ICreateServiceRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(servicesSechema),
    })

    useEffect(() => {
        if (serviceID) {
            const fetchServiceID = async () => {
                try {
                    const response = await fetch(`/api/services/get/${serviceID}`);
                    const data: Content = await response.json();

                    //SetValue propio de hook form
                    setValue('name', data.name);
                    setValue('description', data.description);
                    setValue('price', data.price);

                } catch (error) {
                    console.log(error);
                }
            };

            fetchServiceID();
        }
    }, [serviceID]);


    const handleService = async (data: ICreateServiceRequest) => {

        try {

            if (serviceID) {
                const response = await fetch(`/api/services/update/${serviceID}`, {
                    method: "PUT",
                    body: JSON.stringify(data)
                });

                console.log('Actualizado');
                

                if (!response) {
                    console.log('Error el enviar el formulario :(');
                }

            } else {
                const response = await fetch('/api/services/create', {
                    method: "POST",
                    body: JSON.stringify(data),
                });


                if (!response) {
                    console.log('Error el enviar el formulario :(');
                }
            }

            router.refresh();
            closeModal();


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit(handleService)}>
                <Title className={styles.title} level={2}>Servicio</Title>

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
