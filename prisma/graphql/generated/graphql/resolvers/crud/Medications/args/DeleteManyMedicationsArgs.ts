import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MedicationsWhereInput } from "../../../inputs/MedicationsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMedicationsArgs {
  @TypeGraphQL.Field(_type => MedicationsWhereInput, {
    nullable: true
  })
  where?: MedicationsWhereInput | undefined;
}
