
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import HookAxios from "../../hooks/HookAxios";
import { url } from "../../api/Api";
import AdminNavbar from "../navbars/AdminNavbar";
import AdminMenu from "./AdminMenu";
import Header from "../text/Heading";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from '../Loader';
import DeleteButton from "./DeleteButton";
import AdminMediaDD from "./AdminMediaDD";

const schema = yup.object().shape({
	navn: yup.string().required("Produktet må ha et navn"),
    sku: yup.string().required("Produktet må ha et sku"),
    pris: yup.number().required().positive().integer("Produktet må ha en pris"),
    pb: yup.string().required("Produktet må ha en produkt beskrivelse"),
    str: yup.string().required("Produktet må ha en størrelse"),
    tb: yup.string().required("Produktet må ha en teknisk beskrivelse"),
    va: yup.string().required("Produktet må ha en vaskeanvisning"),
});

export default function AdminEdit() {
	const [inputValue, setInputValue] = useState(null);
	const [fetchingPost, setFetchingPost] = useState(true);

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
	});

	const useAxios = HookAxios();

	let { id } = useParams();

    const detailUrl = url + id;

	useEffect(() => {

        async function getInputValues() {
				try {
					const resp = await useAxios.get(detailUrl);
					setInputValue(resp.data);
				} catch (error) {
					console.log(error);
				} finally {
					setFetchingPost(false);
				}
			} getInputValues();
		},[]
	);

	async function onSubmit(data) {

		data = {
            status: "publish",
            categories: "1",
            title: data.navn,
            fields: {
                img1: null,
                navn: data.navn,
                pb: data.pb,
                pris: data.pris, 
                sku: data.sku,
                str: data.pris,
                tb: data.tb,
                va: data.va,
            },
        };


		console.log(data);

		try {
			const resp = await useAxios.put(detailUrl, data);
			console.log(resp.data);
		} catch (error) {
			console.log(error);
		}
	}


	if (fetchingPost) return (
        <>
            <AdminNavbar />
            <div className="admin-page">
                <AdminMenu />
                <div className="admin-add-products">
                    <div className="add-products-content">
                        <Header title="Rediger produkt" />
                        <Loader />
                    </div>
                </div>
            </div>
        </>
    )


    return (
        <>
            <AdminNavbar />
            <div className="admin-page">
                <AdminMenu />
                <div className="admin-add-products">
                    <div className="add-products-content">
                        <Header title="Rediger produkt" />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <fieldset>
                                <div className="row-1 rows">
                                    <div className="field">
                                        <label>NAVN</label>
                                        <input defaultValue={inputValue.acf.navn} {...register("navn")} />
                                        {errors.navn && <span>{errors.navn.message}</span>}
                                    </div>


                                    <div className="field">
                                        <label>SKU</label>
                                        <input defaultValue={inputValue.acf.sku} {...register("sku")} />
                                        {errors.sku && <span>{errors.sku.message}</span>}
                                    </div>

                                    <div className="field">
                                        <label>ID</label>
                                        <input defaultValue={inputValue.id} {...register("id")} />
                                    </div>
                                </div>

                                <div className="row-2 rows">
                                    <div className="field">
                                        <label>PRIS</label>
                                        <input defaultValue={inputValue.acf.pris} {...register("pris")} />
                                        {errors.pris && <span>{errors.pris.message}</span>}
                                    </div>

                                    <div className="field">
                                        <label>STR</label>
                                        <input defaultValue={inputValue.acf.str} {...register("str")} />
                                        {errors.str && <span>{errors.str.message}</span>}
                                    </div>
                                </div>

                                <div className="row-3 rows">
                                    <div className="field">
                                        <label>PRODUKT BESKRIVELSE</label>
                                        <textarea defaultValue={inputValue.acf.pb} {...register("pb")} />
                                        {errors.pb && <span>{errors.pb.message}</span>}
                                    </div>

                                    <div className="field">
                                        <label>Bilde</label>
                                        <AdminMediaDD />
                                    </div>
                                </div>

                                <div className="row-4 rows">
                                    <div className="field">
                                        <label>TEKNISK BESKRIVELSE</label>
                                        <textarea defaultValue={inputValue.acf.tb} {...register("tb")} />
                                        {errors.tb && <span>{errors.tb.message}</span>}
                                    </div>

                                    <div className="field">
                                        <label>VASKEANVISNING</label>
                                        <textarea defaultValue={inputValue.acf.va} {...register("va")} />
                                        {errors.va && <span>{errors.va.message}</span>}
                                    </div>
                                </div>

                                <button>Legg til</button>
                            </fieldset>
                        </form>
                        <DeleteButton id={inputValue.id} />
                    </div>
                </div>
            </div>
        </>
	);
}

