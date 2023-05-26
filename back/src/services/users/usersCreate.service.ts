import AppDataSource from "../../data-source"
import  User  from "../../entities/user.entities"
import { IUserRequest , IUser} from "../../interfaces/users"
import {AppError} from "../../errors/appError"
import { userWithoutPasswordSchema } from "../../schemas/users.schema"

const createUserService = async ( data: IUserRequest): Promise<IUser> => {

    const userRepository = AppDataSource.getRepository(User)


    const email = data.email
    const emailExists = await userRepository.findOneBy({email})

    if (emailExists) {
        throw new AppError("email already exists" , 409)
    }

    if (!data.password) {
        throw new AppError("Password is missing" , 400)
    }

    const user = userRepository.create(data)
    await userRepository.save(user)

    const userWithoutPassord = await userWithoutPasswordSchema.validate(user, {
        stripUnknown: true
    })

    return userWithoutPassord
}

export default createUserService