import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return <h1>Maaf Halaman Tidak Ditemukan !!</h1>
}

export default ErrorPage;