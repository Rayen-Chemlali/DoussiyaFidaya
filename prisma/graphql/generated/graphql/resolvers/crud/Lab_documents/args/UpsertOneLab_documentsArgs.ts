import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_documentsCreateInput } from "../../../inputs/Lab_documentsCreateInput";
import { Lab_documentsUpdateInput } from "../../../inputs/Lab_documentsUpdateInput";
import { Lab_documentsWhereUniqueInput } from "../../../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLab_documentsArgs {
  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_documentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_documentsCreateInput, {
    nullable: false
  })
  create!: Lab_documentsCreateInput;

  @TypeGraphQL.Field(_type => Lab_documentsUpdateInput, {
    nullable: false
  })
  update!: Lab_documentsUpdateInput;
}
