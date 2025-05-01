import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PharmacysService } from './pharmacys.service';
import { Pharmacy } from './entities/pharmacy.entity';
import { CreatePharmacyInput } from './dto/create-pharmacy.input';
import { UpdatePharmacyInput } from './dto/update-pharmacy.input';

@Resolver(() => Pharmacy)
export class PharmacysResolver {
  constructor(private readonly pharmacysService: PharmacysService) {}

  @Mutation(() => Pharmacy)
  createPharmacy(@Args('createPharmacyInput') createPharmacyInput: CreatePharmacyInput) {
    return this.pharmacysService.create(createPharmacyInput);
  }

  @Query(() => [Pharmacy], { name: 'pharmacys' })
  findAll() {
    return this.pharmacysService.findAll();
  }

  @Query(() => Pharmacy, { name: 'pharmacy' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pharmacysService.findOne(id);
  }

  @Mutation(() => Pharmacy)
  updatePharmacy(@Args('updatePharmacyInput') updatePharmacyInput: UpdatePharmacyInput) {
    return this.pharmacysService.update(updatePharmacyInput.id, updatePharmacyInput);
  }

  @Mutation(() => Pharmacy)
  removePharmacy(@Args('id', { type: () => Int }) id: number) {
    return this.pharmacysService.remove(id);
  }
}
