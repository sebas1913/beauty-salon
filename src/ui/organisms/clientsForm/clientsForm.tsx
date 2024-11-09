"use client";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ICreateClientRequest } from "@/app/core/application/dto/clients/clients-request.dto";
import { FormField } from "@/ui/molecules";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from './form.module.scss';
import Title from "@/ui/atoms/Title";
import Button from "@/ui/atoms/button/Button";
import { Content } from "@/app/core/application/dto/clients/clients-response.dto";

interface IProps {
    closeModal: () => void;
    clientID?: number;
}


const clientSchema = yup.object().shape({
    firstName: yup
        .string()
        .required("El nombre del cliente es obligatorio"),

    lastName: yup
        .string()
        .required("El apellido del cliente es obligatorio"),

    email: yup
        .string()
        .email('El correo es inválido')
        .required('El correo del cliente es obligatorio'),

    phone: yup
        .string()
        .required('El número del cliente es obligatorio')
        .min(10, 'El teléfono debe tener al menos 10 caracteres')
        .max(20, 'El teléfono debe tener menos de 20 caracteres')
});


const ClientForm = ({ clientID, closeModal }: IProps) => {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue

    } = useForm<ICreateClientRequest>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(clientSchema),
    })


    useEffect(() => {
        if (clientID) {
            const fetchClientID = async () => {
                try {
                    const response = await fetch(`/api/clients/get/${clientID}`);
                    const data: Content = await response.json();

                    setValue('firstName', data.firstName);
                    setValue('lastName', data.lastName);
                    setValue('email', data.email);
                    setValue('phone', data.phone);

                } catch (error) {
                    console.log(error);
                }
            };

            fetchClientID();
        }
    }, [clientID])

    const handleClient = async (data: ICreateClientRequest) => {

        try {
            if (clientID) {
                const response = await fetch(`/api/clients/update/${clientID}`, {
                    method: 'PUT',
                    body: JSON.stringify(data)
                });

                if (!response) {
                    console.log('Error el enviar el formulario :(');
                }

                console.log('Actualizado');
                

            } else {
                const response = await fetch('/api/clients/create', {
                    method: 'POST',
                    body: JSON.stringify(data)
                });

                if (!response) {
                    console.log('Error el enviar el formulario :(');
                }
            }

            router.refresh();
            closeModal();

        } catch (error) {
            console.log('Error', error);
        }
    }


    return (
        <form className={styles.form} onSubmit={handleSubmit(handleClient)}>
            <Title className={styles.title} level={2}>Clientes</Title>

            <FormField<ICreateClientRequest>
                control={control}
                type="text"
                label="Nombre"
                name="firstName"
                error={errors.firstName}
                placeholder="Ingresa tu nombre"
            />

            <FormField<ICreateClientRequest>
                control={control}
                type="text"
                label="Apellido"
                name="lastName"
                error={errors.lastName}
                placeholder="Ingresa tu apeliido"
            />

            <FormField<ICreateClientRequest>
                control={control}
                type="email"
                label="Correo electrónico"
                name="email"
                error={errors.email}
                placeholder="Ingresa tu correo electrónico"
            />

            <FormField<ICreateClientRequest>
                control={control}
                type="text"
                label="Teléfono"
                name="phone"
                error={errors.phone}
                placeholder="Ingresa tu teléfono"
            />

            <Button className="primary" type="submit">Enviar</Button>
        </form>
    )
}


export default ClientForm;
