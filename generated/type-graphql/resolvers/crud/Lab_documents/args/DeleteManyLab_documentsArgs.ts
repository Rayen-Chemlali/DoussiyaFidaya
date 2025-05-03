import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_documentsWhereInput } from "../../../inputs/Lab_documentsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLab_documentsArgs {
  @TypeGraphQL.Field(_type => Lab_documentsWhereInput, {
    nullable: true
  })
  where?: Lab_documentsWhereInput | undefined;
}
