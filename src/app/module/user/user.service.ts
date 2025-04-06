import { User } from "./user.model"


const getSingleUserFromDB = async(userEmail:string, user:JwtPayload) =>{
    const result = await User.findOne({email:userEmail});

    if(!result) throw new AppError(status.NOT_FOUND, "User not found");
}