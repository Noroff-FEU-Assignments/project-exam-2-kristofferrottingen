import React, { useState } from 'react';
import { baseUrl } from '../../api/Api';
import HookAxios from '../../hooks/HookAxios';

function AdminImageUpload() {
    const [imageValue, setImageValue] = useState("");

    console.log(imageValue.name);

    const url = baseUrl + "/wp/v2/media";

    console.log(url);

    const useAxios = HookAxios();

    
    async function sendImage() {
        try {
            const fd = new FormData();
            fd.append('image', imageValue, imageValue.name)
            const resp = await useAxios.post(url, fd);
            console.log(resp);
        } catch (error) {
			console.log(error);
		}
    }


    return (
        <div>
            <input type="file" onChange={event => {setImageValue(event.target.files[0])}} />
            <button onClick={sendImage}>Last opp</button>
        </div>
    );
    
};

export default AdminImageUpload;