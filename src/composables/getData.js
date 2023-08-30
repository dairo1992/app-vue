import { ref } from "vue";
import axios from "axios";

export const useGetData = () => {
    const data = ref(null)
    const loading = ref(true)
    const error = ref(null)

    const getData = async (url) => {
        loading.value = true
        try {
            const res = await axios({
                method: 'get',
                url: url,
            })
            data.value = await res.data;
        } catch (e) {
            error.value = e
        } finally {
            loading.value = false
        }
    }
    return { getData, data, loading, error }
}