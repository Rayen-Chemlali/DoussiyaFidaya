import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PharmaciesUpdateManyMutationInput } from "../../../inputs/PharmaciesUpdateManyMutationInput";
import { PharmaciesWhereInput } from "../../../inputs/PharmaciesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPharmaciesArgs {
  @TypeGraphQL.Field(_type => PharmaciesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PharmaciesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PharmaciesWhereInput, {
    nullable: true
  })
  where?: PharmaciesWhereInput | undefined;
}
