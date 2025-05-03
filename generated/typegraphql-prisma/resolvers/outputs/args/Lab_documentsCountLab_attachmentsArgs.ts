import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_attachmentsWhereInput } from "../../inputs/Lab_attachmentsWhereInput";

@TypeGraphQL.ArgsType()
export class Lab_documentsCountLab_attachmentsArgs {
  @TypeGraphQL.Field(_type => Lab_attachmentsWhereInput, {
    nullable: true
  })
  where?: Lab_attachmentsWhereInput | undefined;
}
