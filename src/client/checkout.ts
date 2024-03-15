import createClient from "openapi-fetch";
import type { paths } from "../api/dintero-checkout-api";

export const checkoutClint = createClient<paths>({ baseUrl: "https://api.dintero.com/v1" });