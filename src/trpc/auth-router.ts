import AuthCredentialsValidator from "@/validations/AuthValidator";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "@/lib/getPayload";
import { TRPCError } from "@trpc/server";

export const authRouter = router({
    createPayloadUser: publicProcedure
        .input(AuthCredentialsValidator)
        .mutation(async ({ input }) => {
            const { email, password } = input
            const payload = await getPayloadClient()

            // check if user already exists

            const { docs: user } = await payload.find({
                collection: 'users',
                where: {
                    email: {
                        equals: email
                    }
                }
            })

            if (user.length !== 0) {
                throw new TRPCError({code: 'CONFLICT' })
            }

            await payload.create({
                collection: 'users',
                data: 
            })
        })
})