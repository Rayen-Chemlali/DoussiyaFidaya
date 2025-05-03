import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_documentsWhereUniqueInput } from "../../../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneLab_documentsArgs {
  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_documentsWhereUniqueInput;
}
