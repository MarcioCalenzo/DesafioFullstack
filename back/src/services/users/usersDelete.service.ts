import AppDataSource from "../../data-source"
import  User  from "../../entities/user.entities"
import { Response } from "express"
import { AppError } from "../../errors/appError"

const deleteUserService = async (id: string, res: Response) => {

  const userRepository = AppDataSource.getRepository(User)

  const users = await userRepository.findOneBy({id})
  
  if (users) {
  
    if (users.isActive === false) {
  
      throw new AppError("Bad request", 400 )
    }
  
    await userRepository.update({ id },{ isActive: false })

    return null

  } 
  else {

    throw new AppError("User not found", 404 )
  }
}
export default deleteUserService