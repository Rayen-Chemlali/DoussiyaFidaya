import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_documentsCreateInput } from "../../../inputs/Lab_documentsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLab_documentsArgs {
  @TypeGraphQL.Field(_type => Lab_documentsCreateInput, {
    nullable: false
  })
  data!: Lab_documentsCreateInput;
}
