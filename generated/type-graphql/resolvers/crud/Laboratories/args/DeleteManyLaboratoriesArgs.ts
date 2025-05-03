import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LaboratoriesWhereInput } from "../../../inputs/LaboratoriesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLaboratoriesArgs {
  @TypeGraphQL.Field(_type => LaboratoriesWhereInput, {
    nullable: true
  })
  where?: LaboratoriesWhereInput | undefined;
}
