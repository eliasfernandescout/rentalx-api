import { Request, Response } from 'express';

import { Category } from '../../model/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { CreateCategoryUseCase } from '../createCategory/CreateCategoryUseCase';

// interface IRequest {
//     name: string;
//     description: string;
// }

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute(): Category[] {
        const categories = this.categoriesRepository.list();
        return categories;
    }
}

export { ListCategoriesUseCase };
