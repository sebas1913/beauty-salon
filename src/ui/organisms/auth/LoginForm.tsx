"use client";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { ILoginRequest } from "@/app/core/application/dto";
import { ErrorResponse, FieldError } from "@/app/core/application/dto/common/error-response.dto";
import { FormField } from "@/ui/molecules";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

const loginSchema = yup.object().shape({
    userName: yup
        .string()
        .email('El correo es inválido')
        .required('Campo obligatorio'),
    password: yup
        .string()
        .min(8, 'La contraseña debe tener mínimo 8 caracteres')
        .required('La contraseña es obligatoria')
});

const LoginForm = () => {
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<ILoginRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(loginSchema)
    });

    const router = useRouter();
    
    const handleLogin = async (data: ILoginRequest) => {
        console.log(data);

        try {
            const result = await signIn("credentials", {
                redirect: false,
                username: data.userName,
                password: data.password
            });

            if (result?.error) {
                console.log('Ocurrió un error', JSON.parse(result.error));
                handleError(JSON.parse(result.error));
                return;
            }
            router.push('/dashboard/services');
        } catch (error) {
            console.log(error);
        }
    };

    const handleError = (error: unknown) => {
        const errorData = error as ErrorResponse;

        if (errorData && errorData.errors) {
            if (Array.isArray(errorData.errors) && "field" in errorData.errors[0]) {
                errorData.errors.forEach((fieldError) => {
                    const { field, error } = fieldError as FieldError;
                    setError(field as keyof ILoginRequest, {
                        message: error
                    });
                });
            } else if ("message" in errorData.errors[0]) {
                setError('userName', {
                    message: errorData.errors[0].message,
                });
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handleLogin)}>
                <h2>Iniciar sesión</h2>
                
                <FormField<ILoginRequest>
                    control={control}
                    type="email"
                    label="Correo electrónico"
                    name="userName"
                    error={errors.userName}
                    placeholder="Ingresa tu correo"
                />

                <FormField<ILoginRequest>
                    control={control}
                    type="password"
                    label="Contraseña"
                    name="password"
                    error={errors.password}
                    placeholder="Ingresa tu contraseña"
                />

                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default LoginForm;
