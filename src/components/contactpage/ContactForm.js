import React from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const userSchema = yup.object().shape({
    firstname: yup.string().required("Your firstname is missing").min(3, "Your firstname has to be at least 3 characters"),
    lastname: yup.string().required("Your lastname is missing").min(4, "Your lastname has to be at least 4 characters"),
    email: yup.string().required("Please insert your email").email("This is not a valid email. Try again!"),
    message: yup.string().required("You have not entered any message").min(10, "The message has to be at least 10 characters"),
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
            <label>Firstname*</label>
            <input {...register("firstname")} />
            {errors.firstname && <span>{errors.firstname.message}</span>}
            <label>Lastname*</label>
            <input {...register("lastname")} />
            {errors.lastname && <span>{errors.lastname.message}</span>}
            <label>Email*</label>
            <input {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}
            <label>Message*</label>
            <input className='contact-messsage' {...register("message")} />
            {errors.message && <span>{errors.message.message}</span>}

            <button>Send</button>
        </form>
    )
}

export default ContactForm;
  