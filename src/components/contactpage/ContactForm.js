import React from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const userSchema = yup.object().shape({
    firstname: yup.string().required("Navnet ditt mangler").min(3, "Det må minst være 3 bokstaver"),
    email: yup.string().required("Din e-post adresse mangler").email("Denne e-posten finnes ikke, eller er skrevet feil"),
    message: yup.string().required("Vennligst skriv meldingen din her").min(10, "Meldingen må inneholde minimum ti bokstaver"),
});


function ContactForm() {
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(userSchema),
    });

    function dataSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (
        <form className='contact-form' onSubmit={handleSubmit(dataSubmit)}>
            <label>Navn</label>
            <input {...register("firstname")} />
            {errors.firstname && <span>{errors.firstname.message}</span>}
            <label>E-post</label>
            <input {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}
            <label>Melding</label>
            <input type="text" className='contact-message' {...register("message")} />
            {errors.message && <span>{errors.message.message}</span>}

            <button>Send</button>
        </form>
    )
}

export default ContactForm;
  