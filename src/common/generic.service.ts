import { Injectable } from "@nestjs/common";
import { DeepPartial, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GenericService<T extends {id:String},CreateDto extends DeepPartial<T> ,UpdateDto extends QueryDeepPartialEntity<T>> {
  constructor(private readonly repository: Repository<T>) {}

  async findAll(relations: string[] = []): Promise<T[]> {
    return this.repository.find({ relations });
  }

async findOne(id: number, relations: string[] = []): Promise<T | null> {
  const entity = await this.repository.findOne({
    where: { id } as any,
    relations,
  });
  return entity;
}

  async create(createDto: CreateDto): Promise<any> {
    return this.repository.save(createDto);
  }

  async update(id: number, updateDto: UpdateDto): Promise<T | null> {
    await this.repository.update(id, updateDto);
    return this.findOne(id) as Promise<T | null>;
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async findByIds(ids: number[] , relations : string [] = []): Promise<T[]> {
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

}