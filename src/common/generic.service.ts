import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

@Injectable()
export class GenericService<T extends { id: string }> { // we extends the entity with id property
  constructor(private readonly repository: Repository<T>) {}

  async findAll(relations: string[] = []): Promise<T[]> {
    return this.repository.find({ relations });
  }

async findOne(id: string, relations: string[] = []): Promise<T | null> {
  const entity = await this.repository.findOne({
    where: { id } as any,
    relations,
  });
  return entity;
}

  async create(createDto: any): Promise<T> {
    return this.repository.save(createDto);
  }

  async update(id: string, updateDto: any): Promise<T | null> {
    await this.repository.update(id, updateDto);
    return this.findOne(id) as Promise<T | null>;
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findByIds(ids: string[] , relations : string [] = []): Promise<T[]> {
    let entities: T[] = [];
    for (const id of ids) {
      const entity = await this.findOne(id , relations);
      if (entity) {
        entities.push(entity);
      }
    }
    return entities
    ;
  }

  async findByField(field: string, value: any, relations: string[] = []): Promise<T[]> {
    const alias = 'entity';
    const qb = this.repository.createQueryBuilder(alias);
  
    // Join specified relations
    for (const relation of relations) {
      qb.leftJoinAndSelect(`${alias}.${relation}`, relation);
    }
  
    // Check if it's a relation field (e.g., 'patient.id')
    if (field.includes('.')) {
      qb.andWhere(`${field} = :value`, { value });
    } else {
      qb.andWhere(`${alias}.${field} = :value`, { value });
    }
  
    return qb.getMany();
  }


  //await checkFieldValue('auth-id', 'patient.id', 'uuid-of-patient', ['patient']);

  async checkFieldValue(
    id: string,
    targetField: string,
    targetValue: any,
    relations: string[] = [],
  ): Promise<boolean> {
    const alias = 'entity';
    const qb = this.repository.createQueryBuilder(alias);
  
    // Always filter by entity ID
    qb.where(`${alias}.id = :id`, { id });

    // Join specified relations
    for (const relation of relations) {
        qb.leftJoinAndSelect(`${alias}.${relation}`, relation);
    }
  
    // Add field comparison
    if (targetField.includes('.')) {
      qb.andWhere(`${targetField} = :value`, { value: targetValue });
    } else {
      qb.andWhere(`${alias}.${targetField} = :value`, { value: targetValue });
    }
  
    const result = await qb.getOne();
    return !!result;
  }
  

}