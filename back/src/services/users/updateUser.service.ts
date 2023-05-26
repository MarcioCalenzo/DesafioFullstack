import AppDataSource from "../../data-source"
import User  from "../../entities/user.entities"
import { IUserUpdate } from "../../interfaces/users"
import { hash } from "bcryptjs"
import {AppError} from "../../errors/appError"

const updateUSerService = async ({name, email, password}: IUserUpdate, id: string): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.findOneBy({id})

    if (!users) {
        throw new AppError("User not found", 404)
    }

    await userRepository.update(
        id,
        {
            name: name ? name : users.name,
            email: email ? email : users.email,
            password: password ? await hash(password, 10) : users.password
        }
    )

    const updatedUser = await userRepository.findOneBy({id})

    return updatedUser
}

export default updateUSerService