import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BasicForm, COUNTRY_FILTER } from "../../models";
import { basicFormSchema } from "../../schemas";
import { BoxImage, Image } from "../../styles";
import { validationImage } from "../../utils";

export type PracticeHFormProps = {};

const PracticeHForm: React.FC<PracticeHFormProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitSuccessful },
    watch,
    unregister,
    setValue,
    setError,
    clearErrors,
  } = useForm<BasicForm>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthDate: "",
      country: "",
      province: "",
      terms: false,
    },
    resolver: zodResolver(basicFormSchema),
    mode: "onTouched",
  });
  const country = watch("country") === "ar";
  const onlyImage = watch("foto") instanceof File;

  const handleFormSubmit: SubmitHandler<BasicForm> = (data) => {
    console.log(data);
  };

  const optionCountries = Object.entries(COUNTRY_FILTER).map(([key, value]) => (
    <option key={key} value={key}>
      {value}
    </option>
  ));
  // const [image, setImage] = useState<File | FileList | null>(null);
  const [imagePreview, setImagePreview] = useState<FileList | null>(null);

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length == 1) {
      clearErrors("foto");
      const file = e.target.files;
      setValue("foto", file[0]);
      setImagePreview(file);
      console.log(validationImage(file[0]));
    } else {
      setImagePreview(null);
      setError("foto", { message: "Solo debe ingresar una imagen" });
    }
  };

  useEffect(() => {
    if (!country) {
      unregister("province");
    }
  }, [unregister, country]);

  useEffect(() => {
    if (!onlyImage) {
      setError("foto", { message: "Debe ingresar una imagen" });
    }
    return () => {
      clearErrors("foto");
    };
  }, [onlyImage]);
  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <label>
          Nombre
          <input type="text" {...register("name")} autoFocus />
          {errors.name && <span>{errors.name.message}</span>}
        </label>
        <label>
          Correo
          <input type="email" {...register("email")} />
        </label>
        {errors.email && <span>{errors.email.message}</span>}
        <label>
          Password
          <input type="password" {...register("password")} />
        </label>
        {errors.password && <span>{errors.password.message}</span>}
        <label>
          Confirmar Password
          <input type="password" {...register("confirmPassword")} />
        </label>
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
        <label>
          Mayor de Edad
          <input type="date" {...register("adult")} />
        </label>
        {errors.adult && <span>{errors.adult.message}</span>}
        <label>
          Fecha Nacimiento
          <input type="date" {...register("birthDate")} />
        </label>
        {errors.birthDate && <span>{errors.birthDate.message}</span>}
        <label>
          Pais
          <select {...register("country")}>
            <option value="">-- Seleccione --</option>
            {optionCountries}
          </select>
        </label>
        {country && (
          <>
            <input
              type="text"
              placeholder="province"
              {...register("province")}
            />
            {errors.province && <span>{errors.province.message}</span>}
          </>
        )}
        <label>
          Foto de perfil
          <input type="file" onChange={onImageChange} multiple />
        </label>
        {errors.foto && <span>{errors.foto.message}</span>}
        <label>
          <input type="checkbox" {...register("terms")} />
          Acepto los terminos y condiciones.
        </label>
        {errors.terms && <span>{errors.terms.message}</span>}
        <button disabled={!isValid}>Submit</button>
      </form>
      {isSubmitSuccessful && <span>Form submitted successfully</span>}
      {imagePreview &&
        Object.entries(imagePreview).map(([key, value]) => (
          <BoxImage key={key}>
            <Image src={URL.createObjectURL(value)} />
          </BoxImage>
        ))}
    </>
  );
};

export default PracticeHForm;

// https://dev.to/pranavb6/simple-react-hook-form-v7-tutorial-with-typescript-j78
// https://medium.com/@nelson_examiner/building-forms-in-react-with-typescript-and-react-hook-form-a-brief-introduction-d7cf3cc26568#:~:text=React%20Hook%20Form%20and%20Typescript%20make%20it%20easy%20to%20build,forms%20are%20robust%20and%20reliable.
