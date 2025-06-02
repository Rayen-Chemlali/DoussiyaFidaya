import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MedicationsUpdateManyMutationInput } from "../../../inputs/MedicationsUpdateManyMutationInput";
import { MedicationsWhereInput } from "../../../inputs/MedicationsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMedicationsArgs {
  @TypeGraphQL.Field(_type => MedicationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: MedicationsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MedicationsWhereInput, {
    nullable: true
  })
  where?: MedicationsWhereInput | undefined;
}
