import AuthCredentialsValidator from "@/validations/AuthValidator";
import { z } from "zod";

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>