import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { urlJWT } from "../api/Api";

const userSchema = yup.object().shape({
	username: yup.string().required("Please enter your username"),
	password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
	

	const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(userSchema),
    });

	async function onSubmit(data) {

		console.log(errors);

		try {
			const response = await axios.post(urlJWT, data);
			console.log("response", response.data);
		} catch (error) {
			console.log("error", error);	
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset>
					<div>
						<input {...register("username")} />
						{errors.username && <span>{errors.username.message}</span>}
					</div>

					<div>
						<input{...register("password")} type="password" />
						{errors.password && <span>{errors.password.message}</span>}
					</div>
					<button>Logg inn</button>
				</fieldset>
			</form>
		</>
	);
}