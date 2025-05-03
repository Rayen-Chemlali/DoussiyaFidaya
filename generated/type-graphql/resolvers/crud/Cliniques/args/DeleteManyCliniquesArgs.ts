import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CliniquesWhereInput } from "../../../inputs/CliniquesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCliniquesArgs {
  @TypeGraphQL.Field(_type => CliniquesWhereInput, {
    nullable: true
  })
  where?: CliniquesWhereInput | undefined;
}
