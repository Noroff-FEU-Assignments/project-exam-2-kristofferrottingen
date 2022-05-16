import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import HookAxios from "../../hooks/HookAxios";
import { url } from "../../api/Api";
import AdminNavbar from "../navbars/AdminNavbar";
import AdminMenu from "./AdminMenu";

const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
});

export default function AdminAddProduct () {


	const useAxios = HookAxios();

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
	});


	async function onSubmit(data) {

		data.status = "publish";

        data.categories = "1";

		console.log(data);

		try {
			const resp = await useAxios.post(url, data);
			console.log(resp.data);
		} catch (error) {
			console.log(error);
		}
	}



	return (
        <>
            <AdminNavbar />
            <div className="admin-page">
                <AdminMenu />
                <div className="admin-add-products">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset>
                            <div>
                                <input {...register("title")} />
                                {errors.title && <span>{errors.title.message}</span>}
                            </div>

                            <div>
                                <textarea {...register("content")}  />
                            </div>

                            <button>Legg til</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
	);
}