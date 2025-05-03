import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_documentsUpdateInput } from "../../../inputs/Lab_documentsUpdateInput";
import { Lab_documentsWhereUniqueInput } from "../../../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLab_documentsArgs {
  @TypeGraphQL.Field(_type => Lab_documentsUpdateInput, {
    nullable: false
  })
  data!: Lab_documentsUpdateInput;

  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_documentsWhereUniqueInput;
}
