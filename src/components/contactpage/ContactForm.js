import React from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import HookAxios from '../../hooks/HookAxios';
import { url } from '../../api/Api';

const userSchema = yup.object().shape({
    title: yup.string().required("Navnet ditt mangler").min(3, "Det må minst være 3 bokstaver"),
    slug: yup.string().required("Din e-post adresse mangler").email("Denne e-posten finnes ikke, eller er skrevet feil"),
    content: yup.string().required("Vennligst skriv meldingen din her").min(10, "Meldingen må inneholde minimum ti bokstaver"),
});




function ContactForm() {

    

    const useAxios = HookAxios();
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(userSchema),
    });

    async function dataSubmit(data) {

        data.status = "publish";

        data.categories = "11";

        const form = document.querySelector(".contact-form");

        try {
            
			const resp = await useAxios.post(url, data);
			console.log(resp.data);

            if(resp.data.modified){
                form.innerHTML=`<h2>Takk for din henvendelse!</h2>`;
            }
		} catch (error) {
			console.log(error);
		}
    }

    console.log(errors);

    return (
        <form className='contact-form' onSubmit={handleSubmit(dataSubmit)}>
            <label>Navn</label>
            <input {...register("title")} />
            {errors.title && <span>{errors.title.message}</span>}
            <label>E-post</label>
            <input {...register("slug")} />
            {errors.slug && <span>{errors.slug.message}</span>}
            <label>Melding</label>
            <input type="text" className='contact-message' {...register("content")} />
            {errors.content && <span>{errors.content.message}</span>}

            <button>Send</button>
        </form>
    )
}

export default ContactForm;
  