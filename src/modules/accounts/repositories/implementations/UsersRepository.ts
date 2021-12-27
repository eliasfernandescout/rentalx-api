import { getRepository, Repository } from 'typeorm';

import { ICreateUsersDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepositories';

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        name,
        username,
        email,
        password,
        driver_license,
    }: ICreateUsersDTO): Promise<void> {
        const user = this.repository.create({
            name,
            username,
            email,
            password,
            driver_license,
        });

        await this.repository.save(user);
    }
}

export { UsersRepository };