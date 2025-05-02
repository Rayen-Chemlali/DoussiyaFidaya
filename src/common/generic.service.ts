import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

@Injectable()
export class GenericService<T extends { id: string }> { // we extends the entity with id property
  constructor(private readonly repository: Repository<T>) {}

  async genericFindAll(relations: string[] = []): Promise<T[]> {
    return this.repository.find({ relations });
  }

async genericFindOne(id: string, relations: string[] = []): Promise<T | null> {
  const entity = await this.repository.findOne({
    where: { id } as any,
    relations,
  });
  return entity;
}

  async genericCreate(createDto: any): Promise<T> {
    return this.repository.save(createDto);
  }

  async genericUpdate(id: string, updateDto: any): Promise<T | null> {
    await this.repository.update(id, updateDto);
    return this.genericFindOne(id) as Promise<T | null>;
  }

  async genericRemove(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async genericFindByIds(ids: string[] , relations : string [] = []): Promise<T[]> {
    let entities: T[] = [];
    for (const id of ids) {
      const entity = await this.genericFindOne(id , relations);
      if (entity) {
        entities.push(entity);
      }
    }
    return entities
    ;
  }

  async genericFindByField(field: string, value: any, relations: string[] = []): Promise<T[]> {
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

  async genericCheckFieldValue(
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