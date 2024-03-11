import { UserService } from '../service/user.service';
import { CreateUserDto } from '../users.dto';
import { UserEntity } from '../entity/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(createUserDto: CreateUserDto): Promise<UserEntity>;
    getUserById(id: string): Promise<UserEntity>;
}
